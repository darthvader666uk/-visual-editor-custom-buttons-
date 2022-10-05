// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button9', {
        init : function(ed, url) {
            ed.addButton('vecb_button9', {
                title : 'News Template',image : url+'/icons/chat.png',onclick : function() {
                     ed.selection.setContent('<span style="color: #ff0000;">{Briefly mention what the news piece is related to with no fine detail}</span><h2>QUIP RELATED TO THE NEWS PIECE</h2><span style="color: #ff0000;">{Here you can give more detail about the news and/or link to a review of the game/franchise the news is related to.}</span><h3>Custom News Title</h3><span style="color: #ff0000;">{Main body of news with images}</span><p style="text-align: center;"><span style="color: #ff0000;">{Insert Trailer}</span></p><p style="text-align: center;"></p><p style="text-align: center;"><img class="alignnone wp-image-7652 size-medium" src="https://www.thumbculture.co.uk/wp-content/uploads/2018/09/Thumb-Culture-Logo-300x191.png" alt="Thumb Culture" width="300" height="191" /></p><p style="text-align: center;"><a href="https://www.youtube.com/thumbculturev2">YouTube</a> | <a href="https://en-gb.facebook.com/ThumbCulture/">Facebook</a> | <a href="https://twitter.com/thumb_culture">Twitter</a> | <a href="https://www.instagram.com/thumb_culture/">Instagram</a> | <a href="https://discord.gg/qFJeudm3pd">Discord</a> | <a href="https://www.thumbculture.co.uk/podcast-links">Podcast</a></p>');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button9', tinymce.plugins.vecb_button9);
})();