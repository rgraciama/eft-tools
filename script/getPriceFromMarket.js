// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  try to take over the world!
// @author       You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @match        localhost:3000/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    var item = "fp-100_filter_absorber";
    var price = $('.last').text();
    GM_xmlhttpRequest({
        url: "https://tarkov-market.com/item/"+item,
        method: "GET",
        onload: function(response) {
            var title = /(?<=\<title\>).*?(?=\<\/title\>)/.exec(response.response);
            var price = /(?<=price: ).*?(?=₽)/.exec(title);
            console.log(price);
        }
    });
    // Your code here...
})();