function setCookie(cName, cValue, exDay) {
    var d = new Date();
    d.setTime(d.getTime() + (exDay* 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
    
}

function getCookie(cName) {
    var name = cName + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return undefined;
}

//function checkCookie(cName) {
//    var cookieItem = getCookie(cName);
//    if (cookieItem != "") {
//        return false;
//    } else {
//        return true;
//    }
//}