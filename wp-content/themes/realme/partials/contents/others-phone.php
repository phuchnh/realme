<?php
$queryPhoneBannerOptions = array(
    'post_type'        => 'other_phones',
    'posts_per_page'   => 2,
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
$queryPhonesBanners = new WP_Query($queryPhoneBannerOptions);
?>

<?php if($queryPhonesBanners -> have_posts()): ?>
    <!-- Section other phone -->
    <section class="top-w-content top-phone">

        <!-- Title -->
        <h2 class="top-title">Điện thoại khác</h2>

        <!-- Layout Wrapper -->
        <div class="other-phone-layout">
            <?php
            while($queryPhonesBanners -> have_posts()):
                $queryPhonesBanners -> the_post();
                ?>

                <div class="phone-item">
                    <a href="https://realmemobile.vn/realme-3/">
                        <div class="top-phone__content style-w-bg">
                            <div class="style__bg style__bg--pc"
                                 style="background-image: url('<?php echo wp_get_attachment_url(tr_posts_field('desktop_banner.image')); ?>')"></div>
                            <div class="style__bg style__bg--sp"
                                 style="background-image: url('<?php echo wp_get_attachment_url(tr_posts_field('desktop_banner.image')); ?>')"></div>
                        </div>
                    </a>
                </div>

            <?php endwhile; ?>


        </div>

    </section>
<?php endif;
wp_reset_postdata();