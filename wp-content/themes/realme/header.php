<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <link rel="shortcut icon" type="image/ico" href="<?php echo THEME_URI; ?>/favicon.ico"/>
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>"/>

    <meta property="fb:app_id" content="2289871734667625">

    <?php wp_head(); ?>

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M23XR8L');</script>
    <!-- End Google Tag Manager -->

    <!-- Facebook Pixel Code -->
    <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2047074585405030');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
                   src="https://www.facebook.com/tr?id=2047074585405030&ev=PageView&noscript=1"
        /></noscript>
    <!-- End Facebook Pixel Code -->
</head>

<body <?php body_class(); ?>>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M23XR8L"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div id="fb-root"></div>
<script>(function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
            return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=2289871734667625";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>


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
                <a href="<?php echo the_page_exists_by_slug( 'ho-tro' ) ? site_url( '/ho-tro' ) : 'https://www.realme.com/vn/support'; ?>">
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
                    Tìm kiếm sản phẩm
                </div>

                <div class="search-result-list">
                    <li class="searching-icon">
                        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                    </li>
                    <li class="no-result">Không tìm thấy kết quả nào</li>
                    <ul class="search-result-holder">

                    </ul>
                </div>
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
