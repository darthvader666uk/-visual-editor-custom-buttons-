// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button8', {
        init : function(ed, url) {
            ed.addButton('vecb_button8', {
                title : 'Platinum',image : url+'/icons/circle-ok.png',onclick : function() {
                     ed.selection.setContent('<img class="aligncenter size-full wp-image-10726" src="https://www.thumbculture.co.uk/wp-content/uploads/2019/03/platinum.png" alt="" width="200" height="197" />');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button8', tinymce.plugins.vecb_button8);
})();