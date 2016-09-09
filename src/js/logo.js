document.addEventListener("DOMContentLoaded", function (event) {
  (function () {
    var COLOR_SETS = [
      // {fgA: "#e2e2e2", fgB: "#bbb", bg: "#343434"},
      // {fgA: "#f17ad1", fgB: "#569ccb", bg: "#7b4cab"},
      // {fgA: "#f94793", fgB: "#14c4f3", bg: "#1c2246"},
      // {fgA: "#69fa9f", fgB: "#ffb26c", bg: "#1c2246"},
      // {fgA: "#feb31c", fgB: "#bf3123", bg: "#181820"}

      {fgA: "#f94793", fgB: "#14c4f3", bg: "#181820"},
      {fgA: "#14c4f3", fgB: "#69fa9f", bg: "#181820"},
      {fgA: "#69fa9f", fgB: "#9249b5", bg: "#181820"},
      {fgA: "#9249b5", fgB: "#bf3123", bg: "#181820"},
      {fgA: "#bf3123", fgB: "#feb31c", bg: "#181820"},
      {fgA: "#feb31c", fgB: "#f94793", bg: "#181820"}
    ];
    var COLORS = [
      "#f94793", "#14c4f3", "#69fa9f", "#9249b5", "#bf3123", "#feb31c"
    ];
    var colorPosition = 0;
    var logoNodes = document.querySelector("#js-v-logo").children;
    var logoArray = Array.from(logoNodes);

    logoArray.sort(function (a, b) {
      return a.getAttribute("vlogo:step") - b.getAttribute("vlogo:step");
    });

    function changeColors () {
      var color;

      // find the new color for the element
      for (var i = 0; i < logoArray.length; i++) {
        if (i === 1 || i === 3) {
          color = COLOR_SETS[colorPosition]["bg"];
        } else if (i === 0) {
          color = COLOR_SETS[colorPosition]["fgA"];
        } else {
          color = COLOR_SETS[colorPosition]["fgB"];
        }

        delayColorChange(i, color);
      }

      // set colorPosition to always be less than the number of color palettes
      colorPosition = (colorPosition + 1) % COLOR_SETS.length;
    }

    // staggers the color change between elements
    var delayColorChange = function (counter, color) {
      var colorChangeTimeout = setTimeout (function () {
        logoArray[counter].style.fill = color;
      }, counter * 220);
    }

    // loop the color change forever
    var colorChangeInterval = setInterval (function () {
      changeColors();
    }, 2200);
  })();
});
