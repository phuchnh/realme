<?php
// This function will build the buy now modal based product details
function modalBuilder($productDetails){
    if($productDetails):?>

        <div class="modal modal-preorder" id="modal-preorder-<?php echo $productDetails['product-slug'];?>">
            <div class="modal-overlay close-preorder-modal"></div>
            <div class="modal-content">
        <span class="close-btn close-preorder-modal">
            <i class="fa fa-times" aria-hidden="true"></i>
        </span>
                <div class="main-content">
                    <h2 class="title">
                        Mua ngay <b><?php echo $productDetails['title']; ?></b> <br>
                        <b>Tại hệ thống cửa hàng</b>
                    </h2>
                </div>

                <ul class="shop-list">
                    <li class="shop-item">
                        <div class="shop-logo">
                            <img src="img/common/shop-logo/tgdd.png">
                        </div>
                        <a class="cta yellow track-this-button" id="buynow-realme-3-TGDD" href="https://www.thegioididong.com/dtdd/realme-3" target="_blank">Mua ngay</a>
                    </li>
                    <li class="shop-item">
                        <div class="shop-logo">
                            <img src="img/common/shop-logo/fpt.png">
                        </div>
                        <a class="cta yellow track-this-button" id="buynow-realme-3-FPT-Shop" href="https://fptshop.com.vn/dien-thoai/realme-3-3gb-32gb" target="_blank">Mua ngay</a>
                    </li>
                    <li class="shop-item">
                        <div class="shop-logo">
                            <img src="img/common/shop-logo/viettel2.png">
                        </div>
                        <a class="cta yellow track-this-button" id="buynow-realme-3-Viettel-Store" href="https://viettelstore.vn/dien-thoai/realme-3-pid135209.html" target="_blank">Mua ngay</a>
                    </li>
                    <li class="shop-item">
                        <div class="shop-logo">
                            <img src="img/common/shop-logo/vienthonga.png">
                        </div>
                        <a class="cta yellow track-this-button" id="buynow-realme-3-VienthongA-Store" href="https://vienthonga.vn/realme-3.html/" target="_blank">Mua ngay</a>
                    </li>
                </ul>
                <br>
                <div class="main-content hide-on-3-pro">
                    <h2 class="title">
                        Hoặc<br>
                    </h2>
                    <div class="cta-wrapper txt-center">
                        <a class="cta yellow track-this-button" style="margin: 1em; color: #676D72; line-height: 2.5em; font-weight: 500;" href="https://realmemobile.vn/shop.html" id="realme-3-index-page__buynow__search-for-store-link">Tìm cửa hàng gần bạn nhất</a>
                    </div>
                </div>
            </div>
        </div>

    <?php endif;
}