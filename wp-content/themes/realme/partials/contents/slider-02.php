<?php
/**
 * Get products
 */
$args  = array(
	'post_type' => 'banner',
);
$query = new WP_Query( $args );
?>
<?php if ( $query->have_posts() ): ?>
  <!-- Section top slider 02 -->
  <section class="top-slider">
    <div class="top-slider__wrap">
		<?php while ( $query->have_posts() ): $query->the_post() ?>
          <!-- help class: top-slider__item--text-bot bg-sp-black -->
          <div class="top-slider__item top-slider__item--text-bot bg-sp-black"
               style="background-image: url('<?php echo wp_get_attachment_image_url( tr_posts_field( 'banner_background' ) ); ?>')">
            <img src="<?php echo THEME_URI; ?>/img/top-slider-03-sp.png" alt=""/>
            <div class="top-slider__item__desc">
              <!-- o day phai up 2 tam hinh co text, 1 o ban pc, 1 o ban sp -->
              <img src="<?php echo wp_get_attachment_image_url( tr_posts_field( 'desktop_banner.image' ) ); ?>"
                   class="hidden-sp" alt="realme"/>
              <img src="<?php echo wp_get_attachment_image_url( tr_posts_field( 'mobile_banner.image' ) ); ?>"
                   class="hidden-pc" alt="realme"/>
              <a href="<?php echo tr_posts_field( 'banner_button_link' ); ?>" class="see-more-btn">
				  <?php echo tr_posts_field( 'banner_button_text' ); ?>
              </a>
            </div>
          </div>
		<?php endwhile; ?>
    </div>
  </section>
  <!-- Section -->
<?php endif; ?>
