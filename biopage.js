'usescript'

let userName = prompt("Greetings! What is your name?");
let confirmGuess = confirm(
  " Welcome " + userName + "! Are you ready for your guessing game?"
);


let userLight = true;
while (userLight) {
  let response = prompt("Did Edison create the lightbulb? y/n?");
  {
    if (response === "y" || response === "yes" || response === response.toUpperCase('y')) {
      userLight = false;
      //console.log(userLight);
      alert("Right on! You know your stuff!");
    } else {
      alert("WRONG");
    }
  }
}

let userRainbow = true;


while (userRainbow) {
  let response = prompt("Are Rainbows real? y/n");
  {
    if (response === "y" || response === "yes") {
      userRainbow = false;
      //console.log(userRainbow);
      alert("Good work!");
    } else {
      alert("TRY AGAIN");
    }
  }
}

let superMan = true;
while (superMan) {
  let response = prompt("Is Superman apart of the MCU? y/n?");
  {
    if (response === "n" || response === "no") {
      superMan = false;
      //console.log(superMan);
      alert("You guessed it!");
    } else {
      alert("NOPE!");
    }
  }
}

let water = true;
while (water) {
  let response = prompt("Should you drink water everyday?");
  {
    if (response === "yes" || response == "y") {
      water = false;

      //console.log(water);

      alert("AWESOME!!");
    } else {
      alert("I'm concerned..Try again.");
    }
  }
  }

  let likePage = true;
  while (likePage) {
      let response = prompt("Last question " + userName + " , Do you think you'll like my page? y/n?");
      {
          if (response === 'y' || response === 'yes')
          {   likePage = false;

              //console.log(likePage);
              
              alert(userName + " , You guessed correctly! Please enjoy!");

          }
          else{
              alert( " ...Let's try this again, " + userName);
          }
      }
  }
    