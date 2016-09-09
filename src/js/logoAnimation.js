document.addEventListener("DOMContentLoaded", function() {
  (function () {
    var COLORS = [
      "#69fa9f", "#9249b5", "#bf3123", "#feb31c", "#f94793", "#14c4f3",
    ];
    var colorPosition = 0;
    var colorNodes = document.querySelector("#js-v-logo").children;

    function changeColors () {
      var color;

      // find the new color for the element
      for (var i = 0; i < colorNodes.length; i++) {
        if (i === 0) {
          color = COLORS[colorPosition];
        } else if (i === 1) {
          color = COLORS[(colorPosition + 1) % COLORS.length];
        }

        delayColorChange(i, color);
      }

      // set colorPosition to always be less than the number of color palettes
      colorPosition = (colorPosition + 1) % COLORS.length;
    }

    // staggers the color change between elements
    var delayColorChange = function (counter, color) {
      var colorChangeTimeout = setTimeout (function () {
        colorNodes[counter].style.fill = color;
      }, counter * 240);
    }

    // loop the color change forever
    var colorChangeInterval = setInterval (function () {
      changeColors();
    }, 2200);
  })();
});
