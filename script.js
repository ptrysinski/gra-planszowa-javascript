function rollDice(){
    var rand = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice_display').innerHTML = 'Wynik rzutu: ' + rand;
}