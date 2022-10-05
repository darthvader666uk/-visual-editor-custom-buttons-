// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button11', {
        init : function(ed, url) {
            ed.addButton('vecb_button11', {
                title : 'Info Box',image : url+'/icons/book.png',onclick : function() {
                     ed.selection.setContent('[otw_shortcode_info_box border_type="bordered" border_style="bordered" rounded_corners="rounded-3"]<div class="info_panel"><div class="info_panel_row"><strong>Developer:</strong> NAME </div><div class="info_panel_row"><strong>Publisher:</strong> NAME </div><div class="info_panel_row"><strong>Release Date</strong>: 24/04/2020 </div><div class="info_panel_row"><strong>Platforms:</strong> PC, PS4, Xbox One, Switch </div><div class="info_panel_row"><strong>Score:</strong> 10/10 </div></div>[/otw_shortcode_info_box]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button11', tinymce.plugins.vecb_button11);
})();