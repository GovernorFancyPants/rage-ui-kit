var switch1 = new rageSwitch(document.getElementById('switch1'));
var switch2 = new rageSwitch(document.getElementById('switch2'));
var switch3 = new rageSwitch(document.getElementById('switch3'));
var switch4 = new rageSwitch(document.getElementById('switch4'));

function rageSwitch(el) {
    el.addEventListener('click', function() {
        if (hasClass(el, 'disabled')) {
            return;
        } else {
            if (hasClass(el, 'active')) {
                el.className = el.className.replace(/\bactive\b/, '');
            } else {
                el.className = el.className + " active ";
            }
        }
    }, true);
}

function hasClass(element, selector) {
    var theClass = " " + selector + " ";
    if ( (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(theClass) > -1 ) {
        return true;
    } else {
        return false;
    }
}