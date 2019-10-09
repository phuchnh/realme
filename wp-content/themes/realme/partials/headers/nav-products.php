<?php
/**
 * Get products
 */
$args  = array(
	'post_type' => 'product',
);
$query = new WP_Query( $args );
?>

<?php if ( $query->have_posts() ): ?>
  <div class="nav-product">
    <div class="container">
      <ul class="nav-product__list">
		  <?php while ( $query->have_posts() ): $query->the_post() ?>
            <li>
              <a href="#" target="">
                <img src="<?php echo wp_get_attachment_image_url( tr_posts_field( 'product_image' ) ); ?>" alt="">
				  <?php echo get_the_title(); ?>
              </a>
            </li>
		  <?php endwhile; ?>
		  <?php wp_reset_postdata(); ?>
      </ul>
    </div>
  </div>
<?php else: get_template_part( 'partials/headers/nav-products-none' ); ?>
<?php endif; ?>
