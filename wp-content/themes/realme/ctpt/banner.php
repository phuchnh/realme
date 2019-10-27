<?php
/**
 * MAIN BANNER
 * _ Top 1 Banner In Home Page Post Type
 * _ Sharing Same Custom Field With sub_banner post type
 */
$banner = tr_post_type( 'Banner', 'Banners' );
$banner->setIcon( 'images' );
$banner->setSlug( 'banners' );
$banner->setRest( 'banners' );
$banner->setArgument( 'supports', array( 'title' ) );


// Add selection tag
$banner->setArgument( 'taxonomies', array( 'post_tag' ) );
add_action( 'init', function () {
	register_taxonomy_for_object_type( 'post_tag', 'banner' );
} );

// Add custom fields
$banner->addMetaBox(
    tr_meta_box( 'banner_information' )->setLabel( 'Thông tin Banner' )->setCallback( function () {
        $form       = tr_form();

        // Landing Page
        $bannerLink = $form->search( 'product_landingpage' )
            ->setLabel( 'Đường dẫn Landing Page' )
            ->setHelp( 'Đường dẫn ứng với Banner' )
            ->setPostType( 'page' );

        // Banner Active
        $bannerActive = $form->checkbox( 'banner_active' )
            ->setLabel( 'Active Banner' )
            ->setHelp( 'Active Banner được active sẽ xuất hiện ngoài trang chủ' )
            ->setText( 'Active Banner' );

        // Banner Priority
        $bannerPriority = $form->text( 'banner_priority' )
            ->setLabel( 'Độ ưu tiên' )
            ->setHelp( 'Banner với độ ưu tiên thấp sẽ xuất hiện trước' )
            ->setType( 'number' );

        echo $bannerLink, $bannerActive, $bannerPriority;
    })
);

$banner->addMetaBox(
	tr_meta_box( 'desktop_banner' )->setLabel( 'Hình banner Desktop (1920x1080)' )->setCallback( function () {
		$form       = tr_form()->setGroup( 'desktop_banner' );
		$background = $form->image( 'image' )->setLabel( 'Banner Text' );
		echo $background;
	} )
);

$banner->addMetaBox(
	tr_meta_box( 'mobile_banner' )->setLabel( 'Hình banner Mobile (720x1270)' )->setCallback( function () {
		$form       = tr_form()->setGroup( 'mobile_banner' );
		$background = $form->image( 'image' )->setLabel( 'Banner Text' );
		echo $background;
	} )
);
/**
 * MAIN BANNER - END
 **/


/**
 * SUB BANNER
 * _ Second Slider Below Main Slider
 * _ Sharing Same Custom Field With sub_banner post type
 **/
$banner2 = tr_post_type( 'Sub Banner', 'Sub Banners' );
$banner2->setIcon( 'image' );
$banner2->setSlug( 'banners' );
$banner2->setRest( 'banners' );
$banner2->setArgument( 'supports', array( 'title' ) );


// Add selection tag
$banner2->setArgument( 'taxonomies', array( 'post_tag' ) );
add_action( 'init', function () {
    register_taxonomy_for_object_type( 'post_tag', 'banner' );
} );

// Add custom fields
$banner2->addMetaBox(
    tr_meta_box( 'banner_information' )->setLabel( 'Thông tin Banner' )->setCallback( function () {
        $form       = tr_form();

        // Landing Page
        $bannerLink = $form->search( 'product_landingpage' )
            ->setLabel( 'Đường dẫn Landing Page' )
            ->setHelp( 'Đường dẫn ứng với Banner' )
            ->setPostType( 'page' );

        // Banner Active
        $bannerActive = $form->checkbox( 'banner_active' )
            ->setLabel( 'Active Banner' )
            ->setHelp( 'Active Banner được active sẽ xuất hiện ngoài trang chủ' )
            ->setText( 'Active Banner' );

        // Banner Priority
        $bannerPriority = $form->text( 'banner_priority' )
            ->setLabel( 'Độ ưu tiên' )
            ->setHelp( 'Banner với độ ưu tiên thấp sẽ xuất hiện trước' )
            ->setType( 'number' );

        echo $bannerLink, $bannerActive, $bannerPriority;
    })
);

$banner2->addMetaBox(
    tr_meta_box( 'desktop_banner' )->setLabel( 'Hình banner Desktop (1920x1080)' )->setCallback( function () {
        $form       = tr_form()->setGroup( 'desktop_banner' );
        $background = $form->image( 'image' )->setLabel( 'Banner Text' );
        echo $background;
    } )
);

