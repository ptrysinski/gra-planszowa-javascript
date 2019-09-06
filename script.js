var result = 0;

function rollDice() {
    var rand = Math.floor(Math.random() * 6) + 1;
    result = result + rand;
    document.getElementById('dice_display').innerHTML = 'Wynik rzutu: ' + rand;
    if (result === 12) {
        document.getElementById('result_display').innerHTML = 'Trafiasz na pole specjalne nr 12, koniec gry';
    }
    else if (result === 19) {
        result = 11;
        document.getElementById('result_display').innerHTML = 'Trafiasz na pole specjalne nr 19, cofasz się na pole nr 11';
    }
    else if (result === 20) {
        document.getElementById('result_display').innerHTML = 'Brawo, wygrałeś, dotarłeś na pole nr 20';
    }
    else if (result > 20) {
        result = 20 - (rand - (20 - (result - rand)));
        document.getElementById('result_display').innerHTML = 'Twoje pole: ' + result;
        if (result === 19) {
            result = 11;
            document.getElementById('result_display').innerHTML = 'Trafiasz na pole specjalne nr 19, cofasz się na pole nr 11';
        }
    }
    else{
        document.getElementById('result_display').innerHTML = 'Twoje pole: ' + result;
    }
}