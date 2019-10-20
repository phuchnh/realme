import axios from 'axios';

export default class ServiceCenter {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.$selectBox = $('#province-selector');
        this.CENTER_API = 'https://api.realme.com/vn/service/site/list?countryName=Vietnam';
        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        console.log('searching service page detected');

        this.$selectBox.on('change', (e) => {
            let provinceName = $('option[value=' + $(e.target).val() + ']').html();
            console.log(provinceName);
            console.log(`${this.CENTER_API}?provinceName=${provinceName.replace(/ /g, '%20')}&cityName=${provinceName.replace(/ /g, '%20')}&page=1&limit=10`);
            axios.get(`${this.CENTER_API}?provinceName=${provinceName.replace(/ /g, '%20')}&cityName=${provinceName.replace(/ /g, '%20')}&page=1&limit=10`,
                { mode: 'no-cors' })
                .then(data => console.log(data.data.data))
                .catch(function (err) {
                    console.log(err)
                })
        })
    }

    /* ===================================
     *  METHODS
     * =================================== */
}

