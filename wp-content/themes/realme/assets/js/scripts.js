import Home from './modules/home';
import About from './modules/about';
import Search from './modules/search';
import BuynowModal from './modules/buynow-modal';
import QAControl from './modules/qa-control';
import ServiceCenter from './modules/service-center';

$(document).ready(function() {
    var home = new Home();
    var about = new About();
    var search = new Search();

    // Product Listing And Buynow modal control
    if($('#product-page').length > 0){
        var buynowModal = new BuynowModal();
    }

    // QA layout management
    if($('#qa-document').length > 0){
        var qaControl = new QAControl();
    }

    // TODO: Searching For Service Center - Make a proper public API to localize the feature
    // if($('#service-center').length > 0){
    //     var serviceCenter = new ServiceCenter();
    // }
});