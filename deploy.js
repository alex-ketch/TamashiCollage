'use strict';

var ghpages = require('gh-pages'),
       path = require('path');

ghpages.publish(
  path.join(__dirname, 'src'), {
    dotfiles: true,
    message: 'Auto-generated commit'
  },
  function(err) {
    if (err) {
      throw err;
    } else {
      console.log('Site has been deployed!');
    }
  }
);
