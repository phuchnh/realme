export default class Home {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.$searchFrom = $('#search-product-form input');
        this.$searchResultDialog = $('.search-result');
        this.$searchResultLayout = $('.search-result-list');
        this.$resultListHolder = $('.search-result-holder');
        this.isSearching = false;
        this.debounceHolder = null;
        this.BindEvent();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    BindEvent(){
        this.$searchFrom.on('focus', () => {
            this.$searchResultDialog.slideDown();
        });

        this.$searchFrom.on('blur', () => {
            this.$searchResultDialog.slideUp();
        });

        this.SetupSearchBox();
    }


    /* ===================================
     *  METHODS
     * =================================== */
    SetupSearchBox(){
        // Prevent User Submit By Pressing Enter Key
        $('#search-product-form').on('submit', (e) => {
            e.preventDefault();
        });

        this.$searchFrom.on('keyup', (e) => {
           console.log(e);

           // Search Term is not empty
           if(e.target.value !== ""){
               let searchTerm = e.target.value;
               this.$searchResultLayout.addClass('is-searching');
               switch(e.keyCode){
                   // User Press Enter, Search Immediately
                   case 13:
                       console.log('enter key was pressed, do the search');
                       this.DoSearching(searchTerm);
                       break;

                   // User Press Normally, Debounce 500ms before search
                   default:
                       clearTimeout(this.debounceHolder);
                       this.debounceHolder = setTimeout(() => {
                           this.DoSearching(searchTerm);
                       }, 700);
               }
           } else {
                // Empty Searching Field
               this.$resultListHolder.find('.result-item').slideUp('fast', () => {
                   this.$resultListHolder.find('.result-item').remove();
               });
               this.$searchResultLayout.removeClass('is-searching');
           }
        });
    }

    DoSearching(searchTerm = null){
        if(searchTerm){
            console.log(`${realmeVietnamVariables.products_api}?search=${searchTerm}`);
            fetch(`${realmeVietnamVariables.products_api}?search=${searchTerm}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                    if (data.length > 1) {
                        this.$searchResultLayout.find('.no-result').hide();
                        this.$resultListHolder.find('.result-item').remove();

                        let resultArrayHTML = data.map((value, index) => {
                            return `<li class="result-item">
                                <a class="link-wrapper" href="${value.link}">
                                    <div class="phone-img">
                                        <img src="${realmeVietnamVariables.root_url}/assets/img/current/header-products/c2.png">
                                    </div>
                                    <p class="phone-name">
                                        ${value.title.rendered}
                                    </p>
                                </a>
                            </li>`;
                        });

                        // After Append HTML into the result holder, slide Down
                        this.$resultListHolder.append(resultArrayHTML);
                        this.$searchResultLayout.removeClass('is-searching');
                    } else {
                        this.$resultListHolder.find('.result-item').remove();
                        this.$searchResultLayout.removeClass('is-searching');
                        this.$searchResultLayout.find('.no-result').show();
                    }
                });

        }
    }
}