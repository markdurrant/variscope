var Xray = require('x-ray');
var x = Xray();

var category = 'Electron_microscope_images';

x('https://commons.wikimedia.org/wiki/Category:' + category, '.thumb', [{
  altText: 'img@alt',
  url: 'img@src'
}])
  .paginate('.next_page@href')
  .limit(3)
  .write(category + '.json')