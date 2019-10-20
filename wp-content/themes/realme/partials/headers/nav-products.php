<?php
/**
 * Get products
 */
$args  = array(
    'post_type'     => 'product',
    'post_per_page' => 12,
    'orderby'       => 'meta_value_num',
    'meta_key'      => 'product_priority',
    'order'         => 'ASC'

);
$query = new WP_Query( $args );
?>

<?php if ( $query->have_posts() ): ?>
    <div class="nav-product">
        <div class="container">
            <ul class="nav-product__list">
                <?php while ( $query->have_posts() ): $query->the_post() ?>
                    <li>
                        <a href="<?php echo get_permalink(tr_posts_field('product_landingpage')); ?>" target="">
                            <img src="<?php echo wp_get_attachment_image_url( tr_posts_field( 'product_image' ), 'Full Size'); ?>" alt="">
                            <?php echo get_the_title(); ?>
                        </a>
                    </li>
                <?php endwhile; ?>

                <li>
                    <a href="<?php echo get_post_type_archive_link('product');?>" target="">
                        <img src="<?php echo THEME_URI; ?>/assets/img/product-other-phone.png" alt="">
                        <?php echo 'Tất cả điện thoại'; ?>
                    </a>
                </li>

                <?php
                wp_reset_postdata();
                ?>
            </ul>
        </div>
    </div>
<?php else: get_template_part( 'partials/headers/nav-products-none' ); ?>
<?php endif; ?>
