/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let remainingDigits =(x);
    let reversed=0


      if (x < 0 || (x != 0 && x % 10 == 0)) {
            return false;
        }
     
const digitArray = [];
while (remainingDigits > 0) {
  const lastDigit = remainingDigits % 10;

   reversed=reversed*10+lastDigit;
     
    remainingDigits = Math.ceil
    .floor(remainingDigits / 10);
   }
      console.log('reversed',reversed);
 if(reversed===x){
     return true;
 }
 else{
     return false;
 }

    
    };
   