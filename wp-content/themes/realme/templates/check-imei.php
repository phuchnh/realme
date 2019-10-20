<?php
/**
 * Template Name: Check Imei Page
 */
get_header(); ?>

<!-- Google Capcha -->
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<!-- === MAIN CONTENT === -->
<div class="page-wrapper" id="check-imei-page">

    <section class="section section-check-imei-form">

        <!-- Container -->
        <div class="container">
            <ul class="breadcrumb">
                <li>
                    <a href="https://realmemobile.vn/">
                        Trang chủ <span>/</span>
                    </a>
                </li>
                <li>
                    <a href="https://realmemobile.vn/ho-tro/">
                        Hỗ trợ <span>/</span>
                    </a>

                </li>
                <li>
                    <strong class="breadcrumb_strong">Kiểm tra máy chính hãng</strong>
                </li>
            </ul>

            <!-- Checking Imei Form -->
            <div class="checking-imei-form-wrapper">
                <!-- IMEI Input Form Row -->
                <div class="form-row">
                    <input name="imei" type="text" id="imei" class="form-control" placeholder="Vui lòng nhập Imei (bấm *#06#) để kiểm tra">
                </div>
                <h5 class="error-imei text-center mt-2 d-none" style="color: red;"> * Vui Lòng nhập Imei *</h5>

                <!-- Capcha Holder -->
                <div class="capcha-holder d-flex flex-column justify-content-center">
                    <!-- Dummy Capcha -->
                    <div class="g-recaptcha d-flex justify-content-center" data-sitekey="6LdnX7oUAAAAAN2MpJBMFFJA5zmiceF7Yx0OMdeT" data-callback="verifyCaptcha"></div>
                    <h5 class="error-captcha text-center mt-2 d-none" style="color: red;"> * Vui Lòng xác thực Captcha * </h5>
                </div>
                <div class="form-row">
                    <button type="button" class="submit-imei" onClick="checkImei()">
                        Kiểm tra
                    </button>
                </div>
                <!-- Show The Result -->
                <div class="result-form d-none">
                    <h5 class="text-center">Thông tin IMEI</h5>
                    <!-- Emei Result Detail - Dummy Data -->
                    <ul class="imei-result d-none">
                        <li class="result-row">
                            <span class="name">IMEI</span>
                            <span class="value" id="imei-number">123456789</span>
                        </li>
                        <li class="result-row">
                            <span class="name">Sản phẩm</span>
                            <span class="value" id="imei-san-pham">CPH1969</span>
                        </li>
                        <li class="result-row">
                            <span class="name">Màu sắc</span>
                            <span class="value" id="imei-color">Xám</span>
                        </li>
                        <li class="result-row">
                            <span class="name">Thanh toán</span>
                            <span class="value" id="imei-thanhtoan">Không trả góp</span>
                        </li>
                        <li class="result-row">
                            <span class="name">Kết quả</span>
                            <span class="value" id="imei-fake-real">Hàng chính hãng</span>
                        </li>
                    </ul>
                    <ul class="imei-result-error d-none">
                        <li class="result-row text-center">
                            <h4 class="name" style="color: red;">IMEI không tồn tại</h4>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Checking Imei Form -->
        </div>

    </section>

</div>
<!-- ====== MAIN CONTENT - END ====== -->

<script>
    /* PROCCESSING CODE GOES HERE */
    function checkImei() {
        var imei = $('#imei').val();
        $('.error-imei').addClass('d-none');
        $('.imei-result-error').addClass('d-none');
        $('.imei-result').addClass('d-none');
        var response = grecaptcha.getResponse();
        if(response.length == 0) {
            $('.error-captcha').removeClass('d-none');
            return;
        } else {
            if (imei.length === 0) {
                $('.error-imei').removeClass('d-none');
                return;
            }
            var url = 'https://nihato.com/wp-json/realme/v1/imei_check?imei=' + imei;
            $('.result-form').removeClass('d-none');
            $('.submit-imei').html('<i class="fa fa-spinner fa-spin" style="font-size:18px"></i>')
            $.get(url, function( data ) {
                $('.submit-imei').html('Kiểm tra');
                if (data["code"] === 0) {
                    $('.imei-result').removeClass('d-none');
                    $('#imei-number').html(data["imei_sn"]);
                    $('#imei-san-pham').html(data["good_name"]);
                    $('#imei-color').html(data["good_color"]);
                    $('#imei-thanhtoan').html(data["status"]);
                    $('#imei-number').html(data["activated_date"]);
                    $('#imei-fake-real').html(data["installment"]);
                } else {
                    $('.imei-result-error').removeClass('d-none');
                }
            }).fail(function() {
                $('.submit-imei').html('Kiểm tra');
                $('.imei-result-error').removeClass('d-none');
            });
            grecaptcha.reset();
        }
    }
    function verifyCaptcha() {
        $('.error-captcha').addClass('d-none');
    }

    function setInputFilter(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
            textbox.addEventListener(event, function() {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                }
            });
        });
    }

    // Restrict input to digits and '.' by using a regular expression filter.
    setInputFilter(document.getElementById("imei"), function(value) {
        return /^\d*\.?\d*$/.test(value);
    });
</script>

<!-- ====== SCRIPT REFERENCES - END ====== -->


<?php get_footer(); ?>
