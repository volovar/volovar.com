YUI().use('node', 'jsonp', 'jsonp-url', function(Y) {
    var url = 'http://api.dribbble.com/players/volovar/shots?callback={callback}';

    function handleJSONP(response) {
        var shotList = Y.one('#dribbble-block'),
            shots = response.shots,
            shot,
            count = 3,
            html = [];

        for(var i = 0; i < count; i++) {
            shot = shots[i];

            html.push('<div class="feature-button" href="'+ shot.url +'">');
            html.push('<a href="'+ shot.url +'">');
            html.push('  <img src="'+ shot.image_url +'" alt="link image" />');
            html.push('  <span class="title">'+ shot.title +'</span>');
            html.push('</a>');
            html.push('</div>');
        }

        html = html.join('');

        shotList.set('innerHTML', html);
    }

    Y.jsonp(url, handleJSONP);
});