
/*
  BRONZE ::
    Create a function that takes in the string

    const stringCheck = '  Welcome to eleven fifty   ';

    The function should remove extra whitespace before or after
    the characters is trimmed, and should change the string so that the
    the first 'e' and 'f' in 'eleven fifty' is capitalized.

  SILVER ::
    Add typechecking and make sure the string parameter is a string.
    Also check to make sure the length is greater than zero, but less than
    30. If the string is invalid, return a message for an invalid argument.

  GOLD ::
    Create a callback function that prints a parameter to the console.
    Add a second parameter to the string function from Silver and Bronze for a callback function.
    Instead of returning the data, pass it callback function, and log it to the console.
*/


const stringCheck = '  Welcome to eleven fifty   ';

const logger = data => { //for gold challenge, modify below so its valid
    console.log(data);
}

const challenge = (str, callback) => {
    if (typeof str !== 'string' || str.length < 1 || str.length > 30) { //silver part of challenge
        return 'Invalid Argument';
    }

    let trimmedString = str.trim();

    let replacedString = trimmedString.replace('eleven fifty', 'Eleven Fifty');

    callback(replacedString);
}
challenge(stringCheck, logger);

