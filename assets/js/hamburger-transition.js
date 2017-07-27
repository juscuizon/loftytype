//Exelent little functions to use any time when class modification is needed
function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

//Add event from js to keep the markup clean
function init() {
    document.getElementById("mobile-menu-button").addEventListener("click", toggleMenu);
}

//The actual fuction
function toggleMenu() {
    var ele = document.getElementsByClassName('mobile-menu-button')[0];
    if (!hasClass(ele, "active")) {
        addClass(ele, "active");
    } else {
        removeClass(ele, "active");
    }

    var ele1 = document.getElementsByClassName('mobile-navigation')[0];
    if (!hasClass(ele1, "active")) {
        addClass(ele1, "active");
        removeClass(ele1, "fade");
    } else {
        removeClass(ele1, "active");
        addClass(ele1, "fade");
    }

}

//Prevent the function to run before the document is loaded
document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        init();
    }
});
