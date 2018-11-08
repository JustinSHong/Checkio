// Task Description:
// Your mission is to encrypt a secret message (text only, without special chars like "!", "&", "?" etc.) using Caesar cipher
// where each letter of input text is replaced by another that stands at a fixed distance.

function toEncrypt(text, delta) {
    const min = 97; // utf of 'a'
    const max = 122; // utf of 'z'
    let result = "";
    for (let c of text) {
        if (c === " ") result += " ";
        else if (
            c.charCodeAt(0) + delta >= min &&
            c.charCodeAt(0) + delta <= max
        ) {
            result += String.fromCharCode(c.charCodeAt(0) + delta);
        } else if (c.charCodeAt(0) + delta < min) {
            result += String.fromCharCode(
                max + (delta + (c.charCodeAt(0) - min)) + 1
            );
        } else if (c.charCodeAt(0) + delta > max) {
            result += String.fromCharCode(
                min + (delta - (max - c.charCodeAt(0))) - 1
            );
        }
    }
    return result;
}

// Test Cases:
toEncrypt("a b c", 3); // "d e f"
toEncrypt("a b c", -3); // "x y z"
toEncrypt("simple text", 16); // "iycfbu junj"
toEncrypt("important text", 10); // "swzybdkxd dohd"
toEncrypt("state secret", -13); // "fgngr frperg"
