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
}

TOC_Helper::register();
