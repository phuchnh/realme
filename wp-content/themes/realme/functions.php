<?php
/**
 * Define template dir + uri for easier access
 */
define( 'THEME_DIR', get_template_directory() );
define( 'THEME_URI', get_template_directory_uri() );
define( 'THEME_URI_CHILD', get_stylesheet_directory_uri() );

/**
 * Custom theme options
 */
define( 'THEME_OPTIONS_NAME', 'realme_theme_options' );


/**
 * Load scripts|styles
 */
include 'core/enqueue.php';

/**
 * Load helpers functions
 */
include 'core/helpers.php';
include 'core/imei-check.php';
include 'core/searching.php';

/**
 * Add custom post type
 */
include 'ctpt/product.php';
include 'ctpt/serie.php';
include 'ctpt/banner.php';

/**
 * Typerocket hooks
 */
add_filter( 'tr_theme_options_name', function () {
	return THEME_OPTIONS_NAME;
} );
add_filter( 'tr_theme_options_page', function () {
	return THEME_DIR . '/theme-options.php';
} );

/**
 * Hooks
 */
add_action( 'after_setup_theme', function () {
	add_theme_support( 'title-tag' );
} );
