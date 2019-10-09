<?php get_header(); ?>
<!-- === MAIN CONTENT === -->
<div class="page-wrapper" id="product-page">
    <?php
    $args      = array( 'taxonomy' => 'serie' );
    $series    = get_terms( $args );
    foreach ( $series as $serie ):
        $args = array(
            'post_type' => 'product',
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
                                        <a href="#" class="see-more-btn">Xem thêm</a>

                                        <!-- Open Buy Now Modal Of The Product -->
                                        <a href="#" data-toggle="modal" data-target="#product_<?php echo get_the_ID()?>" class="see-more-btn">Mua ngay</a>

                                        <!-- The Modal -->
                                        <!-- TODO: Rework On The Modal -->
                                        <div class="modal" id="product_<?php echo get_the_ID()?>"
                                             tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <!-- Modal Header -->
                                                    <div class="modal-header">
                                                        <h4 class="modal-title"><?php echo tr_posts_field( 'product_slogan' ); ?></h4>
                                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                    </div>
                                                    <!-- Modal body -->
                                                    <div class="modal-body">
                                                        <?php echo tr_posts_field( 'product_description' ); ?>
                                                    </div>
                                                    <!-- Modal footer -->
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div><!-- See More Link Wrapper -->

                                </div><!-- Product Description -->

                            </div><!-- Container -->

                        </div><!-- Slide Item -->
                    <?php endwhile; ?>

                </div><!-- Slide Wrapper -->
            <?php endif; ?>

        </section><!-- Section Wrapper -->

    <?php endforeach; ?>
    <?php wp_reset_postdata(); ?>
</div>
<!-- ====== MAIN CONTENT - END ====== -->
<?php get_footer(); ?>
