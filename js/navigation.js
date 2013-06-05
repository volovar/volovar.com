YUI().use(['node', 'node-style', 'event', 'event-tap'], function(Y) {
    var navButton = Y.one('#navButton'),
        navHeader = Y.one('#navigationHeader'),
        body = Y.one('body');

    function addNavHeight(heightAdd, display, addRemove) {
        navHeader.setStyle('height', heightAdd);

        if(addRemove) {
            navHeader.addClass('open');
            navButton.addClass('active');
        } else {
            navHeader.removeClass('open');
            navButton.removeClass('active');
        }

        body.setStyle('overflow', display);
    }

    navButton.on('tap', function(e) {
        var windowHeight = Y.one('window').get('winHeight'),
            bodyHeight = body.get('offsetHeight'),
            navHeight = navHeader.getStyle('height');

        if(navHeight == '70px' && windowHeight > bodyHeight) {
            addNavHeight(windowHeight, 'hidden', true);
        } else if(navHeight == '70px' && windowHeight < bodyHeight) {
            addNavHeight(bodyHeight, 'hidden', true);
        } else {
            addNavHeight('70px', 'auto', false);
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