var a = 0,
    b = 0,
    value = (a * a) - (2 * a * b) + (b * b);

    console.log("value field with base a: ' + a + ' and height b: ' + b + ' is equal to: ' + value");

    if ( value > 0 ) {
        console.log('wynik dodatni');
    } 
    else if ( value < 0 ) {
        console.log('wynik ujemny');
    } 
    else if ( value == 0 ) {
        console.log('game over');
    }

