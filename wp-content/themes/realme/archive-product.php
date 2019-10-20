<?php get_header(); ?>
<!-- === MAIN CONTENT === -->
<div class="page-wrapper" id="product-page">
    <?php

    // Get series list and sorted by the custom field series_order
    $args      = array(
        'taxonomy'   => 'serie',
        'orderby'    => 'meta_value_num',
        'order'      => 'ASC',
        'meta_query' => array(
            array(
                'key'       => 'series_order',
                'type'      => 'NUMERIC',
            )
        )
    );
    $series    = get_terms($args);
    //var_dump($series);


    foreach ( $series as $serie ):
        $args = array(
            'post_type' => 'product',
            'orderby'       => 'meta_value_num',
            'meta_key'      => 'product_priority',
            'order'         => 'ASC',
            'tax_query' => array(
                array(
                    'taxonomy' => 'serie',
                    'field'    => 'slug',
                    'terms'    => $serie->slug
                ),
            ),
        );
        $query = new WP_Query( $args ); ?>

        <!-- Product Single Slide -->
        <section class="product-slide">

            <!-- Tile -->
            <h2 class="product__title"><span><?php echo $serie->name ?></span></h2>

            <?php if ( $query->have_posts() ): ?>

                <!-- Slide Wrapper -->
                <div class="product-slide__wrap">
                    <?php while ( $query->have_posts() ): $query->the_post() ?>

                        <!-- Product Slide Item -->
                        <div class="product-slide__item">

                            <!-- Container -->
                            <div class="container product-slide__item--text-r">
                                <?php echo tr_posts_field( ':img:full:product_image' );; ?>

                                <!-- Product Description -->
                                <div class="product-slide__item__desc slide-text-align--c">

                                    <!-- Product Logo Image -->
                                    <?php echo tr_posts_field( ':img:full:product_banner_logo' ); ?>

                                    <!-- Product Slogan -->
                                    <p class="product-slide__item__desc-02">
                                        <?php echo tr_posts_field( 'product_slogan' ); ?>
                                    </p>

                                    <!-- Product Description - Keywords -->
                                    <p class="product-slide__item__desc-03">
                                        <?php echo tr_posts_field( 'product_description' ); ?>
                                    </p>

                                    <!-- Product Price -->
                                    <p class="product-slide__item__desc-04">
                                        Giá từ
                                        <b><?php echo tr_posts_field( 'product_price' ); ?></b>
                                    </p>

                                    <!-- See More Link Wrapper -->
                                    <div class="product-slide__item__desc-05">

                                        <!-- Link To Product Landing Page -->
                                        <?php
                                          $permalink = get_permalink(tr_posts_field('product_landingpage'));
                                        ?>
                                        <?php if($permalink) : ?>
                                            <a href="<?php echo $permalink; ?>" class="see-more-btn">Xem thêm</a>
                                        <?php endif; ?>


                                        <?php if(tr_posts_field('product_shops')) : ?>
                                            <!-- Open Buy Now Modal Of The Product -->
                                            <a class="see-more-btn open-buynow-modal"
                                               data-modal-target="modal-preorder-<?php echo get_post_field('post_name', get_the_ID()); ?>">Mua ngay</a>
                                        <?php endif; ?>

                                    </div><!-- See More Link Wrapper -->

                                </div><!-- Product Description -->

                            </div><!-- Container -->

                        </div><!-- Slide Item -->
                    <?php endwhile; ?>

                </div><!-- Slide Wrapper -->


                <?php while ( $query->have_posts() ): $query->the_post() ?>

                        <?php
                        // Product Details
                        $productDetails = array();
                        $productDetails = array(
                            'title'         => get_the_title(),
                            'product_slug'  => get_post_field('post_name', get_the_ID()),
                            // TODO: Get the array of shop from Products Post
                            'ka_list'      => tr_posts_field('product_shops'),
                        )
                        ?>
                            <!-- The Modal -->
                            <?php modalBuilder($productDetails); ?>
                        <?php endwhile;?>
            <?php endif; ?>

        </section><!-- Section Wrapper -->

    <?php endforeach; ?>
    <?php wp_reset_postdata(); ?>
</div>
<!-- ====== MAIN CONTENT - END ====== -->
<?php get_footer(); ?>
