<?php
/**
 * Template Name: Home Page
 */
get_header(); ?>
<div class="page-wrapper" id="realme-home-page">

    <!-- Section top slider 01 -->
    <section class="top-slider">

        <!-- Slider Wrapper -->
        <div class="top-slider__wrap">

            <!-- Slider Item -->
            <div class="top-slider__item">

                <!-- Background -->
                <div class="background">
                    <img src="<?php echo THEME_URI; ?>/assets/img/current/realme-5-issac-mb.jpg" class="mb-show">
                    <img src="<?php echo THEME_URI; ?>/assets/img/current/realme-5-issac.jpg" class="mb-hide">
                </div>

                <!-- Content -->
                <div class="content dark centered width-3">
                    <div class="product-info">
                        <div class="img-info">
                            <img src="<?php echo THEME_URI; ?>/assets/img/current/issac-realme-5-context.png">
                        </div>
                    </div>
                    <div class="product-cta">
                        <a href="https://realmemobile.vn/realme-5-series/">Tìm hiểu thêm</a>
                    </div>
                </div>
            </div>

            <!-- Slider Item -->
            <div class="top-slider__item">

                <!-- Background -->
                <div class="background">
                    <img src="<?php echo THEME_URI; ?>/assets/img/current/realme-3-issac-mb.jpg" class="mb-show">
                    <img src="<?php echo THEME_URI; ?>/assets/img/current/realme-3-issac.jpg" class="mb-hide">
                </div>

                <!-- Content -->
                <div class="content dark centered width-3">
                    <div class="product-logo">
                        <img src="<?php echo THEME_URI; ?>/assets/img/current/header-products/realme-3-logo-dark.svg">
                    </div>
                    <div class="product-info">
                        <div class="img-info">
                            <img src="<?php echo THEME_URI; ?>/assets/img/current/issac-realme-3-context.png">
                        </div>
                    </div>
                    <div class="product-cta">
                        <a href="https://realmemobile.vn/realme-3/">Tìm hiểu thêm</a>
                    </div>
                </div>
            </div>

            <!-- Slider Item -->
            <div class="top-slider__item">

                <!-- Background -->
                <div class="background">
                    <img src="<?php echo THEME_URI; ?>/assets/img/current/realme-c2-mb.jpg" class="mb-show">
                    <img src="<?php echo THEME_URI; ?>/assets/img/current/realme-c2.jpg" class="mb-hide">
                </div>

                <!-- Content -->
                <div class="content right width-30">
                    <div class="product-logo">
                        <img src="<?php echo THEME_URI; ?>/assets/img/current/header-products/realme-c2-logo.svg">
                    </div>
                    <div class="product-info">
                        <p class="product-slogan">Mặt lưng kim cương - Màn hình giọt sương</p>
                        <ul class="product-features">
                            <li class="feature-item">Màn hình giọt sương 6.1"</li>
                            <li class="feature-item">Pin 4000 mAh</li>
                            <li class="feature-item">Camera kép AI 13MP + 2MP</li>
                        </ul>
                    </div>
                    <div class="product-cta">
                        <a href="https://realmemobile.vn/realme-c2/">Tìm hiểu thêm</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Section -->

    <?php get_template_part( 'partials/contents/slider-02' ); ?>

    <!-- Section other phone -->
    <section class="top-w-content top-phone">

        <!-- Title -->
        <h2 class="top-title">Điện thoại khác</h2>

        <!-- Layout Wrapper -->
        <div class="clearfix">

            <!-- Other Phone Left -->
            <div class="top-phone--left">
                <a href="https://realmemobile.vn/realme-3/">
                    <div class="top-phone__content style-w-bg">
                        <div class="style__bg style__bg--pc"
                             style="background-image: url('<?php echo THEME_URI; ?>/assets/img/top-phone-01.jpg')"></div>
                        <div class="style__bg style__bg--sp"
                             style="background-image: url('<?php echo THEME_URI; ?>/assets/img/top-phone-01.jpg')"></div>
                    </div>
                </a>
            </div>

            <!-- Other Phone Right -->
            <div class="top-phone--right">
                <div class="top-phone__content style-w-bg">
                    <a href="https://realmemobile.vn/realme-c2/">
                        <div class="style__bg style__bg--pc"
                             style="background-image: url('<?php echo THEME_URI; ?>/assets/img/top-phone-02.jpg')"></div>
                        <div class="style__bg style__bg--sp"
                             style="background-image: url('<?php echo THEME_URI; ?>/assets/img/top-phone-02.jpg')"></div>
                    </a>
                </div>
            </div>

        </div>

    </section>
    <!-- Section -->

    <!-- Section new info -->
    <section class="top-news top-w-content">

        <!-- Title -->
        <h2 class="top-title">Thông tin nổi bật</h2>

        <!-- Layout Wrapper -->
        <div class="top-news__content style-w-bg">
            <div class="style__bg style__bg--pc"
                 style="background-image: url('<?php echo THEME_URI; ?>/assets/img/top-news-02.jpg')"></div>
            <div class="style__bg style__bg--sp"
                 style="background-image: url('<?php echo THEME_URI; ?>/assets/img/top-news-02-sp.jpg')"></div>
            <p>
                <img class="top-news__text" src="<?php echo THEME_URI; ?>/assets/img/top-phone-text-03.png" alt=""/>
                <a href="https://realmemobile.vn/realme-5-review/">
                    <img class="top-news__btn" src="<?php echo THEME_URI; ?>/assets/img/top-join-now.png" alt=""/>
                </a>
            </p>
        </div>
    </section>
    <!-- Section -->

    <!-- Section top leap -->
    <section class="top-leap">
        Dare to leap
        <a href="https://www.realme.com/vn/brand" class="see-more-btn">Tìm hiểu thêm</a>
    </section>
    <!-- Section -->

</div>
<?php get_footer(); ?>