$banner2->addMetaBox(
    tr_meta_box( 'mobile_banner' )->setLabel( 'Hình banner Mobile (720x1270)' )->setCallback( function () {
        $form       = tr_form()->setGroup( 'mobile_banner' );
        $background = $form->image( 'image' )->setLabel( 'Banner Text' );
        echo $background;
    } )
);
/**
 * SUB BANNER - END
 **/

/**
 * HIGHLIGHT PHONES
 * _ Third Section - Highlight Phones
 **/
$highlightPhones = tr_post_type( 'Other Phones', 'Banner Điện thoại khác' );
$highlightPhones->setIcon( 'mobile' );
$highlightPhones->setSlug( 'other_phones' );
$highlightPhones->setRest( 'other_phones' );
$highlightPhones->setArgument( 'supports', array( 'title' ) );

// Add custom fields
$highlightPhones->addMetaBox(
    tr_meta_box( 'banner_information' )->setLabel( 'Thông tin Banner' )->setCallback( function () {
        $form       = tr_form();

        // Landing Page
        $bannerLink = $form->search( 'product_landingpage' )
            ->setLabel( 'Đường dẫn Landing Page' )
            ->setHelp( 'Đường dẫn ứng với Banner' )
            ->setPostType( 'page' );

        // Banner Active
        $bannerActive = $form->checkbox( 'banner_active' )
            ->setLabel( 'Active Banner' )
            ->setHelp( 'Active Banner được active sẽ xuất hiện ngoài trang chủ' )
            ->setText( 'Active Banner' );

        // Banner Priority
        $bannerPriority = $form->text( 'banner_priority' )
            ->setLabel( 'Độ ưu tiên' )
            ->setHelp( 'Banner với độ ưu tiên thấp sẽ xuất hiện trước' )
            ->setType( 'number' );

        echo $bannerLink, $bannerActive, $bannerPriority;
    })
);

$highlightPhones->addMetaBox(
    tr_meta_box( 'desktop_banner' )->setLabel( 'Hình ảnh banner điện thoại (870x870)' )->setCallback( function () {
        $form       = tr_form()->setGroup( 'desktop_banner' );
        $background = $form->image( 'image' )->setLabel( 'Banner Text' );
        echo $background;
    } )
);
/**
 * HIGHLIGHT PHONES - END
 **/


/**
 * NEWS PROMOTION
 * _ Final Section - Final News Phones
 **/
$highlightPhones = tr_post_type( 'News Promotion', 'Thông tin nổi bật' );
$highlightPhones->setIcon( 'star-full' );
$highlightPhones->setSlug( 'news_promotion' );
$highlightPhones->setRest( 'news_promotion' );
$highlightPhones->setArgument( 'supports', array( 'title' ) );

// Add custom fields
$highlightPhones->addMetaBox(
    tr_meta_box( 'banner_information' )->setLabel( 'Thông tin Banner' )->setCallback( function () {
        $form       = tr_form();

        // Landing Page
        $bannerLink = $form->text( 'news_page' )
            ->setLabel( 'Đường dẫn' )
            ->setHelp( 'Đường dẫn đến trang thông tin nổi bật' );

        // Banner Active
        $bannerActive = $form->checkbox( 'banner_active' )
            ->setLabel( 'Active Banner' )
            ->setHelp( 'Active Banner được active sẽ xuất hiện ngoài trang chủ, tối đa 1 tin tại 1 thời điểm' )
            ->setText( 'Active Banner' );

        // Banner Priority
        $bannerPriority = $form->text( 'banner_priority' )
            ->setLabel( 'Độ ưu tiên' )
            ->setHelp( 'Banner với độ ưu tiên thấp sẽ xuất hiện trước' )
            ->setType( 'number' );

        echo $bannerLink, $bannerActive, $bannerPriority;
    })
);

$highlightPhones->addMetaBox(
    tr_meta_box( 'desktop_banner' )->setLabel( 'Hình ảnh tin tức Desktop (1920x540)' )->setCallback( function () {
        $form       = tr_form()->setGroup( 'desktop_banner' );
        $background = $form->image( 'image' )->setLabel( 'News Image Desktop' );
        echo $background;
    } )
);

$highlightPhones->addMetaBox(
    tr_meta_box( 'mobile_banner' )->setLabel( 'Hình ảnh tin tức Mobile (720x1270)' )->setCallback( function () {
        $form       = tr_form()->setGroup( 'mobile_banner' );
        $background = $form->image( 'image' )->setLabel( 'News Image Mobile' );
        echo $background;
    } )
);

/**
 * HIGHLIGHT PHONES - END
 **/