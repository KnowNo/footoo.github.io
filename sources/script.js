(function (global) {
    var logo = document.querySelector('#logo');
    var title = "Welcome to FoOTOo Lab";
    var count = 0;
    var timeout = 100;
    var timer = setInterval(writer, timeout, title, count);
    
    function writer(str, count) {
        if (count == str.length)
            return clearInterval(timer);
        logo.innerHTLM += str[count++];
    }
})(this);
