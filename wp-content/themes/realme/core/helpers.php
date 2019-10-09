<?php

if ( ! function_exists( 'the_page_exists_by_slug' ) ) {
	/**
	 * Check if page exists by slug.
	 *
	 * @param  string  $slug
	 *
	 * @return int|boolean false if no posts exist; post ID otherwise.
	 */
	function the_page_exists_by_slug( $slug ) {
		$query = new WP_Query( array(
			'post_type'      => 'page',
			'post_status'    => 'any',
			'name'           => $slug,
			'posts_per_page' => 1,
			'fields'         => 'ids'
		) );

		return ( $query->have_posts() ? $query->posts[0] : false );
	}
}
