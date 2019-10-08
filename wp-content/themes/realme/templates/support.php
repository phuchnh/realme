<?php
/**
 * Template Name: Support Page
 */
get_header(); ?>
<div class="page-wrapper" id="support-page">

    <!-- Section banner -->
    <section class="support__banner">
        <h1>Chào mừng đến với<br class="hidden-pc"/> bộ phận hỗ trợ của realme</h1>
    </section>
    <!-- Section -->

    <!-- Section Ho tro online -->
    <section class="support__online text-center">

        <!-- Container -->
        <div class="container">

            <!-- Title -->
            <div class="support__title">
                <h2>Hỗ trợ online</h2>
                Chúng tôi sẵn sàng hỗ trợ
            </div>

            <!-- Layout Wrapper -->
            <!-- TODO: Add All Link & Make the pages -->
            <div class="clearfix">

                <!-- QA Page -->
                <a href="#">
                    <img src="<?php echo THEME_URI; ?>/assets/img/icon-support-question.png" alt="realme"/>
                    Câu hỏi thường gặp
                </a>

                <!-- Problem Page -->
                <a href="#">
                    <img src="<?php echo THEME_URI; ?>/assets/img/icon-support-trouble.png" alt="realme"/>
                    Sự cố
                </a>

                <!-- Search For Service Center Page -->
                <a href="#">
                    <img src="<?php echo THEME_URI; ?>/assets/img/icon-support-center.png" alt="realme"/>
                    Trung tâm dịch vụ<br/>khách hàng
                </a>

                <!-- Update Software Page -->
                <a href="#">
                    <img src="<?php echo THEME_URI; ?>/assets/img/icon-support-update.png" alt="realme"/>
                    Cập nhật phần mềm
                </a>

                <!-- Check For IMEI Page -->
                <a href="<?php echo the_page_exists_by_slug( 'check-imei' ) ? site_url( '/check-imei' ) : '#'; ?>">
                    <img src="<?php echo THEME_URI; ?>/assets/img/icon-support-imei.png" alt="realme"/>
                    Kiểm tra IMEI
                </a>
            </div>
        </div>
    </section>
    <!-- Section -->

    <!-- Section Lien he voi chung toi -->
    <section class="support__contact text-center">

        <!-- Title -->
        <div class="support__title">
            <h2>Liên hệ chúng tôi</h2>
            Cần phản hồi hoặc cần hỗ trợ vấn đề gì ?<br class="hidden-pc"/> Chúng tôi rất sẵn lòng giúp bạn ?
        </div>

        <!-- Layout Warpper -->
        <div class="clearfix">

            <!-- Support Link Left -->
            <a href="mailto:service.vn@realme.com">
                <object data="<?php echo THEME_URI; ?>/assets/img/icon-support-mail.svg" type="image/svg+xml"></object>
                service.vn@realme.com
            </a>

            <!-- Support Link Right -->
            <a href="#">
                <object data="<?php echo THEME_URI; ?>/assets/img/icon-support-phone.svg" type="image/svg+xml"></object>
                1800 6067
            </a>

        </div>

    </section>
    <!-- Section -->

</div>
<?php get_footer(); ?>
