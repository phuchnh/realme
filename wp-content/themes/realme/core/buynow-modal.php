<?php
// This function will build the buy now modal based product details
function modalBuilder($productDetails){
    if($productDetails): ?>

        <div class="custom-modal modal-preorder" id="modal-preorder-<?php echo $productDetails['product_slug'];?>">
            <div class="modal-overlay close-buynow-modal"></div>
            <div class="modal-content">
            <span class="close-btn close-buynow-modal">
                <i class="fa fa-times" aria-hidden="true"></i>
            </span>
                <div class="main-content">
                    <h2 class="title">
                        Mua ngay <b><?php echo $productDetails['title']; ?></b> <br>
                        <b>Tại hệ thống cửa hàng</b>
                    </h2>
                </div>

                <!-- List KA and its permalinks -->
                <?php $haveShopList = $productDetails['ka_list'] AND count($productDetails['ka_list']) > 0; ?>
                <?php if ( $haveShopList ): ?>
                    <!-- Render KA Listing Shop -->
                    <ul class="shop-list">

                    <?php foreach($productDetails['ka_list'] as $value): ?>

                        <li class="shop-item">
                            <div class="shop-logo">
                                <img src="<?php echo wp_get_attachment_url($value['shop_logo']); ?>">
                            </div>
                            <!-- TODO: Add 'track-this-button' class later when generate the unique ID correctly -->
                            <a class="cta yellow track-this-button mb-hide"
                                id="BuyNowButton-<?php echo $productDetails['product_slug'] . '-'. $value['shop_name']; ?>-ProductListPage-Desktop"
                                href="<?php echo $value['shop_url']; ?>" 
                                target="_blank">Mua ngay</a>
                            <a class="cta yellow track-this-button mb-show inline-block"
                               id="BuyNowButton-<?php echo $productDetails['product_slug'] . '-'. $value['shop_name']; ?>-ProductListPage-Mobile"
                               href="<?php echo $value['shop_url']; ?>"
                               target="_blank">Mua ngay</a>
                        </li>

                    <?php endforeach; ?>

                    </ul>
                    <!-- Render KA Listing Shop - END -->

                <?php endif; ?>
                    
                <div class="main-content">
                    <?php if($haveShopList): ?>
                        <h2 class="title">
                            Hoặc
                        </h2>
                    <?php endif; ?>
                    <div class="cta-wrapper txt-center">
                        <!-- TODO: Add 'track-this-button' class later when generate the unique ID correctly -->
                        <a class="cta yellow track-this-button mb-hide" href="https://realmemobile.vn/shop.html"
                           id="SearchForStoreButton-<?php echo $productDetails['product_slug']?>-ProductListPage-Desktop">Tìm cửa hàng gần bạn nhất</a>
                        <a class="cta yellow track-this-button mb-show inline-block" href="https://realmemobile.vn/shop.html"
                           id="SearchForStoreButton-<?php echo $productDetails['product_slug']?>-ProductListPage-Mobile">Tìm cửa hàng gần bạn nhất</a>
                    </div>
                </div>
            </div>
        </div>

    <?php endif;
}