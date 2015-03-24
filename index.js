/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-cli-bootstrapisassy',
  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    var bootstrapPath   = 'bower_components/bootstrap-sass/assets/';
    target.import(bootstrapPath + 'javascripts/bootstrap.js');
    // // Import glyphicons from bootstrap
    target.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.eot', { destDir: '/fonts/bootstrap' });
    target.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.svg', { destDir: '/fonts/bootstrap' });
    target.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.ttf', { destDir: '/fonts/bootstrap' });
    target.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.woff', { destDir: '/fonts/bootstrap' });
    target.import(bootstrapPath + 'fonts/bootstrap/glyphicons-halflings-regular.woff2', { destDir: '/fonts/bootstrap' });
  },
  treeForStyles: function() {
    var bootstrapPath = path.join(this.app.bowerDirectory, 'bootstrap-sass', 'assets/stylesheets');
    var bootstrapTree = this.pickFiles(this.treeGenerator(bootstrapPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return bootstrapTree;
  }
};
