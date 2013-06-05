YUI().use('node', 'jsonp', 'jsonp-url', function(Y) {
    var url = 'http://api.dribbble.com/players/volovar/shots?callback={callback}';

    function handleJSONP(response) {
        var shotList = Y.one('.shot-list'),
            shots = response.shots,
            shot,
            count = 3,
            html = [];

        for(var i = 0; i < count; i++) {
            shot = shots[i];

            if(i == (count - 1)) {
                html.push('<li class="last">');
            } else {
                html.push('<li>');
            }
            html.push('    <a class="highlight-btn" href="'+ shot.url +'">');
            html.push('        <img src="'+ shot.image_url +'" alt="link image" />');
            html.push('        <span>'+ shot.title +'</span>');
            html.push('    </a>');
            html.push('</li>');
        }

        html = html.join('');

        shotList.set('innerHTML', html);
    }

    Y.jsonp(url, handleJSONP);
});