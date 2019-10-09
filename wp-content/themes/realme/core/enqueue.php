<?php

add_action( 'wp_enqueue_scripts', 'realme_theme_scripts' );
if ( ! function_exists( 'realme_theme_scripts' ) ) {
	function realme_theme_scripts() {
		// JS
		wp_enqueue_script( 'lodash-4.17.15', THEME_URI . '/js/lodash.min.js' );
		wp_enqueue_script( 'jquery-3.3.1', THEME_URI . '/js/jquery-3.3.1.min.js' );
		wp_enqueue_script( 'popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', array( 'jquery-3.3.1' ), '1.0', true );
		wp_enqueue_script( 'slick', THEME_URI . '/js/slick.min.js', array( 'jquery-3.3.1' ), '1.0', true );
		wp_enqueue_script( 'bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', array( 'jquery-3.3.1' ), '1.0', true );
		wp_enqueue_script( 'realme-scripts', THEME_URI . '/js/main-scripts.js', array( 'jquery-3.3.1' ), microtime(), true );
		wp_enqueue_script( 'realme-search', THEME_URI . '/js/search.js', microtime(), true );
		wp_enqueue_script( 'realme-custom', THEME_URI . '/js/custom.js', microtime(), true );

		// CSS
		wp_enqueue_style( 'slick', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css' );
		wp_enqueue_style( 'bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' );
		wp_enqueue_style( 'google-font', 'https://fonts.googleapis.com/css?family=Encode+Sans+Semi+Expanded:100,200,300,400,500,600,700,800,900&amp;subset=vietnamese' );
		wp_enqueue_style( 'realme-styles', THEME_URI . '/css/styles.css' );
	}
}
