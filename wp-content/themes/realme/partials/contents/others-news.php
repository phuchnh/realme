<?php
$newsBannerOptions = array(
    'post_type'        => 'news_promotion',
    'posts_per_page'   => 1,
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
$queryNewsBanners = new WP_Query($newsBannerOptions);
?>
<?php if($queryNewsBanners -> have_posts()): ?>

<!-- Section new info -->
<section class="top-news top-w-content">

    <!-- Title -->
    <h2 class="top-title">Thông tin nổi bật</h2>
    <?php
    while($queryNewsBanners -> have_posts()):
        $queryNewsBanners -> the_post();
        ?>

        <!-- Layout Wrapper -->
        <div class="top-news__content style-w-bg">
            <a href="<?php echo tr_posts_field('news_page'); ?>" target="_blank">
                <div class="img-holder">
                    <img class="mb-hide"
                        src="<?php echo wp_get_attachment_url(tr_posts_field('desktop_banner.image')); ?>">
                    <img class="mb-show"
                        src="<?php echo wp_get_attachment_url(tr_posts_field('mobile_banner.image')); ?>">
                </div>
            </a>
        </div>

    <?php endwhile; ?>
</section>
<!-- Section -->

<?php endif;
wp_reset_postdata();