var readyStateCheckInterval = self.setInterval(function() {
    if (document.readyState === 'complete') {
        clearInterval(readyStateCheckInterval);
        setupLinks();

        popStateHandler();
    }
}, 10);

function setupLinks() {
    var links = document.getElementsByClassName('js-local-link');

    for (var i = 0; i < links.length; i++) {
        ajaxifyLink(links[i]);
    }
}

function ajaxifyLink(linkElement) {
    linkElement.addEventListener('click', function(e) {
        e.preventDefault();

        changeBrowserURL(linkElement);

        getNewPage(linkElement.href);
    }, false);
}

function changeBrowserURL(domElement) {
    history.pushState(null, null, domElement.href);
}

function getNewPage(link_url) {
    var tempContainer,
        replacementElement,
        ogContainer = document.getElementsByClassName('js-content-block')[0],
        XMLHttpReq = new XMLHttpRequest();

    XMLHttpReq.open('GET', link_url, false);
    XMLHttpReq.send();

    tempContainer = document.createElement('div');
    tempContainer.innerHTML = XMLHttpReq.responseText;

    replacementElement = tempContainer.getElementsByClassName('js-content-block')[0].innerHTML;

    // fadeOut(ogContainer, replacementElement);
    ogContainer.innerHTML = replacementElement;
    // fadeIn(ogContainer);

    setupLinks();
}

function popStateHandler() {
    window.addEventListener('popstate', function(e) {
        getNewPage(document.URL);
    });
}

function fadeOut(element) {
    var opacity = 1;

    function decrease () {
        opacity -= 0.05;
        if (opacity <= 0){
            // complete
            element.style.opacity = 0;
            return true;
        }
        element.style.opacity = opacity;
        requestAnimationFrame(decrease);
    }
    decrease();
}

function fadeIn(element) {
    var opacity = 0;

    function increase () {
        opacity += 0.05;
        if (opacity >= 1){
            // complete
            element.style.opacity = 1;
            return true;
        }
        element.style.opacity = opacity;
        requestAnimationFrame(increase);
    }
    increase();
}