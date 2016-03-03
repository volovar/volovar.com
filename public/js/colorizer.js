var elements = document.getElementsByClassName('js-colorized');
var homeLink = document.getElementsByClassName('home-link');
var colorSet = ['#aab5b5', '#569ccb', '#b864a1', '#4cabab', '#7b4cab', '#33afc4', '#f17ad1'];
var colorCount = 0;
var colorInterval;
var blockColor;

darkenColors();
setColorChange();

function randomizeColor(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
};

// shadeColor courtesy http://stackoverflow.com/a/13542669
function shadeColor(color, percent) {
    var f = parseInt(color.slice(1),16),
        t = percent<0?0:255,
        p = percent<0?percent*-1:percent,
        R = f>>16,
        G = f>>8&0x00FF,
        B = f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
};

function setColorChange() {
    var colorInterval = setInterval(function () {
        darkenColors();
    }, 2200);
}

function darkenColors() {
    for (var i = 0; i < (elements.length); i++) {
        blockColor = shadeColor(colorSet[colorCount], (i * -0.11));
        setDelay(i, blockColor);
    };

    if (colorCount >= (colorSet.length - 1)) {
        colorCount = 0;
    } else {
        colorCount += 1;
    }
};

function setDelay(i, color) {
    clearTimeout(colorTimer);

    var colorTimer = setTimeout(function() {
        elements[i].style.background = color;
    }, (i * 220));
}