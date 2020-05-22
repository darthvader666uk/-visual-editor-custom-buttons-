// JavaScript Document

function getBaseURL () {
   return location.protocol + '//' + location.hostname + 
      (location.port && ':' + location.port) + '/';
}

(function() {
    tinymce.create('tinymce.plugins.vecb_button1', {
        init : function(ed, url) {
            ed.addButton('vecb_button1', {
                title : 'Thumb Culture Bottom',image : url+'/icons/anchor.png',onclick : function() {
                     ed.selection.setContent('<p style="text-align: center;"></p><p style="text-align: center;"><img class="alignnone wp-image-7652 size-medium" src="https://www.thumbculture.co.uk/wp-content/uploads/2018/09/Thumb-Culture-Logo-300x191.png" alt="Thumb Culture" width="300" height="191" /></p><p style="text-align: center;"><a href="https://www.youtube.com/thumbculturev2">YouTube</a> | <a href="https://en-gb.facebook.com/ThumbCulture/">FaceBook</a> | <a href="https://twitter.com/thumb_culture?lang=en">Twitter</a> | <a href="https://www.instagram.com/thumb_culture/">Instagram</a>| <a href="https://www.twitch.tv/thumb_culture">Twitch</a></p><p style="text-align: center;"><a href="https://open.spotify.com/show/21v6IpJRrAZDsZYn8yXxMW">Spotify</a> | <a href="https://podcasts.apple.com/gb/podcast/thumb-culture/id1490184285">iTunes</a> | <a href="https://play.google.com/music/listen?u=0#/ps/I6a5j2aakg3l52afdioyivoo2wi">Google Play Music</a> | <a href="https://www.stitcher.com/podcast/thumb-culture/e/66874772?autoplay=true">Stitcher</a></p>');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('vecb_button1', tinymce.plugins.vecb_button1);
})();