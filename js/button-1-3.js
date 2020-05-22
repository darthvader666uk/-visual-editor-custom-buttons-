// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button3', {
        init : function(ed, url) {
            ed.addButton('vecb_button3', {
                title : 'Disclaimer',image : url+'/icons/3_col.png',onclick : function() {
                     ed.selection.setContent('<p style="text-align: center;"><em>Disclaimer: A code was received in order to write this review.</em></p>');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button3', tinymce.plugins.vecb_button3);
})();