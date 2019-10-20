<?php

$serie = tr_taxonomy( 'Serie', 'Series' );
$serie->addPostType( 'product' );
$serie->setHierarchical();
$serie->setSlug( 'series' );

$serie->setMainForm(function() {
	$form = tr_form();
	$priority = new \App\Fields\Number('series_order', $form);
	$priority->setLabel('Thứ tự ưu tiên sản phẩm');
	$priority->setHelp('<p>Order càng nhỏ, thứ tự trong danh sách sản phẩm càng cao</p>');
	echo $priority;
});
