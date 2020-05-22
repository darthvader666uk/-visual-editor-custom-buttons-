// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button10', {
        init : function(ed, url) {
            ed.addButton('vecb_button10', {
                title : 'Podcast Bottom',image : url+'/icons/microphone.png',onclick : function() {
                     ed.selection.setContent('<p style="text-align: center;"><a href="https://www.youtube.com/thumbculturev2">YouTube</a> | <a href="https://en-gb.facebook.com/ThumbCulture/">FaceBook</a> | <a href="https://twitter.com/thumb_culture?lang=en">Twitter</a> | <a href="https://www.instagram.com/thumb_culture/">Instagram | <a href="https://www.twitch.tv/thumb_culture">Twitch</a></p>');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button10', tinymce.plugins.vecb_button10);
})();