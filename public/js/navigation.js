YUI().use(['node', 'node-style', 'event'], function(Y) {
    var topHeader = Y.one('#topHeader'),
        navButton = Y.one('#navButton'),
        navButtonInner = Y.one('.nav-button_inner'),
        body = Y.one('body'),
        navObj, obj;

    obj = Y.Node.create(
        '<span class="view-icon ellipsis"></span>' +
            '<span class="view-icon close rotated"></span>'
    );

    navButtonInner.append(obj);

    navObj = Y.Node.create(
        '<div class="nav-header" id="navHeader">' +
            '<ul class="nav" id="navContents">' +
                '<li>' +
                    '<a href="/" class="headline current">' +
                        '<h1>Carefully Crafted Code</h1>' +
                        '<h2>Delivered direct from Chicago, IL</h2>' +
                    '</a>' +
                '</li>' +
                '<li>' +
                '<a href="/projects.html" class="headline">' +
                    '<h1>Project Storage</h1>' +
                    '<h2>A backlog of the things I\'ve crafted</h2>' +
                '</a>' +
                '</li>' +
                '<li>' +
                    '<a href="/about.html" class="headline">' +
                        '<h1>Information Center</h1>' +
                        '<h2>General Info and Inquiries</h2>' +
                    '</a>' +
                '</li>' +
            '</ul>' +
        '</div>'
    );

    topHeader.append(navObj);

    var navHeader = Y.one('#navHeader'),
        moreEllipsis = Y.one('.ellipsis'),
        moreClose = Y.one('.close');

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
            navContentsHeight = Y.one('#navContents').get('offsetHeight');

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

    Y.one('window').on(['orientationchange', 'resize'], function() {
        if(navHeader.hasClass('open')) {
            Y.log('orientation check');
            var navContentsHeight = Y.one('#navContents').get('offsetHeight');
            navHeader.setStyle('height', navContentsHeight);
        }
    });

    Y.one('.nav').on('focus', function() {
        addNavHeight(Y.one('#navContents').get('offsetHeight'), true);
    });
});