//xify function

function xify (string) {
    let xString = " "
    for (let i = 0; i < string.length; i++) {
        xString += "x"
    }
    return xString
}

console.log(xify("hello world"))
console.log()

//yellingChars function

function yellingChars (string) {
    let newstr = "";
    for (let i = 0; i < string.length; i++) {
        newstr += string[i];
        newstr += "!"
    }
    return newstr
}

console.log(yellingChars("Hello Gregory"))
console.log()
//indexedChars function

function indexedChars (string) {
    let newstr = "";
    for (let i = 0; i < string.length; i++) {
        newstr += i
        newstr += string[i]
    }
    return newstr
}

console.log(indexedChars("Gregory Bissell"))
console.log()

//numberedChars

function numberedChars (string) {
    let newstr = "";
    for (let i = 0; i < string.length; i++) {
        newstr +="(" + i + ")"
        newstr += string[i]
    }
    return newstr
}

console.log(numberedChars("Gregory Bissell"))
console.log()

//exclaim function

function exclaim (string) {
    let newstr = " ";
    for (let i = 0; i < string.length + 1; i++) {
        if (i === string.length) {
            newstr += "!"
        }
        else {
            newstr += string[i]
        }
    }
    return newstr
}

console.log(exclaim("Gregory Bissell"))
console.log()

//repeatIt function 

function repeatIt (string, num) {
let newStr = " ";


for (let i = 0; i < num; i++) {
    for (let j = 0; j < string.length; j++) {
        newStr += string[j]
    }
}
return newStr
}

console.log(repeatIt("greg", 5));
console.log();

//truncate function

function truncate (string) {
    let newStr = " ";

    for (let i = 0; i < 16; i++) {
        if (i === 15) {
            newStr += "..."
        }
        newStr += string[i];
    }
    
    return newStr
}

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'))
console.log()

//ciEmailify function

function ciEmailify (string) {
    let eMail = " ";

    for (let i = 0; i < string.length+1; i++) {
            if (eMail[i] + 1 === " ") {
                eMail += ".";
            }

          else  if (i === string.length) {
                eMail += "@codeimmersives.com";
            }

            else {
                eMail += string[i];
            }
    }
    return eMail
}

console.log(ciEmailify("gregory bissell"))
console.log()
//reverse function

function reverse (string) {
    let newStr = " ";

    for (let i = string.length - 1; i >= 0 ; --i) {
            newStr += string[i];
    }
    return  newStr
}

console.log(reverse("Hello"))
console.log()

//onlyvowels function

function onlyVowels (string) {
    let newStr = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a" || 
            string[i] === "e" || 
            string[i] === "i" || 
            string[i] === "o" || 
            string[i] === "u" ) {
                newStr += string[i]
            }
        }
        return newStr
}

console.log(onlyVowels("Where my vowels at?"))
console.log();

//crazyCase function 

function crazyCase (string) {
    let newStr = " ";
    string.toUpperCase();
    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
             newStr += string[i]
             newStr.toUpperCase
        }
        
       
    }
    return newStr
}

console.log("Today we're gonna learn about looooops")