<?php
/**
 * Template Name: Home Page
 */
get_header(); ?>
<div class="page-wrapper" id="realme-home-page">

    <?php get_template_part('partials/contents/slider', '01'); ?>

    <?php get_template_part('partials/contents/slider', '02'); ?>

    <?php get_template_part('partials/contents/others', 'phone'); ?>

    <!-- Section new info -->
    <?php get_template_part('partials/contents/others', 'news'); ?>
    <!-- Section -->

    <!-- Section top leap -->
    <section class="top-leap">
        Dare to leap
        <a href="https://www.realme.com/vn/brand" class="see-more-btn">Tìm hiểu thêm</a>
    </section>
    <!-- Section -->

</div>
<?php get_footer(); ?>
