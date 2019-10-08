<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <link rel="shortcut icon" type="image/ico" href="<?php echo THEME_URI; ?>/favicon.ico"/>
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>"/>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> class="fixed-header with-overlay">


<!-- === HEADER === -->
<header id="page-header">

    <!-- Container -->
    <div class="container">

        <!-- Company Logo -->
        <a href="<?php echo site_url( '/' ); ?>" class="header__logo">
            <img src="<?php echo THEME_URI; ?>/assets/img/logo-realme.jpg" alt=""/>
        </a>

        <!-- Header List -->
        <ul class="header__list">
            <li class="header__list__product <?php echo is_page( 'products' ) ? 'active' : '' ?>">
                <a href="<?php echo site_url( '/products' ); ?>">
                    Điện thoại<i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <?php get_template_part( 'partials/headers/nav-products' ); ?>
            </li>

            <li class="<?php echo is_page( 'support' ) ? 'active' : '' ?>">
                <a href="<?php echo the_page_exists_by_slug( 'support' ) ? site_url( '/support' ) : 'https://www.realme.com/vn/support'; ?>">
                    Hỗ trợ
                </a>
            </li>

            <li class="<?php echo is_page( 'brand' ) ? 'active' : '' ?>">
                <a href="<?php echo the_page_exists_by_slug( 'brand' ) ? site_url( '/brand' ) : 'https://www.realme.com/vn/brand'; ?>">
                    Thông tin realme
                </a>
            </li>

            <li class="<?php echo is_page( 'shop' ) ? 'active' : '' ?>">
                <a href="<?php echo the_page_exists_by_slug( 'shop' ) ? site_url( '/shop' ) : 'https://www.realme.com/vn/shop'; ?>">
                    Tìm cửa hàng
                </a>
            </li>
        </ul>

        <form class="search-product-form" id="search-product-form">
            <input type="text" name="product-search-term">
        </form>

        <div class="search-result">
            <div class="container">

                <div class="place-holder">
                    Kết quả tìm kiếm
                </div>

                <ul class="search-result-list">
                    <li class="result-item">
                        <a class="link-wrapper">
                            <div class="phone-img">
                                <img src="<?php echo THEME_URI; ?> /assets/img/current/header-products/c2.png">
                            </div>
                            <p class="phone-name">
                                Realme c2
                            </p>
                        </a>
                    </li>

                    <li class="result-item">
                        <a class="link-wrapper">
                            <div class="phone-img">
                                <img src="<?php echo THEME_URI; ?> /assets/img/current/header-products/c2.png">
                            </div>
                            <p class="phone-name">
                                Realme c2
                            </p>
                        </a>
                    </li>

                    <li class="result-item">
                        <a class="link-wrapper">
                            <div class="phone-img">
                                <img src="<?php echo THEME_URI; ?> /assets/img/current/header-products/realme 3.png">
                            </div>
                            <p class="phone-name">
                                Realme 3
                            </p>
                        </a>
                    </li>

                    <li class="result-item">
                        <a class="link-wrapper">
                            <div class="phone-img">
                                <img src="<?php echo THEME_URI; ?> /assets/img/current/header-products/realme 3 pro.png">
                            </div>
                            <p class="phone-name">
                                Realme 3 Pro
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Close Icon On Mobile -->
        <div id="nav-icon4" class="">
            <span></span>
            <span></span>
            <span></span>
        </div>

    </div>

</header>

<!-- === HEADER - END === -->
<?php wp_body_open(); ?>
