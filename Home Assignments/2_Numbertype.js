function PrintNumber(num) {
    if (num>0) {
        return "It is a Positive Number";
    }
    else if (num<0) {
     
       return "It is a Negative Number";
    }
    else if (num==0) {
      return "The number is neutral";   
    }   
}
let num = 0
console.log (PrintNumber(num))