<?php
/**
 * This file include all the website menu
 * available for user to edit
 **/ 
function realme_menu_registration(){
    register_nav_menus(
        array(
          'footer-menu-column-1' => __( 'Đề xuất' ),
          'footer-menu-column-2' => __( 'Hỗ trợ' ),
          'footer-menu-column-3' => __( 'Về chúng tôi' ),
        )
    );
}
add_action('init', 'realme_menu_registration');