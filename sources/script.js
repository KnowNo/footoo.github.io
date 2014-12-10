(function (global) {
    var logo = document.querySelector('#logo');
    var title = "Welcome to FoOTOo Lab";
    var count = 0;
    var timeout = 100;
    var timer = setInterval(writer, timeout, title);
    
    function writer(str) {
        if (count == str.length)
            return clearInterval(timer);
        logo.innerHTML += str[count++];
    }
})(this);
