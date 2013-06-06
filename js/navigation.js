YUI().use(['node', 'node-style', 'event', 'event-tap'], function(Y) {
    var navButton = Y.one('#navButton'),
        navHeader = Y.one('#navigationHeader'),
        buttonHeight = navButton.get('offsetHeight'),
        body = Y.one('body');

    function addNavHeight(heightAdd, addRemove) {
        navHeader.setStyle('height', heightAdd);

        if(addRemove) {
            navHeader.addClass('open');
            navButton.addClass('active');
            body.setStyle('overflow', 'hidden');
        } else {
            navHeader.removeClass('open');
            navButton.removeClass('active');
            body.setStyle('overflow', 'auto');
        }
    }

    navButton.on(['tap', 'keypress'], function(e) {
        var windowHeight = Y.one('window').get('winHeight'),
            navHeight = navHeader.getStyle('height'),
            bodyHeight = body.get('offsetHeight'),
            pressed = e.keyCode;

        Y.log(pressed);

        if(navHeight == '0px' && windowHeight > bodyHeight) {
            addNavHeight(windowHeight - buttonHeight, true);
        } else if(navHeight == '0px' && windowHeight < bodyHeight) {
            addNavHeight(bodyHeight, true);
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

    Y.one('window').on('resize', function() {
        var windowHeight = Y.one('window').get('winHeight');

        if(navHeader.hasClass('open')) {
            navHeader.setStyle('height', windowHeight - buttonHeight);
        }
    });

    Y.one('.nav').on('focus', function(e) {
        addNavHeight(Y.one('window').get('winHeight'), true);
    });
});