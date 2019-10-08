
function rot13(input) {
    var re = new RegExp("[a-z]", "i");
    var min = 'A'.charCodeAt(0);
    var max = 'Z'.charCodeAt(0);
    var factor = 13;
    var result = "";
    input = input.toUpperCase();

    for (var i = 0; i < input.length; i++) {
        result += (re.test(input[i]) ?
            String.fromCharCode((input.charCodeAt(i) - min + factor) % (max - min + 1) + min) : input[i]);
    }

    return result.toLowerCase();
}

function rot13_encode(input) {
    return rot13(input);
}

function rot13_decode(input) {
    return rot13(input);
}


export { rot13_encode, rot13_decode };