<?php
// TODO: Making Custom API Query that return the image of the result
add_action('rest_api_init', 'search_product_custom');

function search_product_custom(){
	register_rest_route( 'products/v1', 'search',  array(
		/* WP_REST_SERVER::READABLE = ‘GET’ */
		'methods'=> WP_REST_SERVER::READABLE,
		'callback'=> 'search_product_custom_result',
    ));
}

function search_product_custom_result($data) {
    // Result of the search query
    $queryResult = new WP_Query( array(
        'post_type'      => 'product',
        's'              =>  sanitize_text_field($data['term']),
    ));
    $result = array();

    while( $queryResult->have_posts() ){
        $queryResult->the_post();
            array_push($result, array(
                'title'        => get_the_title(),
                'landingpage'  => get_permalink(tr_posts_field('product_landingpage')),
                'thumbnail'    => wp_get_attachment_url(tr_posts_field('product_image')),
            ));
    }

    // Test Result Will Be On [domain]/wp-json/products/v1/search
	return $result;
}
