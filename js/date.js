var today = new Date(),
    year = today.getFullYear(),
    elem = document.getElementById('date');

if(elem) {
    elem.innerHTML = year;
}