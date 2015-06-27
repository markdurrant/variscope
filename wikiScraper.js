// import dependancy
var express = require('express'),
         fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio');

var app = express();

app.get('/scrape', function(req, res) {

  // URL to hit
  url = 'https://news.ycombinator.com/';

  // make a request check for errors
  request(url, function(error, response, html) {

    // check for errors
    if(!error){

      // use cheerio
      var $ = cheerio.load(html);

      // init the things to scrape
      var title, url;
      var json = { title: "", url: "" };

      // set a jquery elm to sort on
      $('.title').filter(function(){
        // store what comes back
        var data = $(this);

        // grab the text
        title = data.children($('.post_title')).text();
        url = data.children($('.sitebit')).text();

        // store the text as json
        json.title = title;
        json.url = url;

        console.log(title, url);
      });
    }
  })

  fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');
  })
});

app.listen('8081');

console.log('something magic 8081');

exports = module.exports = app;