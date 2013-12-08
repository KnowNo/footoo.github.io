(function (global) {
    var logo = document.getElementById('logo');
    var text = document.createTextNode('');
    logo.appendChild(text);

    var str = "Welcome to FoOTOo Lab";
    var timer = setInterval(writer, 100);
    var count = 0;

    function writer() {
        if (count == str.length)
            return flicker();
        text.textContent += str[count];
        count++;
    }

    function flicker() {
        clearInterval(timer);
        var exsit = false;
        var otext = text.textContent;
        setInterval(callback, 500);

        function callback() {
            if (exsit) {
                text.textContent = otext;
                exsit = false;
            } else {
                text.textContent += '_';
                exsit = true;
            }
        }
    }
})(this);