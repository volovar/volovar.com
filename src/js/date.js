document.addEventListener("DOMContentLoaded", function(event) {
    (function () {
        var today = new Date();
        var year = today.getFullYear();
        var elem = document.getElementById('date');

        if(elem) {
            elem.textContent = year;
        }
    })();
});
