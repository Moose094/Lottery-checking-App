
// let's create digit variales and store user input in them
var digits1, digits2, digits3, digits4, finalDigits;
var winDigit1, winDigit2, winDigit3, winDigit4, winningDigits;

let winningMessage = document.getElementById("winningMessage");
let losingMessage = document.getElementById("losingMessage");

 
function verifyDigits(){
   
   /* assigning html input elements to the digits variables
   value as number converts the user input into a number
   instead of a string
   */
   digits1 = document.getElementById("digitOne").valueAsNumber;  
   digits2 = document.getElementById("digitTwo").valueAsNumber;
   digits3 = document.getElementById("digitThree").valueAsNumber;
   digits4 = document.getElementById("digitFour").valueAsNumber;


   finalDigits = [ digits1, digits2, digits3, digits4];
   console.log(finalDigits);

   // storing random numbers and storing them in their respective variables
   winDigit1 = getRandomNumber();
   winDigit2 = getRandomNumber();
   winDigit3 = getRandomNumber();
   winDigit4 = getRandomNumber();

   console.log(winDigit1, winDigit2, winDigit3, winDigit4);

   // creating a function that will generate a random number
   function getRandomNumber(){
    return Math.floor(Math.random() *100); // math.random generates a random number
    //math.floor rounds the number
}


   
   // let's create an array for the winning value 

    winningDigits = [winDigit1, winDigit2, winDigit3, winDigit4];

    console.log(winningDigits);




    if (finalDigits.length !== winningDigits.length) {
      losingMessage.textContent = "Sorry pal, maybe next time"
   }
   else if (finalDigits.every((element, index) => element === winningDigits[index])){
      winningMessage.textContent = "Yaaay congrats!"
      document.getElementById("resultBoard").style.backgroundColor = "green";
      document.getElementById("resultBoard").style.color = "white";

      // inserting a happy image when a user wins
      var img = document.createElement("img");

      img.src = "happy.jpg";

      var src = document.getElementById("resultBoard-Img");

      src.appendChild(img);

      
   }
   else{
      losingMessage.textContent = "Sorry pal, maybe next time"
      document.getElementById("resultBoard").style.backgroundColor = "red";
      document.getElementById("resultBoard").style.color = "white";
      document.getElementById("resultBoard-Text").textContent = "Sorry pal, maybe next time";

      // inserting a sad image when the user doesnt win
      var img = document.createElement("img");

      img.src = "sad.jpg";

      var src = document.getElementById("resultBoard-Img");

      src.appendChild(img);

   }
   
   // storing winning digits in the cirlcle at the bottom of the page
   document.getElementById("win1").textContent = winDigit1;
   document.getElementById("win2").textContent = winDigit2;
   document.getElementById("win3").textContent = winDigit3;
   document.getElementById("win4").textContent = winDigit4;


   
   

}



