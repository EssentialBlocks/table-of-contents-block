<?php

/**
 * Load google fonts.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class TOC_Helper
{
    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * The Constructor.
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueues'));
    }

    /**
     * enqueue function
     *
     * @access public
     */
    public function enqueues()
    {
        global $pagenow;

        /**
         * Only for Admin Add/Edit Pages
         */
        if ($pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php' || ($pagenow == 'themes.php' && !empty($_SERVER['QUERY_STRING']) && str_contains($_SERVER['QUERY_STRING'], 'gutenberg-edit-site'))) {

            $controls_dependencies = include_once TOC_BLOCK_ADMIN_PATH . '/dist/controls.asset.php';
            wp_register_script(
                "toc-block-controls-util",
                TOC_BLOCK_ADMIN_URL . 'dist/controls.js',
                array_merge($controls_dependencies['dependencies']),
                $controls_dependencies['version'],
                true
            );

            wp_localize_script('toc-block-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => (float) get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
            ));

            if ($pagenow == 'post-new.php' || $pagenow == 'post.php') {
                wp_localize_script('toc-block-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-post'
                ));
            } else if ($pagenow == 'site-editor.php' || $pagenow == 'themes.php') {
                wp_localize_script('toc-block-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-site'
                ));
            }

            wp_enqueue_style(
                'toc-editor-css',
                TOC_BLOCK_ADMIN_URL . 'dist/controls.css',
                array(),
                $controls_dependencies['version'],
                'all'
            );
        }
    }

    public static function get_block_register_path($blockname, $blockPath)
    {
        if ((float) get_bloginfo('version') < 5.8) {
            return $blockname;
        } else {
            return $blockPath;
        }
    }

		/**
     * Get Editor Type
     *
     * @return string
     */
    public static function get_editor_type() {
        global $pagenow;
        $editor_type = "";
        if ( $pagenow == 'post-new.php' || $pagenow == 'post.php' ) {
            $editor_type = 'edit-post';
        } elseif ( $pagenow == 'site-editor.php' || ( $pagenow == 'themes.php' && isset( $_GET['page'] ) && $_GET['page'] == 'gutenberg-edit-site' ) ) {
            $editor_type = 'edit-site';
        } elseif ( $pagenow == 'widgets.php' ) {
            $editor_type = 'edit-widgets';
        }
        return $editor_type;
    }

		/**
     * Check if a array all values are false
     *
     * @return boolean
     */
    public static function areAllFalse( $array ) {
        return array_reduce( $array, function ( $carry, $item ) {
            return $carry && ( $item === false );
        }, true );
    }

		/**
     * Generate TOC
     *
     * @param array $data
     */
    public static function generate_toc( $data, $listStyle ) {
        $toc   = "<$listStyle class='eb-toc__list'>";
        $stack = [];

        for ( $i = 0; $i < count( $data ); $i++ ) {
            $level   = $data[$i]['level'];
            $content = $data[$i]['content'];
            $link    = $data[$i]['link'];

            while ( count( $stack ) > 0 && $stack[count( $stack ) - 1]['level'] >= $level ) {
                array_pop( $stack );
                $toc .= "</li></$listStyle>";
            }

            $toc .= "<li><a href=\"#$link\">$content</a>";

            if ( $i < count( $data ) - 1 && $data[$i + 1]['level'] > $level ) {
                $toc .= "<$listStyle class='eb-toc__list'>";
                array_push( $stack, ['level' => $level, 'content' => $content, 'link' => $link] );
            }
        }
        while ( count( $stack ) > 0 ) {
            array_pop( $stack );
            $toc .= "</li></$listStyle>";
        }

        $toc .= "</$listStyle>";

        return $toc;
    }

    /**
     * Generate headers from content
     */
    public static function getHeadersFromContent( $visibleHeaders, $postContent, $content ) {

        $wp_charset = get_bloginfo( 'charset' );
        $doc        = new \DOMDocument( '1.0', $wp_charset );
        libxml_use_internal_errors( true );
        $tempPostContentDOM = mb_convert_encoding( $postContent, 'HTML-ENTITIES', 'UTF-8' );
        $doc->loadHTML(
            // loadHTML expects ISO-8859-1, so we need to convert the post content to
            // that format. We use htmlentities to encode Unicode characters not
            // supported by ISO-8859-1 as HTML entities. However, this function also
            // converts all special characters like <pre or > to HTML entities, so we use
            // htmlspecialchars_decode to decode them.
            htmlspecialchars_decode(
                utf8_decode(
                    htmlentities(
                        '<!DOCTYPE html><html><head><title>:D</title><body>' .
                        htmlspecialchars( $tempPostContentDOM ) .
                        '</body></html>',
                        ENT_COMPAT,
                        'UTF-8',
                        false
                    )
                ),
                ENT_COMPAT
            )
        );
        libxml_use_internal_errors( false );

        $queryArray = ["h1", "h2", "h3", "h4", "h5", "h6"];
        if ( isset( $visibleHeaders ) ) {
            $queryArray = [];
            if ( $visibleHeaders[0] ) {
                $queryArray[] = "self::h1";
            }
            if ( $visibleHeaders[1] ) {
                $queryArray[] = "self::h2";
            }
            if ( $visibleHeaders[2] ) {
                $queryArray[] = "self::h3";
            }
            if ( $visibleHeaders[3] ) {
                $queryArray[] = "self::h4";
            }
            if ( $visibleHeaders[4] ) {
                $queryArray[] = "self::h5";
            }
            if ( $visibleHeaders[5] ) {
                $queryArray[] = "self::h6";
            }
        }

        $queryString = implode( ' or ', $queryArray );
        $queryString = '//*[' . $queryString . ']';

        if ( ! self::areAllFalse( $visibleHeaders ) ) {
            $xpath           = new \DOMXPath( $doc );
            $headingElements = iterator_to_array( $xpath->query( $queryString ) );
            return self::getHeadingsFromHeadingElements( $headingElements );
        }

        return [];
    }

    /**
     * generate heading from headings elements
     */
    public static function getHeadingsFromHeadingElements( $headingElements ) {
        $headings = [];
        foreach ( $headingElements as $index => $heading ) {
            $level = null;
            switch ( $heading->tagName ) {
            case "h1":
                $level = 1;
                break;
            case "h2":
                $level = 2;
                break;
            case "h3":
                $level = 3;
                break;
            case "h4":
                $level = 4;
                break;
            case "h5":
                $level = 5;
                break;
            case "h6":
                $level = 6;
                break;
            }

            $value          = apply_filters( 'eb_dynamic_tag_value', $heading->textContent, '', true );
            $value          = empty( $value ) ? $heading->textContent : $value;
            $heading_string = self::parseTocSlug( wp_strip_all_tags( $value ) );

            $headings[] = [
                "level"   => $level,
                "content" => $value,
                "text"    => $value,
                "link"    => preg_match( '/^[A-Za-z0-9\-]+$/', $heading_string ) === 1 ? $heading_string : "eb-table-content-$index"
            ];
        }

        return $headings;
    }

		/**
     * parse slug
     */
    public static function parseTocSlug( $slug ) {
        if ( ! $slug ) {
            return $slug;
        }
        // TODO: have to remove accent function
        $parsedSlug = strtolower( $slug );
        $parsedSlug = preg_replace( '/&(amp;)/', '', $parsedSlug ); // Remove &
        $parsedSlug = preg_replace( '/&(mdash;)/', '', $parsedSlug ); // Remove long dash
        $parsedSlug = preg_replace( '/[\x{2013}\x{2014}]/u', '', $parsedSlug ); // Remove long dash
        $parsedSlug = preg_replace( '/[&]nbsp[;]/i', '-', $parsedSlug ); // Replace inseccable spaces
        $parsedSlug = preg_replace( '/\s+/', '-', $parsedSlug ); // Replace spaces with -
        $parsedSlug = preg_replace( '/[&\/\\#,^!+()$~%.\'":*?<>{}@‘’”“]/', '', $parsedSlug ); // Remove special chars
        $parsedSlug = preg_replace( '/\-+/', '-', $parsedSlug ); // Replace multiple - with single -
        $parsedSlug = preg_replace( '/^-+/', '', $parsedSlug ); // Trim - from start of text
        $parsedSlug = preg_replace( '/-+$/', '', $parsedSlug ); // Trim - from end of text

        return urldecode( rawurlencode( $parsedSlug ) );
    }

}

TOC_Helper::register();
