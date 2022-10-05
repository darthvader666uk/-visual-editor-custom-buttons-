// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button10', {
        init : function(ed, url) {
            ed.addButton('vecb_button10', {
                title : 'Info Box',image : url+'/icons/book.png',onclick : function() {
                     ed.selection.setContent('<div class="info_panel bordered bordered rounded-3"><div class="info_panel_row"><strong>Developer:</strong>NAME</div><div class="info_panel_row"><strong>Publisher:</strong>NAME</div><div class="info_panel_row"><strong>Release Date</strong>: DATE</div><div class="info_panel_row"><strong>Platforms:</strong> FORMAT</div></div>');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button10', tinymce.plugins.vecb_button10);
})();