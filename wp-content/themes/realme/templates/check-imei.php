<?php
/**
 * Template Name: Check Imei Page
 */
get_header(); ?>
<div class="page-wrapper" id="check-imei-page">

  <section class="section section-check-imei-form">

    <!-- Container -->
    <div class="container">
      <ul class="breadcrumb">
        <li>
          <a href="<?php echo site_url( '/' ); ?>">
            Trang chủ <span>/</span>
          </a>
        </li>
        <li>
          <a href="<?php echo the_page_exists_by_slug( 'support' ) ? site_url( '/support' ) : 'https://www.realme.com/vn/support'; ?>">
            Hỗ trợ <span>/</span>
          </a>

        </li>
        <li>
          <strong class="breadcrumb_strong">Kiểm tra máy chính hãng</strong>
        </li>
      </ul>

      <!-- Checking Imei Form -->
      <div class="checking-imei-form-wrapper">
        <form>
          <!-- IMEI Input Form Row -->
          <div class="form-row">
            <input name="imei" type="text" class="form-control"
                   placeholder="Vui lòng nhập Imei (bấm *#06#) để kiểm tra">
          </div>

          <!-- Capcha Holder -->
          <div class="capcha-holder">
            <!-- Dummy Capcha -->
            <img src="https://oppomobile.vn/support/getcaptcha?0.4006130056379791">
          </div>

          <!-- Capcha Value Input And Change Image -->
          <div class="form-row">
            <div class="col-sm-8">
              <input name="capcha-input" type="text" class="form-control" placeholder="">
            </div>
            <div class="col-sm-4">
              <a class="change-capcha">[ Hình ảnh khác ]</a>
            </div>
          </div>

          <div class="form-row">
            <button type="button" class="submit-imei">
              Kiểm tra
            </button>
          </div>
        </form>

        <!-- Show The Result -->
        <div class="result-form">
          <h5 class="text-center">Thông tin IMEI</h5>

          <!-- Emei Result Detail - Dummy Data -->
          <ul class="imei-result">
            <li class="result-row">
              <span class="name">IMEI</span>
              <span class="value">123456789</span>
            </li>
            <li class="result-row">
              <span class="name">Sản phẩm</span>
              <span class="value">CPH1969</span>
            </li>
            <li class="result-row">
              <span class="name">Màu sắc</span>
              <span class="value">Xám</span>
            </li>
            <li class="result-row">
              <span class="name">Thanh toán</span>
              <span class="value">Không trả góp</span>
            </li>
            <li class="result-row">
              <span class="name">Kết quả</span>
              <span class="value">Hàng chính hãng</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- Checking Imei Form -->
    </div>

  </section>

</div>
<?php get_footer(); ?>
