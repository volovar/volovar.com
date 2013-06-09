YUI().use(['node', 'node-style', 'event', 'event-tap'], function(Y) {
    var navButton = Y.one('#navButton'),
        navHeader = Y.one('#navHeader'),
        moreEllipsis = Y.one('.ellipsis'),
        moreClose = Y.one('.close'),
        body = Y.one('body');

    moreClose.addClass('rotated');

    function addNavHeight(heightAdd, addRemove) {
        navHeader.setStyle('height', heightAdd);

        if(addRemove) {
            navHeader.addClass('open');
            navButton.addClass('active');
            moreEllipsis.addClass('rotated');
            moreClose.removeClass('rotated');
        } else {
            navHeader.removeClass('open');
            navButton.removeClass('active');
            moreEllipsis.removeClass('rotated');
            moreClose.addClass('rotated'); }
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