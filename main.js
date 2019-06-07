
function coinFunction() {
    var amount = document.getElementById("input");
    var quarters = Math.floor((amount.value * 100) / 25);
    var remainder = (amount.value * 100) - (quarters * 25);
    if (remainder >= 10) {
        var dimes = Math.floor(remainder / 10);
        var remainderTwo = remainder - (dimes * 10);
        if (remainderTwo >= 5) {
            var nickels = Math.floor(remainderTwo / 5);
            var remainderThree = remainderTwo - (nickels * 5);
            if (remainderThree > 0) {
                var pennies = Math.floor(remainderThree / 1);
            }
        } else if (remainderTwo > 0) {
            var pennies = Math.floor(remainderTwo / 1);
        }

    } else if (remainder >= 5) {
        var nickels = Math.floor(remainder / 5);
        var remainderTwo = remainder - (nickels * 5);
        if (remainderTwo > 0) {
            var pennies = Math.floor(remainderTwo / 1);
        }
    }

    
    

   console.log(quarters);
   console.log(dimes);
   console.log(nickels);
   console.log(pennies);
   


   var array = ["Quarters: " + quarters, " Dimes: " + dimes, " Nickels: " + nickels, " Pennies: " + pennies];
   

   document.getElementById("return").innerHTML = array;
   


}