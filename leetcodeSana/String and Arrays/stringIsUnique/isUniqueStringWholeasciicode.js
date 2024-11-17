function isUniqueChar128(str) {
    let checker1 = 0;  // to handle first 64 characters (0-63)
    let checker2 = 0;  // to handle next 64 characters (64-127)

    for (let i = 0; i < str.length; i++) {
        let val = str.charCodeAt(i);
        if (val < 64) {
            if ((checker1 & (1 << val)) > 0) {
                return false;  // duplicate found
            }
            checker1 |= (1 << val);  // set the bit for this character
        } else {
            if ((checker2 & (1 << (val - 64))) > 0) {
                return false;  // duplicate found
            }
            checker2 |= (1 << (val - 64));  // set the bit for this character
        }
    }
    return true;  // all characters are unique
}
let result = isUniqueChar128("Helo!");
console.log(result);