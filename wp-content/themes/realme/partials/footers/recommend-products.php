<?php
/**
 * Get products
 */
$args  = array(
	'post_type'      => 'product',
	'tag'            => 'recommend',
	'posts_per_page' => 5,
);
$query = new WP_Query( $args );
?>
<h3>Đề xuất</h3>
<?php if ( $query->have_posts() ): ?>
  <ul>
	  <?php while ( $query->have_posts() ): $query->the_post() ?>
        <li><a href="#"><?php echo get_the_title(); ?></a></li>
	  <?php endwhile; ?>
	  <?php wp_reset_postdata(); ?>
  </ul>
<?php endif; ?>
