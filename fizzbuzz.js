/**
 * Write a program that prints the numbers from 1 to 100. But for multiples of three,
 * print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For
 * numbers which are multiples of both three and five, print "FizzBuzz".
 */
function fizzBuzz( num ) {
    for ( let i = 0; i < num; i++ ) {
        if ( i % 3 === 0 && i % 5 === 0 ) {
            console.log( "FizzBuzz" );
        } else if ( i % 3 === 0 ) {
            console.log( "Fizz" );
        } else if ( i % 5 === 0 ) {
            console.log( "Buzz" );
        } else {
            console.log( num );
        }
    }
}
fizzBuzz( 100 );

// Sample solution; by Trevor Dixon https://stackoverflow.com/users/711902/trevor-dixon
function fizzBuzz( num ) {
    for (var i = 1; i <= num; i++) {
        var expletive = '';
        if (i % 3 === 0) expletive += 'Fizz';
        if (i % 5 === 0) expletive += 'Buzz';
        console.log(expletive || i);
    }
}
