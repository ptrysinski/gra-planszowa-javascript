var result = 0;
var attempts = 0;
var sum = 0;

function rollDice() {
    var rand = Math.floor(Math.random() * 6) + 1;
    document.getElementById('start').innerHTML = '<p>START</p>';
    result = result + rand;
    attempts = attempts + 1;
    sum = sum + rand;
    document.getElementById('dice_display').innerHTML = 'Wynik rzutu: ' + rand;
    if (result === 12) {
        document.getElementById('field-' + (result-rand)).innerHTML = (result-rand);
        document.getElementById('result_display').innerHTML = 'Trafiasz na pole specjalne nr 12, koniec gry. <br> Ilość rzutów kostką: ' + attempts + '<br> Średni wynik rzutu kostką: ' + Math.round((sum/attempts) * 10) / 10;
        document.getElementById('field-12').innerHTML = result + '<img class="pawn" src="/images/pawn.png" alt="pionek">';
        document.getElementById('dice_button').innerHTML = '<button class="roll_dice" onclick="document.location.reload(true)">Zagraj jeszcze raz</button>';
    }
    else if (result === 19) {
        document.getElementById('field-' + (result-rand)).innerHTML = (result-rand);
        result = 11;
        document.getElementById('result_display').innerHTML = 'Trafiasz na pole specjalne nr 19, cofasz się na pole nr 11';
        document.getElementById('field-' + result).innerHTML = result + '<img class="pawn" src="/images/pawn.png" alt="pionek">';
    }
    else if (result === 20) {
        document.getElementById('result_display').innerHTML = 'Brawo, wygrałeś, dotarłeś na pole nr 20. <br> Ilość rzutów kostką: ' + attempts + '<br> Średni wynik rzutu kostką: ' + Math.round((sum/attempts) * 10) / 10;
        document.getElementById('field-' + (result-rand)).innerHTML = (result-rand);
        document.getElementById('meta').innerHTML = '<p>META</p>' + '<img class="pawn" src="/images/pawn.png" alt="pionek">';
        document.getElementById('dice_button').innerHTML = '<button class="roll_dice" onclick="document.location.reload(true)">Zagraj jeszcze raz</button>';
    }
    else if (result > 20) {
        document.getElementById('field-' + (result-rand)).innerHTML = (result-rand);
        result = 20 - (rand - (20 - (result - rand)));
        document.getElementById('result_display').innerHTML = 'Twoje pole: ' + result;
        document.getElementById('field-' + result).innerHTML = result + '<img class="pawn" src="/images/pawn.png" alt="pionek">';
        if (result === 19) {
            document.getElementById('field-' + result).innerHTML = '19 <p class="special_text"> Pole specjalne, cofasz się na pole nr 11</p>';
            result = 11;
            document.getElementById('result_display').innerHTML = 'Trafiasz na pole specjalne nr 19, cofasz się na pole nr 11';
            document.getElementById('field-' + result).innerHTML = result + '<img class="pawn" src="/images/pawn.png" alt="pionek">';
        }
    }
    else if (attempts === 1){
        document.getElementById('result_display').innerHTML = 'Twoje pole: ' + result;
        document.getElementById('field-' + result).innerHTML = result + '<img class="pawn" src="/images/pawn.png" alt="pionek">';
    }
    else{
        document.getElementById('result_display').innerHTML = 'Twoje pole: ' + result;
        document.getElementById('field-' + (result-rand)).innerHTML = (result-rand);
        document.getElementById('field-' + result).innerHTML = result + '<img class="pawn" src="/images/pawn.png" alt="pionek">'; 
    }
}