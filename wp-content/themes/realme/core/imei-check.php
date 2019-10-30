<?php
add_action( 'rest_api_init', function () {
	register_rest_route( 'realme/v1', '/imei_check', array(
		'methods'  => 'GET',
		'callback' => function ( WP_REST_Request $request ) {
			$params = array(
				'imei' => $request->get_param( 'imei' ),
			);
            $context = stream_context_create([
                'ssl' => [
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                ]
            ]);
            $options = [
                'stream_context' => $context
            ];
            $client = new SoapClient('https://warehouse.realmeshop.vn/wss?wsdl', $options);
			$result = $client->__soapCall( 'getImeiInfoCheck', $params );
			return $result;
		},
	) );
} );


