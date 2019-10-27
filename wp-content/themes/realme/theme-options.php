<?php
if ( ! function_exists( 'add_action' ) ) {
	echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
	exit;
}
// Setup Form
$form = tr_form()->useJson()->setGroup( $this->getName() );
?>

<h1>Theme Options</h1>
<div class="typerocket-container">
	<?php
	echo $form->open();

	// About
	$about = function () use ( $form ) {
		echo $form->text( 'Company Email' );
		echo $form->text( 'Company Phone' );
		echo $form->text( 'Company Address' );
        echo $form->text( 'Facebook Fanpage' );
        echo $form->text( 'Youtube Channel' );
		echo $form->editor( 'Copyright' );
	};

	// API
	$api = function () use ( $form ) {
		$help = '<a target="blank" href="https://developers.googl..com/maps/documentation/embed/guide#api_key">Get Your Google Maps API</a>.';
		echo $form->password( 'Google Maps API Key' )
		          ->setHelp( $help )
		          ->setAttribute( 'autocomplete', 'new-password' );
	};

	// Save
	$save = $form->submit( 'Save' );

	// Layout
	tr_tabs()->setSidebar( $save )
	         ->addTab( 'About', $about )
	         ->addTab( 'APIs', $api )
	         ->render( 'box' );

	echo $form->close();
	?>

</div>
