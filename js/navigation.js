YUI().use(['node', 'node-style', 'event', 'event-tap'], function(Y) {
    var navButton = Y.one('#navButton'),
        navHeader = Y.one('#navigationHeader'),
        body = Y.one('body');

    navButton.on('tap', function(e) {
        var windowHeight = Y.one('window').get('winHeight'),
            bodyHeight = body.get('offsetHeight'),
            navHeight = navHeader.getStyle('height');

        if(navHeight == '70px' && windowHeight > bodyHeight) {
            navHeader.setStyle('height', windowHeight);
            navHeader.addClass('open');
            body.setStyle('overflow', 'hidden');
        } else if(navHeight == '70px' && windowHeight < bodyHeight) {
            navHeader.setStyle('height', bodyHeight);
            navHeader.addClass('open');
            body.setStyle('overflow', 'hidden');
        } else {
            navHeader.setStyle('height', '70px');
            navHeader.removeClass('open');
            body.setStyle('overflow', 'auto');
        }
        e.stopPropagation();
    });

    Y.one('window').on('resize', function() {
        var windowHeight = Y.one('window').get('winHeight');

        if(navHeader.hasClass('open')) {
            navHeader.setStyle('height', windowHeight);
        }
    });
});