
    let str = "madam";
    let chars = str.split("");
    let reversed = "";
    for (let i = chars.length - 1; i >= 0; i--) {
        reversed = reversed+chars[i];
    }
    if (str === reversed) {
        console.log(`${str} is a palindrome`);
    } else {
        console.log(`${str} is not a palindrome`);
    }
    console.log("Reversed string:", reversed);

