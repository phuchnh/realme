<?php
/**
 * Template Name: About Page
 */
get_header(); ?>

<!-- About Page Content -->
<div class="page-wrapper" id="about-page">

    <!-- Section banner -->
    <section class="about__banner">
        <video id="banner__video" width="100%" height="100%" autobuffer="" autoplay="" muted="" loop="" playsinline="">
            <source src="<?php echo THEME_URI; ?>/assets/video/realme-2019.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>
        <h1>
            <!--Dare to leap<br />-->
            <!--<i class="fa fa-play-circle-o icon-play" aria-hidden="true"></i>-->
            <!--<i class="fa fa-pause-circle-o icon-pause" aria-hidden="true"></i>-->
        </h1>
    </section>
    <!-- Section -->

    <!-- Section smooth scroll nav -->
    <div class="about__nav-scroll">
        <div class="container">
            <ul>
                <li><a href="#realme">Về realme</a></li>
                <li><a href="#timeline">Cột mốc</a></li>
                <li><a href="#tin-tuc">Tin tức</a></li>
                <li><a href="#danh-gia">Đánh giá</a></li>
            </ul>
        </div>
    </div>
    <!-- section -->

    <!-- Section about-->
    <section class="about__main container">
        <!-- block about real me-->
        <div class="about__realme" id="realme">
            <h2 class="about__main__title">Về realme</h2>
            <p>
                Realme được thành lập vào tháng 5 năm 2018, là thương hiệu điện thoại thông minh cung cấp các thiết bị
                không những sở hữu hiệu năng mạnh mẽ mà còn có thiết kế thời trang giữa bối cảnh thương mại điện tử đang trên đà
                phát triển mạnh mẽ.
            </p>

            <p>
                Các sản phẩm Realme đã được sự công nhận rộng rãi cho "Sức mạnh" và "Phong cách" của mình ngay sau khi ra mắt.
                Tại Ấn Độ,
                realme đã tạo ra một phép màu với 1 triệu chiếc điện thoại di động được bán ra trong vòng 3 ngày. Realme cũng
                phá vỡ kỷ lục doanh
                số trên Lazada ở Đông Nam Á và trở thành thương hiệu số 1 trong danh mục điện thoại di động của nền tảng này.
            </p>
            <p>
                Hiện tại, realme đã có mặt tại hơn 18 quốc gia như Trung Quốc, Ấn Độ, Indonesia, Việt Nam, Thái Lan, Malaysia,
                Pakistan, Ai Cập,
                v.v ... Vào tháng 5 năm 2019, chúng tôi đã ra mắt tại các khu vực châu Âu. Realme cam kết cung cấp hiệu suất
                mạnh mẽ, thiết kế
                thời trang, dịch vụ chân thành và khám phá nhiều tiện ích hơn cho chiếc điện thoại thông minh.
            </p>
        </div>
        <!-- block -->

        <!-- block about our DNA -->
        <div class="about__our">
            <h2 class="about__main__title">DNA realme</h2>
            <div class="about__our__wrap">
                <div class="about__our-01"><span>Trẻ trung</span></div>
                <div class="about__our-02"><span>Chân thực</span></div>
                <div class="about__our-03"><span>Phong cách</span></div>
                <div class="about__our-04"><span>Mạnh mẽ</span></div>
            </div>
        </div>
        <!-- block -->

        <!--block about vision & Mission -->
        <div class="about__vision">
            <!-- Vision Block -->
            <div>
                <h3>Tầm nhìn</h3>
                <img src="<?php echo THEME_URI; ?>/assets/img/about-vision.png" alt="realme"/>
                <p>
                    Trở thành thương hiệu điện thoại <br/>
                    thông minh thân thiện và vững mạnh
                </p>
            </div>

            <!-- Vision Block -->
            <div>
                <h3>Sứ mệnh</h3>
                <img src="<?php echo THEME_URI; ?>/assets/img/about-mission.png" alt="realme"/>
                <p>
                    Mang đến cho người dùng trải nghiệm<br/>
                    cuộc sống tuyệt vời từ vẻ đẹp công nghệ
                </p>
            </div>

        </div>
        <!-- block -->
    </section>
    <!-- Section -->

    <!-- Section oversea -->
    <section class="about__oversea container">
        <h2 class="about__main__title">Thị trường quốc tế</h2>
        <p>
            Trong vòng một năm thành lập, realme đã có mặt tại các quốc gia như Ấn Độ, Indonesia, Việt Nam, Thái Lan,
            Phillipines, Malaysia, Singapore, Myanmar, Pakistan, Nepal, Bangladesh, Các Tiểu vương quốc Ả Rập Thống nhất, Ai
            Cập, Ý, Tây Ban Nha, Pháp, Anh, Nga và Trung Quốc.
        </p>
    </section>
    <!-- Section -->

    <!-- section timeline -->
    <section class="about__timeline container" id="timeline">

        <!-- Timeline Block -->
        <div class="about__timeline__block-year">
            <div class="timeline__item active timeline__item--year">
                <div class="timeline__item__wrap">
                    <h3>2019</h3>
                </div>
            </div>
            <div class="timeline__item">
                <div class="timeline__item__wrap">
                    <h3>04-06</h3>
                    <p>realme 3, realme C2 và realme 3 Pro được ra mắt.</p>
                </div>
            </div>
        </div>

        <!-- Timeline Block -->
        <div class="about__timeline__block-year">
            <div class="timeline__item timeline__item--year">
                <div class="timeline__item__wrap">
                    <h3>2018</h3>
                </div>
            </div>
            <div class="timeline__item">
                <div class="timeline__item__wrap">
                    <h3>05</h3>
                    <p>Chính thức gia nhập thị trường châu Âu. Ra mắt realme 3 Pro tại Anh, Tây Ban Nha, Ý và Pháp.</p>
                </div>
            </div>
            <div class="timeline__item">
                <div class="timeline__item__wrap">
                    <h3>04</h3>
                    <p>Chính thức ra mắt tại thị trường Trung Quốc và sở hữu hơn 6 triệu người hâm mộ.</p>
                </div>
            </div>
        </div>

        <!-- Timeline Block -->
        <div class="about__timeline__block-year">
            <div class="timeline__item timeline__item--year">
                <div class="timeline__item__wrap">
                    <h3 class="timeline__item__month">2017</h3>
                </div>
            </div>
            <div class="timeline__item">
                <div class="timeline__item__wrap">
                    <h3>27/09</h3>
                    <p>Realme 2 Pro và C1 ra mắt và chỉ 4 tháng kể từ khi thành lập, realme đã có hơn 1 triệu người dùng.</p>
                </div>
            </div>
            <div class="timeline__item">
                <div class="timeline__item__wrap">
                    <h3>26/06</h3>
                    <p>200 000 chiếc realme 2 được bán ra chỉ trong 5 phút, phá vỡ kỷ lục doanh số cho các sản phẩm điện thoại di
                        động trên Flipkart.</p>
                </div>
            </div>
            <div class="timeline__item">
                <div class="timeline__item__wrap">
                    <h3>16/05</h3>
                    <p>Realme 1 được ra mắt. Điện thoại di động được đánh giá cao nhất trong danh sách sản phẩm bán chạy nhất của
                        Amazon, với số điểm ấn tượng 4,5/5.</p>
                </div>
            </div>
            <div class="timeline__item">
                <div class="timeline__item__wrap">
                    <h3>04/05</h3>
                    <p>Thành lập realme smarphone.</p>
                </div>
            </div>
        </div>

    </section>
    <!-- section -->

    <!-- section blog list -->
    <section class="about__blog-list container" id="tin-tuc">
        <div class="clearfix">

            <!-- Blog item -->
            <a href="https://news.zing.vn/realme-dau-tu-manh-tai-thi-truong-viet-nam-post887222.html" target="_blank"
               class="blog__item">
                <div class="blog__item__thumb" style="background-image: url('<?php echo THEME_URI; ?>/assets/img/1_3.jpg')"></div>
                <h4>Realme đầu tư mạnh tại thị trường Việt Nam</h4>
                <p class="blog__item__date">25/10/2018</p>
                <p>Mới có mặt tại Việt Nam từ cuối tháng 9, Realme đang cho thấy những bước phát triển mạnh mẽ khi ra mắt bộ 3
                    smartphone Realme 2, Realme 2 Pro và Realme C1.</p>
            </a>

            <!-- Blog item -->
            <a href="https://dantri.com.vn/suc-manh-so/realme-ghi-dau-tren-thi-truong-smartphone-viet-20190412154242716.htm"
               class="blog__item" target="_blank">
                <div class="blog__item__thumb"
                     style="background-image: url('<?php echo THEME_URI; ?>/assets/img/realme-khat-khao-ghi-dau-tren-thi-truong-smartphone-vietdocx-1555058221087.jpeg')"></div>
                <h4>Realme ghi dấu trên thị trường smartphone Việt</h4>
                <p class="blog__item__date">12/04/2019</p>
                <p>Dựa trên nền tảng “khách hàng là sứ mệnh, sản phẩm là cốt lõi”, Realme – thương hiệu mới đến từ OPPO, đã khởi
                    hành chặng đường hướng đến người dùng, tạo nên một sức mạnh và thành công của thương hiệu mới trong thị trường
                    smartphone Việt đang có sự cạnh tranh cao.</p>
            </a>

            <!-- Blog item -->
            <a href="https://www.thegioididong.com/tin-tuc/realme-la-hang-dien-thoai-nao-co-lien-he-gi-voi-oppo-khong--1118578"
               class="blog__item" target="_blank">
                <div class="blog__item__thumb"
                     style="background-image: url('<?php echo THEME_URI; ?>/assets/img/10_800x450.png')"></div>
                <h4>Realme là hãng điện thoại nào? Có liên hệ gì với OPPO không?</h4>
                <p class="blog__item__date">18/10/2018</p>
                <p>Vừa qua lại thêm một thương hiệu điện thoại xuất hiện trên thị trường, với tên gọi Realme. Đây là một công ty
                    độc lập được thành lập vào đầu tháng tám, người sáng lập là ông Sky Li, cựu Phó chủ tịch phụ trách kinh doanh
                    mảng di động quốc tế tại công ty OPPO.</p>
            </a>

            <!-- Blog item -->
            <a href="https://www.thegioididong.com/tin-tuc/realme-la-hang-dien-thoai-nao-co-lien-he-gi-voi-oppo-khong--1118578"
               class="blog__item" target="_blank">
                <div class="blog__item__thumb"
                     style="background-image: url('<?php echo THEME_URI; ?>/assets/img/1698674675-w500-8552-1555054010.webp')"></div>
                <h4>Realme đặt mục tiêu chinh phục thị trường smartphone Việt</h4>
                <p class="blog__item__date">13/4/2019</p>
                <p>Realme - thương hiệu con của Oppo ra mắt tháng 5/2018 và chính thức vào Việt Nam cách đây 5 tháng. Hướng tới
                    phân khúc trung và cao cấp, các mẫu smartphone của hãng là Realme C1, Realme 2 và Realme 2 Pro nhanh chóng
                    được người dùng đón nhận.</p>
            </a>
        </div>
    </section>
    <!-- section -->

    <!-- section blog list 2 item -->
    <section class="about__blog-list about__blog-list-02 container" id="danh-gia">
        <div class="clearfix">

            <!-- Blog item -->
            <a href="https://cellphones.com.vn/sforum/danh-gia-realme-3-pro-hieu-suat-tot-pin-khung-cung-camera-xoa-phong-hieu-qua"
               class="blog__item" target="_blank">
                <div class="blog__item__thumb"
                     style="background-image: url('<?php echo THEME_URI; ?>/assets/img/gsmarena_001-5.jpg')"></div>
                <h4>Đánh giá Realme 3 Pro: Hiệu suất tốt, pin khủng cùng camera xóa phông hiệu quả</h4>
                <p class="blog__item__date">5 tháng trước</p>
            </a>

            <!-- Blog item -->
            <a href="https://fptshop.com.vn/tin-tuc/danh-gia/danh-gia-realme-3-smartphone-tot-trong-tam-gia-3-trieu-doi-thu-nang-ky-cua-redmi-note-7-pro-80771"
               class="blog__item" target="_blank">
                <div class="blog__item__thumb"
                     style="background-image: url('<?php echo THEME_URI; ?>/assets/img/realme_3_review_design5.jpg')"></div>
                <h4>Đánh giá Realme 3: Smartphone tốt trong tầm giá 3 triệu, đối thủ nặng ký của Redmi Note 7 Pro</h4>
                <p class="blog__item__date">06/03/2019</p>
            </a>
        </div>
    </section>
    <!-- section -->

</div>
<!-- About Page Content - END -->

<?php get_footer(); ?>
