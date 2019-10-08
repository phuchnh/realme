<?php

$serie = tr_taxonomy( 'Serie', 'Series' );
$serie->addPostType( 'product' );
$serie->setHierarchical();
$serie->setSlug( 'series' );
