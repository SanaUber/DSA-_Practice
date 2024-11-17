function asciiFlags(str) {
    // Create a boolean array of size 128 to cover all ASCII characters
    let flag1=new Array(1);
    console.log(flag1)
    let flags = new Array(128).fill(false);

    // Iterate through the string
    for (let i = 0; i < str.length; i++) {
        let asciiCode = str.charCodeAt(i);  // Get the ASCII code of the character
        console.log( asciiCode)
        console.log( flags[asciiCode])
        // Set the flag at the corresponding ASCII code index to true
      if(  flags[asciiCode] ==true)
        return 'not unique';
    flags[asciiCode]=true
    console.log( flags[asciiCode])
    }
    
    return 'unique';
}

// Example usage
let result = asciiFlags("Hell");
console.log(result);
//set the array 128 charac false now if the flag is true the given string is not unique\
//now start for loop
//if loop ends then at the end str ascii code will be turned true 
//loop ended means no repeat all unique  but if loop is not ended
//means a repeated charac is found true and exited the prog
//o(n) timecomplexity