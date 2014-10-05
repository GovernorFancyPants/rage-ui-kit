var switch1 = new rageSwitch(document.getElementById('switch1'));
var switch2 = new rageSwitch(document.getElementById('switch2'));
var switch3 = new rageSwitch(document.getElementById('switch3'));
var switch4 = new rageSwitch(document.getElementById('switch4'));

function rageSwitch(el) {
    el.addEventListener('click', function() {
        if (el.classList.contains('disabled')) {
            return;
        } else {
            if (el.classList.contains('active')) {
                el.classList.remove('active');
            } else {
                el.classList.add('active');
            }
        }
    }, true);
}