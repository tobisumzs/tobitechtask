'use strict';
var http = require('http');
var request = require('request');
var cheerio = require('cheerio');
var knwl = require('knwl.js');
var html = '<h4 itemprop="name">CANDDi Manchester</h4>';

var url = "https://www.canddi.com/";
var port = process.env.PORT || 1337;


request (url, function (req, res, html) {
    if (!req)
    {
        var $ = cheerio.load(html);
        console.log(html);
    }
})
