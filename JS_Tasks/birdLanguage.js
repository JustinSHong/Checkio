// Task Description
// You are given an ornithological phrase as several words which are separated by white-spaces (each pair of words by one whitespace).
// The bird does not know how to punctuate its phrases and only speaks words as letters. All words are given in lowercase.
// You should translate this phrase from the bird language to something more understandable.

// Input: A bird phrase as a string.
// Output: The translation as a string.

function translate(phrase) {
    let translated = "";
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === " ") translated += " ";
        else if (!"aeiouy".includes(phrase[i])) {
            translated += phrase[i];
            i++;
        } else {
            translated += phrase[i];
            i += 2;
        }
    }
    return translated;
}

// Test Cases:
translate("hieeelalaooo"); //"hello"
translate("hoooowe yyyooouuu duoooiiine"); // "how you doin"
translate("aaa bo cy da eee fe"); // "a b c d e f"
translate("sooooso aaaaaaaaa"); // "sos aaa"
