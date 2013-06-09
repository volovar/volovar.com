YUI().use(['node', 'node-style', 'event', 'event-tap'], function(Y) {
    var navButton = Y.one('#navButton'),
        navHeader = Y.one('#navHeader'),
        body = Y.one('body');

    function addNavHeight(heightAdd, addRemove) {
        navHeader.setStyle('height', heightAdd);

        if(addRemove) {
            navHeader.addClass('open');
            navButton.addClass('active');
        } else {
            navHeader.removeClass('open');
            navButton.removeClass('active');
        }
    }

    navButton.on(['tap', 'keypress'], function(e) {
        var navHeight = navHeader.getStyle('height'),
            navContentsHeight = Y.one('#navContents').get('offsetHeight'),
            pressed = e.keyCode;

        Y.log(pressed);
        Y.log(navContentsHeight);

        if(navHeight == '0px') {
            addNavHeight(navContentsHeight, true);
        } else {
            addNavHeight('0px', false);
        }

        e.stopPropagation();
    });

    navButton.on('mouseenter', function() {
        this.addClass('hover');
    });

    navButton.on('mouseleave', function() {
        this.removeClass('hover');
    });

    Y.one('body').on('touchmove', function(){
        navButton.removeClass('hover');
    });

    Y.one('window').on('orientationchange', function() {
        Y.log('orientation check');
        var navContentsHeight = Y.one('#navContents').get('offsetHeight');

        if(navHeader.hasClass('open')) {
            navHeader.setStyle('height', navContentsHeight);
        }
    });

    Y.one('.nav').on('focus', function() {
        addNavHeight(Y.one('#navContents').get('offsetHeight'), true);
    });
});