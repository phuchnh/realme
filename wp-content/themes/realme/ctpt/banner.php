<?php
$banner = tr_post_type( 'Banner', 'Banners' );
$banner->setIcon( 'images' );
$banner->setSlug( 'banners' );
$banner->setRest( 'banners' );
$banner->setArgument( 'supports', array(  ) );


// Add selection tag
$banner->setArgument( 'taxonomies', array( 'post_tag' ) );
add_action( 'init', function () {
	register_taxonomy_for_object_type( 'post_tag', 'product' );
} );

$banner->setEditorForm( function () {
	$form        = tr_form();
	$background  = $form->image( 'banner_background' )->setLabel( 'Background' );
	$button_text = $form->text( 'banner_button_text' )->setLabel( 'Button Text' );
	$button_link = $form->text( 'banner_button_link' )->setLabel( 'Button Link' );
	echo $background, $button_text, $button_link;
} );

// Add custom fields
$banner->addMetaBox(
	tr_meta_box( 'desktop_banner' )->setLabel( 'PC' )->setCallback( function () {
		$form       = tr_form()->setGroup( 'desktop_banner' );
		$background = $form->image( 'image' )->setLabel( 'Banner Text' );
		echo $background;
	} )
);

$banner->addMetaBox(
	tr_meta_box( 'mobile_banner' )->setLabel( 'Mobile' )->setCallback( function () {
		$form       = tr_form()->setGroup( 'mobile_banner' );
		$background = $form->image( 'image' )->setLabel( 'Banner Text' );
		echo $background;
	} )
);
