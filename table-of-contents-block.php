<?php

/**
 * Plugin Name:     Table Of Contents Block
 * Plugin URI:      https://essential-blocks.com
 * Description:     Automatically Add Table of Contents Block for your WordPress Posts & Pages
 * Version:         1.3.6
 * Author:          WPDeveloper
 * Author URI:     	https://wpdeveloper.net
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

define( 'TOC_BLOCK_VERSION', "1.3.6" );
define( 'TOC_BLOCK_ADMIN_URL', plugin_dir_url( __FILE__ ) );
define( 'TOC_BLOCK_ADMIN_PATH', dirname( __FILE__ ) );

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_table_of_content_block_init() {
    $script_asset_path = TOC_BLOCK_ADMIN_PATH . "/dist/index.asset.php";
    if ( ! file_exists( $script_asset_path ) ) {
        throw new Error(
            'You need to run `npm start` or `npm run build` for the "block/table-of-content" block first.'
        );
    }
    $script_asset     = require $script_asset_path;
    $all_dependencies = array_merge( $script_asset['dependencies'], [
        'wp-blocks',
        'wp-i18n',
        'wp-element',
        'wp-block-editor',
        'toc-block-controls-util',
        'essential-blocks-eb-animation'
    ] );

    $index_js = TOC_BLOCK_ADMIN_URL . 'dist/index.js';
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
        [],
        TOC_BLOCK_VERSION,
        true
    );

    $clipboard_js = TOC_BLOCK_ADMIN_URL . 'assets/js/clipboard.min.js';
    wp_register_script(
        'essential-blocks-clipboard',
        $clipboard_js,
        [],
        TOC_BLOCK_VERSION,
        true
    );

    $animate_css = TOC_BLOCK_ADMIN_URL . 'assets/css/animate.min.css';
    wp_register_style(
        'essential-blocks-animation',
        $animate_css,
        [],
        TOC_BLOCK_VERSION
    );
    wp_register_style(
        'fontawesome-frontend-css',
        TOC_BLOCK_ADMIN_URL . 'assets/css/fontawesome/css/all.min.css',
        [],
        TOC_BLOCK_VERSION,
        "all"
    );

    $style_css = TOC_BLOCK_ADMIN_URL . 'dist/style.css';
    wp_register_style(
        'create-block-table-of-content-block',
        $style_css,
        ["essential-blocks-animation","fontawesome-frontend-css"],
        TOC_BLOCK_VERSION
    );

    $frontend_js_path = include_once dirname( __FILE__ ) . "/dist/frontend/index.asset.php";
    $frontend_js      = TOC_BLOCK_ADMIN_URL . 'dist/frontend/index.js';
    wp_register_script(
        'essential-blocks-toc-frontend',
        $frontend_js,
        $frontend_js_path['dependencies'],
        $frontend_js_path['version'],
        true
    );

    if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/table-of-contents' ) ) {
        register_block_type(
            TOC_Helper::get_block_register_path( "table-of-contents-block/table-of-contents-block", TOC_BLOCK_ADMIN_PATH ),
            [
                'editor_script'   => 'create-block-table-of-content-block-editor',
                'editor_style'    => 'create-block-table-of-content-block',
                'render_callback' => function ( $attributes, $content ) {
                    if ( ! is_admin() ) {
                        wp_enqueue_style( 'create-block-table-of-content-block' );
                        wp_enqueue_style( 'essential-blocks-animation' );
                        wp_enqueue_script( 'essential-blocks-toc-frontend' );
                        wp_enqueue_script( 'essential-blocks-eb-animation' );
                        wp_enqueue_script( 'essential-blocks-clipboard' );
                    }


										$the_post = get_post();

										if ( ! $the_post ) {
												return;
										}

										$default_attributes = [
											'title'              => "Table of Contents",
											"collapsible"        => false,
											"initialCollapse"    => false,
											"displayTitle"       => true,
											"isSmooth"           => true,
											"seperator"          => false,
											"isSticky"           => false,
											"contentAlign"       => 'left',
											"scrollTarget"       => "scroll_to_toc",
											"stickyPosition"     => 'left',
											"enableCopyLink"     => false,
											"showListSeparator"  => false,
											"scrollToTop"        => false,
											"scrollToTopIcon"    => "fas fa-angle-up",
											"stickyHideOnMobile" => false,
											"hideOnDesktop"      => false,
											"hideOnTab"          => false,
											"hideOnMobile"       => false,
											"topOffset"          => '',
											"listStyle"          => "ul",
											"enableListStyle"    => false,
											"itemCollapsed"      => false,
											"preset"             => "style-1"
									];

										$attributes         = wp_parse_args( $attributes, $default_attributes );
										$blockId            = esc_attr($attributes['blockId']);
										$scrollToTop        = $attributes[ 'scrollToTop' ] ? 'true' : 'false';
										$scrollToTopIcon    = $attributes[ 'scrollToTopIcon' ];
										$listStyle          = $attributes[ 'listStyle' ];
										$collapsible        = $attributes[ 'collapsible' ] ? 'true' : 'false';
										$initialCollapse    = $attributes[ 'initialCollapse' ] ? 'true' : 'false';
										$stickyHideOnMobile = $attributes[ 'stickyHideOnMobile' ] ? 'true' : 'false';
										$isSticky           = $attributes[ 'isSticky' ] ? 'true' : 'false';
										$stickyPosition     = $attributes[ 'stickyPosition' ];
										$scrollTarget       = $attributes[ 'scrollTarget' ];
										$enableCopyLink     = $attributes[ 'enableCopyLink' ] ? 'true' : 'false';
										$displayTitle       = $attributes[ 'displayTitle' ] ? 'true' : 'false';
										$title              = $attributes[ 'title' ];
										$isSmooth           = $attributes[ 'isSmooth' ] ? 'true' : 'false';
										$itemCollapsed      = $attributes[ 'itemCollapsed' ] ? 'true' : 'false';
										$topOffset          = $attributes[ 'topOffset' ];
										$preset             = $attributes[ 'preset' ];
										$enableListStyle    = $attributes[ 'enableListStyle' ];
										$hideOnDesktop      = $attributes[ 'hideOnDesktop' ] ? 'true' : 'false';
										$hideOnTab          = $attributes[ 'hideOnTab' ] ? 'true' : 'false';
										$hideOnMobile       = $attributes[ 'hideOnMobile' ] ? 'true' : 'false';
										$visibleHeaders     = isset( $attributes[ 'visibleHeaders' ] ) ? $attributes[ 'visibleHeaders' ] : array_fill( 0, 6, true );
										$content            = html_entity_decode( preg_replace( "~<!--(.*?)-->~s", "", $the_post->post_content ) );
										$headers            = TOC_Helper::getHeadersFromContent( $visibleHeaders, wp_kses_post( $content ) );
										$deleteHeaderList   = isset( $attributes[ 'deleteHeaderList' ] ) ? $attributes[ 'deleteHeaderList' ] : [  ];
										$classHook          = isset( $attributes[ 'classHook' ] ) ? $attributes[ 'classHook' ] : '';

										$container_class     = [  ];
										$container_class[  ] = 'eb-toc-container ' . $blockId;
										$container_class[  ] = $isSticky == 'true' ? 'eb-toc-sticky-' . $stickyPosition : '';
										$container_class[  ] = $isSticky == 'true' ? 'eb-toc-is-sticky' : 'eb-toc-is-not-sticky';
										$container_class[  ] = $collapsible == 'true' ? 'eb-toc-collapsible' : 'eb-toc-not-collapsible';
										$container_class[  ] = $initialCollapse == 'true' ? 'eb-toc-initially-collapsed' : 'eb-toc-initially-not-collapsed';
										$container_class[  ] = $scrollToTop ? 'eb-toc-scrollToTop' : 'eb-toc-not-scrollToTop';
										$container_class[  ] = $preset;
										$container_class[  ] = $enableListStyle === false ? 'list-style-none' : '';

										$wrapper_class     = [  ];
										$wrapper_class[  ] = $collapsible == 'true' && $initialCollapse == 'true' && $isSticky == 'false' ? 'hide-content' : '';

										$output = "";
										$output .= '<div ' . wp_kses_data( get_block_wrapper_attributes() ) . '>';
										$output .= '<div class="eb-parent-wrapper eb-parent-' . $blockId . ' ' . $classHook . '">';
										$output .= '<div class="' . implode( " ", $container_class ) . '"
														data-scroll-top="' . $scrollToTop . '"
														data-scroll-top-icon="' . $scrollToTopIcon . '"
														data-collapsible="' . $collapsible . '"
														data-sticky-hide-mobile="' . $stickyHideOnMobile . '"
														data-sticky="' . $isSticky . '"
														data-scroll-target="' . $scrollTarget . '"
														data-copy-link="' . $enableCopyLink . '"
														data-editor-type="' . TOC_Helper::get_editor_type() . '"
														data-hide-desktop="' . $hideOnDesktop . '"
														data-hide-tab="' . $hideOnTab . '"
														data-hide-mobile="' . $hideOnMobile . '"
														data-itemCollapsed="' . $itemCollapsed . '"
														>';
										$output .= '<div class="eb-toc-header">';
										if ( $isSticky == 'true' ) {
												$output .= '<span class="eb-toc-close eb-toc-sticky-' . $stickyPosition . '">';
												$output .= '</span>';
										}
										if ( $displayTitle == 'true' ) {
												$output .= '<div class="eb-toc-title">' . $title . '</div>';
										}

										$output .= '</div>'; // header
										$output .= '<div class="eb-toc-wrapper ' . implode( " ", $wrapper_class ) . '"
										data-headers="' . htmlspecialchars( json_encode( $headers ), ENT_QUOTES, 'UTF-8' ) . '"
										data-visible="' . json_encode( $visibleHeaders ) . '"
										data-delete-headers="' . htmlspecialchars( json_encode( $deleteHeaderList ), ENT_QUOTES, 'UTF-8' ) . '"
										data-smooth="' . $isSmooth . '"
										data-top-offset="' . $topOffset . '"
										>';

										if ( $visibleHeaders && count( $headers ) > 0 && count( array_filter( $headers, function ( $header ) use ( $visibleHeaders ) {
												return isset( $visibleHeaders[ $header[ 'level' ] - 1 ] );
										} ) ) > 0 ) {
												$newHeaders = [  ];
												foreach ( $headers as $index => $item ) {
														if (
																isset( $deleteHeaderList ) &&
																is_array( $deleteHeaderList ) &&
																count( $deleteHeaderList ) > 0 &&
																isset( $deleteHeaderList[ $index ] ) &&
																isset( $deleteHeaderList[ $index ][ "isDelete" ] ) &&
																$deleteHeaderList[ $index ][ "isDelete" ] === false
														) {
																$newHeaders[  ] = $headers[ $index ];
														}
												}

												$output .= '<div class="eb-toc__list-wrap">';
												$output .= count( $newHeaders ) > 0 ? TOC_Helper::generate_toc( $newHeaders, $listStyle, $itemCollapsed ) : TOC_Helper::generate_toc( $headers, $listStyle, $itemCollapsed );
												$output .= '</div>';
										}

										$output .= '</div>'; // wrapper
										$stickyPositionClass = $isSticky ? " eb-toc-button-$stickyPosition" : '';
										if ( 'false' !== $isSticky ) {
												$output .= '<button class="eb-toc-button ' . $stickyPositionClass . '">';
												if ( $displayTitle ) {
														$output .= '<div>' . $title . '</div>';
												}
												$output .= '</button>';
										}
										$output .= '</div>'; // container
										$output .= '</div>'; // parent wrapper
										$output .= "</div>"; // block

										return $output;
                }
            ]
        );
    }
}

add_action( 'init', 'create_block_table_of_content_block_init', 99 );
