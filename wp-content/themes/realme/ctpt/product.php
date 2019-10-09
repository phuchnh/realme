<?php

$product = tr_post_type( 'Product', 'Products' );
$product->setIcon( 'cart' );
$product->setSlug( 'products' );
$product->setRest( 'products' );
$product->setArgument( 'supports', array( 'title' ) );

// Add selecton tag
$product->setArgument( 'taxonomies', array( 'post_tag' ) );
add_action( 'init', function () {
	register_taxonomy_for_object_type( 'post_tag', 'product' );
} );

$product->setEditorForm(function () {

});

// Add custom fields
$product->addMetaBox(
	tr_meta_box( 'product_detail' )->setLabel( 'Thông tin sản phẩm' )->setCallback( function () {
		$form            = tr_form();
		$image           = $form->image( 'product_image' )->setLabel( 'Hình ảnh' );
		$price           = $form->text( 'product_price' )->setLabel( 'Giá bán' );
		$promotion_price = $form->text( 'product_promotion_price' )->setLabel( 'Giá khuyến mãi' );
		$shop_logo       = $form->image( 'shop_logo' )->setLabel( 'Logo' );
		$shop_url        = $form->text( 'shop_url' )->setLabel( 'Liên kết' );
		$shops           = $form->repeater( 'product_shops' )->setLabel( 'Cửa hàng kinh doanh' )
		                        ->setFields( array( $shop_logo, $shop_url ) )
		                        ->setLimit( 4 );
		echo $image, $price, $promotion_price, $shops;
	} )
);

$product->addMetaBox(
	tr_meta_box( 'product_banner' )->setLabel( 'Banner' )->setCallback( function () {
		$tabs = tr_tabs()->bindCallbacks();
		$tabs->addTab( array(
			'id'       => 'basic',
			'title'    => 'Basic',
			'callback' => function () {
				$form = tr_form();
				echo $form->image( 'product_banner_logo' )->setLabel( 'Logo' );
				echo $form->text( 'product_slogan' )->setLabel( 'Slogan' );
				echo $form->editor( 'product_description' )->setLabel( 'Mô tả' );
				echo $form->date( 'product_open_date_for_sale' )->setLabel( 'Chính thức mở bán' );
			}
		) );
		$tabs->addTab( array(
			'id'       => 'product_view_detail_btn',
			'title'    => 'View Detail Button',
			'callback' => function () {
				$form       = tr_form()->setGroup( 'product_view_detail_btn' );
				$btn_text   = $form->text( 'btn_text' )->setLabel( 'Nội dung' );
				$btn_url    = $form->text( 'btn_url' )->setLabel( 'Liên kết' );
				$btn_toggle = $form->toggle( 'active' )->setLabel( 'Hiển thị' );
				echo $btn_text, $btn_url, $btn_toggle;
			}
		) );
		$tabs->addTab( array(
			'id'       => 'product_buy_now_btn',
			'title'    => 'Buy Now Button',
			'callback' => function () {
				$form       = tr_form()->setGroup( 'product_buy_now_btn' );
				$btn_text   = $form->text( 'btn_text' )->setLabel( 'Nội dung' );
				$btn_url    = $form->text( 'btn_url' )->setLabel( 'Liên kết' );
				$btn_toggle = $form->toggle( 'active' )->setLabel( 'Hiển thị' );
				echo $btn_text, $btn_url, $btn_toggle;
			}
		) );
		$tabs->render();
	} )
);

