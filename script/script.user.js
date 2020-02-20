// ==UserScript==
// @name         Hideout
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  try to take over the world!
// @author       You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        localhost:3000/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    waitForKeyElements (".Hideout__container", setPriceAllItems);

})();

function setPriceAllItems() {
    $('.Hideout__price').each(function(index) {
        //console.log( index + ": " + $( this ).text() );
        getPriceFromItem(this.getAttribute("name"));
    })
}

function getPriceFromItem(item) {
    GM_xmlhttpRequest({
        url: "https://tarkov-market.com/item/"+item,
        method: "GET",
        onload: function(response) {
            var title = /(?<=\<title\>).*?(?=\<\/title\>)/.exec(response.response);
            var price = /(?<=price: ).*?(?=₽)/.exec(title);
            console.log(price);
            $('[name='+item+']').text(price);
        }
    });
}