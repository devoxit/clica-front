export const crypt = {
    deobfuscate: (data, shiftBy) => {
        var size = data.length
        var decrypt = ""
        for (let i = 0; i < size; i++) {
            //store the ASCII value of each character
            let temp = data.charCodeAt(i)
            // Uppercase
            if ((temp >= 65) && (temp <= 90)) {
                temp = (((temp - 65 + 26 - shiftBy) % 26) + 65)

            }

            // Lowercase
            else if ((temp >= 97) && (temp <= 122)) {
                temp = (((temp - 97 + 26 - shiftBy) % 26) + 97)
            }

            else if ((temp >= 46) && (temp <= 57)) {
                temp = (((temp - 46 + 12 - shiftBy) % 12) + 46)
            }

            decrypt += String.fromCharCode(temp);
        }
        return decrypt
    },

    obfuscate: (data, shiftBy) => {
        var size = data.length
        var encrypt = ""
        for (let i = 0; i < size; i++) {
            //store the ASCII value of each character
            let temp = data.charCodeAt(i)
            // Uppercase
            if ((temp >= 65) && (temp <= 90)) {
                temp = (((temp - 65 + shiftBy) % 26) + 65);
            }

            // Lowercase
            else if ((temp >= 97) && (temp <= 122)) {
                temp = (((temp - 97 + shiftBy) % 26) + 97);
            }

            else if ((temp >= 46) && (temp <= 57)) {
                temp = (((temp - 46 + shiftBy) % 12) + 46);
            }




            encrypt += String.fromCharCode(temp);
        }
        return encrypt
    }
}