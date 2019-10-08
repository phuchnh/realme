let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 | @link https://github.com/JeffreyWay/laravel-mix/tree/master/docs#readme
 |
 */
mix.js('vendor/typerocket/core/assets/js/core.js', 'wordpress/assets/typerocket/js/core.js')
    .js('vendor/typerocket/core/assets/js/location.field.js', 'wordpress/assets/typerocket/js/location.field.js')
    .sass('vendor/typerocket/core/assets/sass/core.scss', 'wordpress/assets/typerocket/css/core.css')
    .sass('vendor/typerocket/core/assets/sass/redactor.scss', 'wordpress/assets/typerocket/css/redactor.css')
    .babel('vendor/typerocket/core/assets/js/tooling/global.js', 'wordpress/assets/typerocket/js/global.js')
    .copyDirectory('vendor/typerocket/core/assets/fonts', 'wordpress/assets/typerocket/fonts')
    .copyDirectory('vendor/typerocket/core/assets/js/lib', 'wordpress/assets/typerocket/js/lib')
    .options({
        processCssUrls: false
    });
