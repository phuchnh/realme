<?php
$queryBannerOptions = array(
    'post_type'        => 'banner',
    'posts_per_page'   => -1,
    'orderby'          => 'meta_value',
    'order'            => 'ASC',
    'meta_key'         => 'banner_priority',
    'meta_query'       => array(
        array(
            'key'      => 'banner_active',
            'compare'  => 'LIKE',
            'value'    => '1'
        ),
    ),
);
$queryBanners = new WP_Query($queryBannerOptions);
?>

<?php if($queryBanners ->  have_posts()): ?>
    <!-- Section top slider 01 -->
    <section class="top-slider">

        <!-- Slider Wrapper -->
        <div class="top-slider__wrap">
            <?php
            while($queryBanners -> have_posts()):
                $queryBanners -> the_post();
                ?>

                <!-- Slider Item -->
                <div class="top-slider__item">

                    <a href="<?php echo get_permalink( tr_posts_field('product_landingpage') ); ?>">
                        <!-- Background -->
                        <div class="background">
                            <img src="<?php echo wp_get_attachment_url(tr_posts_field('desktop_banner.image')); ?>" class="mb-hide">
                            <img src="<?php echo wp_get_attachment_url(tr_posts_field('mobile_banner.image')); ?>" class="mb-show">
                        </div>
                    </a>

                </div>

            <?php endwhile; ?>
        </div>
    </section>
    <!-- Section -->

<?php endif;
wp_reset_postdata();