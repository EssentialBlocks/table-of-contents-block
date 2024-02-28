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

            $controls_dependencies = include_once TOC_BLOCK_ADMIN_PATH . '/dist/modules.asset.php';
            $dependencies = [];
            $version = TOC_BLOCK_VERSION;
            if (is_array($controls_dependencies) && isset($controls_dependencies['dependencies'])) {
                $dependencies = array_merge($dependencies, $controls_dependencies['dependencies']);
            }
            if(is_array($controls_dependencies) && isset($controls_dependencies['version'])) {
                $version = $controls_dependencies['version'];
            }

            wp_register_script(
                "toc-block-controls-util",
                TOC_BLOCK_ADMIN_URL . 'dist/modules.js',
                $dependencies,
                $version,
                true
            );

            wp_localize_script('toc-block-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => (float) get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
								'fontAwesome' => 'true'
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
            $version = TOC_BLOCK_VERSION;
            if(is_array($controls_dependencies) && isset($controls_dependencies['version'])) {
                $version = $controls_dependencies['version'];
            }
						wp_register_style(
							'essential-blocks-iconpicker-css',
							TOC_BLOCK_ADMIN_URL . 'dist/style-modules.css',
							[],
							TOC_BLOCK_VERSION,
							'all'
						);
            wp_enqueue_style(
                'toc-editor-css',
                TOC_BLOCK_ADMIN_URL . 'dist/modules.css',
                ['essential-blocks-iconpicker-css'],
                $version,
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
    public static function generate_toc( $data, $listStyle, $itemCollapsed ) {
        $toc   = "<$listStyle class='eb-toc__list'>";
        $stack = [  ];

        for ( $i = 0; $i < count( $data ); $i++ ) {
            $level   = $data[ $i ][ 'level' ];
            $content = $data[ $i ][ 'content' ];
            $link    = $data[ $i ][ 'link' ];

            while ( count( $stack ) > 0 && $stack[ count( $stack ) - 1 ][ 'level' ] >= $level ) {
                array_pop( $stack );
                $toc .= "</li></$listStyle>";
            }

            $toc .= "<li><a href=\"#$link\">$content</a>";

            if ( $i < count( $data ) - 1 && $data[ $i + 1 ][ 'level' ] > $level ) {
                if ( $itemCollapsed == 'true' && ! count( $stack ) ) {
                    $toc .= '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M6.75 9.75L9 7.5L11.25 9.75" stroke="#252D3B" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 15.75C9.88642 15.75 10.7642 15.5754 11.5831 15.2362C12.4021 14.897 13.1462 14.3998 13.773 13.773C14.3998 13.1462 14.897 12.4021 15.2362 11.5831C15.5754 10.7642 15.75 9.88642 15.75 9C15.75 8.11358 15.5754 7.23583 15.2362 6.41689C14.897 5.59794 14.3998 4.85383 13.773 4.22703C13.1462 3.60023 12.4021 3.10303 11.5831 2.76381C10.7642 2.42459 9.88642 2.25 9 2.25C7.20979 2.25 5.4929 2.96116 4.22703 4.22703C2.96116 5.4929 2.25 7.20979 2.25 9C2.25 10.7902 2.96116 12.5071 4.22703 13.773C5.4929 15.0388 7.20979 15.75 9 15.75Z" stroke="#252D3B" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>';
                }
                $toc .= "<$listStyle class='eb-toc__list'>";
                array_push( $stack, [ 'level' => $level, 'content' => $content, 'link' => $link ] );
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
    public static function getHeadersFromContent( $visibleHeaders, $postContent )
		{
        if ( empty( $postContent ) ) {
            return [  ];
        }

        $dom = new \DOMDocument();
        libxml_use_internal_errors( true );
        $dom->loadHTML( '<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body>' . $postContent . '</body></html>' );
        libxml_use_internal_errors( false );

        $queryArray = [ "h1", "h2", "h3", "h4", "h5", "h6" ];
        if ( isset( $visibleHeaders ) ) {
            $queryArray = [  ];
            if ( $visibleHeaders[ 0 ] ) {
                $queryArray[  ] = "self::h1";
            }
            if ( $visibleHeaders[ 1 ] ) {
                $queryArray[  ] = "self::h2";
            }
            if ( $visibleHeaders[ 2 ] ) {
                $queryArray[  ] = "self::h3";
            }
            if ( $visibleHeaders[ 3 ] ) {
                $queryArray[  ] = "self::h4";
            }
            if ( $visibleHeaders[ 4 ] ) {
                $queryArray[  ] = "self::h5";
            }
            if ( $visibleHeaders[ 5 ] ) {
                $queryArray[  ] = "self::h6";
            }
        }

        $queryString = implode( ' or ', $queryArray );
        $queryString = '//*[' . $queryString . ']';

        if ( ! self::areAllFalse( $visibleHeaders ) ) {
            $xpath           = new \DOMXpath( $dom );
            $headingElements = iterator_to_array( $xpath->query( $queryString ) );
            return self::getHeadingsFromHeadingElements( $headingElements );
        }

        return [  ];
    }

    /**
     * generate heading from headings elements
     */
    public static function getHeadingsFromHeadingElements( $headingElements )
		{
        $headings = [  ];
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

            $headings[  ] = [
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
    public static function parseTocSlug( $slug )
    {
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
