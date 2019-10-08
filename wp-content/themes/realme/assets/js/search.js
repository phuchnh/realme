$(document).ready(function () {
    $('#search_product').keyup(_.debounce(function (e) {
        e.preventDefault();
        const searchValue = e.target.value;

        //
        console.log(realme.baseUrl);
        fetch(window.config.baseUrl + 'wp-json/wp/v2/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }, 300))


});
