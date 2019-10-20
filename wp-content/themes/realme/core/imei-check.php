<?php
add_action( 'rest_api_init', function () {
	register_rest_route( 'realme/v1', '/imei_check', array(
		'methods'  => 'GET',
		'callback' => function ( WP_REST_Request $request ) {
			$params = array(
				'imei' => $request->get_param( 'imei' ),
			);
			$client = new SoapClient( 'https://warehouse.realmeshop.vn/wss?wsdl' );
			$result = $client->__soapCall( 'getImeiInfoCheck', $params );
			return $result;
		},
	) );
} );


