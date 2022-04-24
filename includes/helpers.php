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
    public function enqueues($hook)
    {
        /**
         * Only for Admin Add/Edit Pages 
         */
        if ($hook == 'post-new.php' || $hook == 'post.php' || $hook == 'site-editor.php') {

            $controls_dependencies = include_once TOC_BLOCK_ADMIN_PATH . '/dist/controls.asset.php';
            wp_register_script(
                "toc-block-controls-util",
                TOC_BLOCK_ADMIN_URL . '/dist/controls.js',
                array_merge($controls_dependencies['dependencies'], array("essential-blocks-edit-post")),
                $controls_dependencies['version'],
                true
            );

            wp_localize_script('toc-block-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => (float) get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
            ));


            //
            wp_register_style(
                'toc-editor-css',
                TOC_BLOCK_ADMIN_URL . '/dist/controls.css',
                array("create-block-table-of-content-block", "essential-blocks-animation"),
                $controls_dependencies['version'],
                'all'
            );
        }

        global $pagenow;

        if ($pagenow == 'post-new.php' || $pagenow == 'post.php') {
            wp_localize_script('toc-block-controls-util', 'eb_conditional_localize', array(
                'editor_type' => 'edit-post'
            ));
        } else if ($pagenow == 'site-editor.php') {
            wp_localize_script('toc-block-controls-util', 'eb_conditional_localize', array(
                'editor_type' => 'edit-site'
            ));
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
