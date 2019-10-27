<!-- Container -->
<div class="container">

  <!-- Footer Body -->
  <div class="clearfix">

    <!-- Footer Menu Recommended Column -->
    <?php if(has_nav_menu('footer-menu-column-1')): ?>
      <?php 
        // Get Menu Title
        $footer1Title = get_term(get_nav_menu_locations()['footer-menu-column-1'], 'nav_menu')->name; 
      ?>
      <div class="footer__col">
        <h3><?php echo $footer1Title; ?></h3>
        <?php wp_nav_menu( array( 'theme_location' => 'footer-menu-column-1' ) ); ?>
      </div>
    <?php endif; ?>

    <!-- Footer Menu Supports Column -->
    <?php if(has_nav_menu('footer-menu-column-2')): ?>
      <?php 
        // Get Menu Title
        $footer2Title = get_term(get_nav_menu_locations()['footer-menu-column-2'], 'nav_menu')->name; 
      ?>
      <div class="footer__col">
        <h3><?php echo $footer2Title; ?></h3>
        <?php wp_nav_menu( array( 'theme_location' => 'footer-menu-column-2' ) ); ?>
      </div>
    <?php endif; ?>

    <!--Footer Menu About Column -->
    <?php if(has_nav_menu('footer-menu-column-3')): ?>
      <?php 
        // Get Menu Title
        $footer3Title = get_term(get_nav_menu_locations()['footer-menu-column-3'], 'nav_menu')->name; 
      ?>
      <div class="footer__col">
        <h3><?php echo $footer3Title; ?></h3>
        <?php wp_nav_menu( array( 'theme_location' => 'footer-menu-column-3' ) ); ?>
      </div>
    <?php endif; ?>

    <!-- Footer Email Contacts Column -->
    <div class="footer__col">
      <!-- TODO: Make this editable using customizer -->
      <h3>Liên hệ</h3>
      <ul>
        <li><a href="mailto:service.vn@realme.com">service.vn@realme.com</a></li>
        <li><a href="mailto:sales.vn@realme.com">sales.vn@realme.com</a></li>
        <li><a href="mailto:pr.vn@realme.com">pr.vn@realme.com</a></li>
      </ul>
    </div>

    <!-- Footer Social Contact Column -->
    <div class="footer__col footer__col--last">

      <!-- Location -->
      <div class="footer__popup hidden-pc">
        Vietnam / Việt Nam >
      </div>

      <!-- Phone Number -->
      <a href="tel:<?php echo tr_options_field('realme_theme_options.company_phone'); ?>">
        <i class="fa fa-phone" aria-hidden="true"></i>
          <?php echo tr_options_field('realme_theme_options.company_phone'); ?>
      </a>

      <!-- Working Hour -->
      <p>
        08:00-17:30 MON - SAT<br/>
        Trừ các ngày lễ
      </p>

      <!-- Social Contact -->
      <div class="footer__social">
        <a href="<?php echo tr_options_field('realme_theme_options.facebook_fanpage'); ?>">
          <img src="<?php echo THEME_URI; ?>/assets/img/icon-fb.png" alt=""/>
        </a>
        <a href="<?php echo tr_options_field('realme_theme_options.youtube_channel'); ?>">
          <img src="<?php echo THEME_URI; ?>/assets/img/icon-youtube.png" alt=""/> </a>
      </div>

      <!-- Location On Desktop -->
      <div class="footer__popup hidden-sp">
        Vietnam / Việt Nam >
      </div>

    </div>

  </div>
  <!-- Footer Body - END -->

  <!-- Footer Bottom -->
  <div class="copyright">
    <div class="copyright-left">©&nbsp;Bản quyền thuộc về realme Việt Nam, 2019.</div>
    <div class="copyright-right">
      <ul>
        <li>
          <a href="https://www.realme.com/vn/legal/privacy-policy">Chính sách bảo mật</a>
        </li>
        <li>
          <a href="https://www.realme.com/vn/legal/warranty-terms">Điều khoản bảo hành</a>
        </li>
      </ul>
    </div>
  </div>
  <!-- Footer Bottom - END -->

</div>
<!-- Container - END -->
