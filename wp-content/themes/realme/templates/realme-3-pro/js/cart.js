document.getElementById('pre-order-modal').onclick = function() {
    // alert( "Handler for .click() called." );
    document.getElementById('modal-preorder').classList.add("active");
};

document.getElementById('close-preorder-modal').onclick = function() {
    // alert( "Handler for .click() called." );
    document.getElementById('modal-preorder').classList.remove("active");
};
// $('#pre-order-modal').on('click', function(e){
//     alert( "Handler for .click() called." );
// });
//
// function aaa() {
//     alert( "Handler for .click() called." );
// }

// preOrderModal = $('#modal-preorder');
// $('#pre-order-modal').on('click', function (e) {
//     alert( "Handler for .click() called." );
//     $('body').addClass('show-modal');
//
//     preOrderModal.addClass('active');
// });
// $('.close-preorder-modal').on('click', function (e) {
//     alert( " 22222 Handler for .click() called." );
//     $('body').removeClass('show-modal');
//
//     preOrderModal.removeClass('active');
// });