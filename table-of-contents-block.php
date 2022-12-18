<?php

/**
 * Plugin Name:     Table Of Contents Block
 * Plugin URI: 		https://essential-blocks.com
 * Description:     Automatically Add Table of Contents Block for your WordPress Posts & Pages
 * Version:         1.3.4
 * Author:          WPDeveloper
 * Author URI: 		https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     table-of-contents-block
 *
 * @package         table-of-contents-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

define('TOC_BLOCK_VERSION', "1.3.4");
define('TOC_BLOCK_ADMIN_URL', plugin_dir_url(__FILE__));
define('TOC_BLOCK_ADMIN_PATH', dirname(__FILE__));

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_table_of_content_block_init()
{
	$script_asset_path = TOC_BLOCK_ADMIN_PATH . "/dist/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "block/table-of-content" block first.'
		);
	}
	$script_asset = require($script_asset_path);
	$all_dependencies = array_merge($script_asset['dependencies'], array(
		'wp-blocks',
		'wp-i18n',
		'wp-element',
		'wp-block-editor',
		'toc-block-controls-util',
		'essential-blocks-eb-animation',
	));

	$index_js     = TOC_BLOCK_ADMIN_URL . 'dist/index.js';
	wp_register_script(
		'create-block-table-of-content-block-editor',
		$index_js,
		$all_dependencies,
		$script_asset['version'],
		true
	);

	$load_animation_js = TOC_BLOCK_ADMIN_URL . 'assets/js/eb-animation-load.js';
	wp_register_script(
		'essential-blocks-eb-animation',
		$load_animation_js,
		array(),
		TOC_BLOCK_VERSION,
		true
	);

	$animate_css = TOC_BLOCK_ADMIN_URL . 'assets/css/animate.min.css';
	wp_register_style(
		'essential-blocks-animation',
		$animate_css,
		array(),
		TOC_BLOCK_VERSION
	);

	$style_css = TOC_BLOCK_ADMIN_URL . 'dist/style.css';
	wp_register_style(
		'create-block-table-of-content-block',
		$style_css,
		array("essential-blocks-animation"),
		TOC_BLOCK_VERSION
	);

	$frontend_js_path = include_once dirname(__FILE__) . "/dist/frontend/index.asset.php";
	$frontend_js = TOC_BLOCK_ADMIN_URL . 'dist/frontend/index.js';
	wp_register_script(
		'essential-blocks-toc-frontend',
		$frontend_js,
		$frontend_js_path['dependencies'],
		$frontend_js_path['version'],
		true
	);

	if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/table-of-contents')) {
		register_block_type(
			TOC_Helper::get_block_register_path("table-of-contents-block/table-of-contents-block", TOC_BLOCK_ADMIN_PATH),
			array(
				'editor_script'	=> 'create-block-table-of-content-block-editor',
				'editor_style' 	=> 'create-block-table-of-content-block',
				'render_callback' => function ($attributes, $content) {
					if (!is_admin()) {
						wp_enqueue_style('create-block-table-of-content-block');
						wp_enqueue_style('essential-blocks-animation');
						wp_enqueue_script('essential-blocks-toc-frontend');
						wp_enqueue_script('essential-blocks-eb-animation');
					}
					return $content;
				}
			)
		);
	}
}

add_action('init', 'create_block_table_of_content_block_init', 99);
