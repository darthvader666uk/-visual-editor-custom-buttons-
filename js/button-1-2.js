// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button2', {
        init : function(ed, url) {
            ed.addButton('vecb_button2', {
                title : 'More Articles',image : url+'/icons/3_col.png',onclick : function() {
                     ed.selection.setContent('<p style="text-align: center;">For more articles from Stuart, click <a href="https://www.thumbculture.co.uk/author/stunightingale">here</a></p>');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button2', tinymce.plugins.vecb_button2);
})();