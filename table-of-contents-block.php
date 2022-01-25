<?php

/**
 * Plugin Name:     Table Of Contents Block
 * Plugin URI: 		https://essential-blocks.com
 * Description:     Automatically Add Table of Contents Block for your WordPress Posts & Pages
 * Version:         1.1.0
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

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/admin-enqueue.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';


function create_block_table_of_content_block_init()
{
	$dir = dirname(__FILE__);

	$script_asset_path = "$dir/build/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "table-of-contents-block/table-of-contents-block" block first.'
		);
	}

	$index_js = 'build/index.js';

	wp_register_script(
		'create-block-table-of-content-block-editor',
		plugins_url($index_js, __FILE__),
		// array(
		// 	'wp-blocks',
		// 	'wp-i18n',
		// 	'wp-element',
		// 	'wp-block-editor',
		// 	'wp-editor',
		// ),
		array_merge($script_asset_path['dependencies'], array("essential-blocks-edit-post")),
		$script_asset_path['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-table-of-content-block-editor',
		plugins_url($editor_css, __FILE__),
		array("create-block-table-of-content-block"),
		filemtime("$dir/$editor_css")
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-table-of-content-block',
		plugins_url($style_css, __FILE__),
		array(),
		filemtime("$dir/$style_css")
	);

	$frontend_js = 'build/frontend.js';
	wp_register_script(
		'essential-blocks-toc-frontend',
		plugins_url($frontend_js, __FILE__),
		array("jquery", "wp-editor"),
		filemtime("$dir/$frontend_js")
	);

	register_block_type('table-of-contents-block/table-of-contents-block', array(
		'editor_script' => 'create-block-table-of-content-block-editor',
		'editor_style'  => 'create-block-table-of-content-block-editor',
		// 'style'         => 'create-block-table-of-content-block',
		'render_callback' => function ($attribs, $content) {
			if (!is_admin()) {
				wp_enqueue_style('create-block-table-of-content-block');
				wp_enqueue_script('essential-blocks-toc-frontend');
			}
			return $content;
		}
	));
}
add_action('init', 'create_block_table_of_content_block_init');
