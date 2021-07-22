'usescript'

let userName = prompt("Greetings! What is your name?"); //declare a variable and ask the user a question
let confirmGuess = confirm(
  " Welcome " + userName + "! Are you ready for your guessing game?"
);

var totalScore = ("0");
 let userLight = true; //Set the veriable to equal true
 while (userLight) {
  let response = prompt("Am I 22? y/n?"); /* A while loop is used here
//  to run the response of the user! */
 {
   //if (response === "y" || response === "yes" || response === response.toUpperCase('y'))
   if (response.toUpperCase()=== 'Y' || response.toUpperCase() === 'YES') {
    userLight = false;
     //console.log(userLight);
      
       alert("Right on! You know your stuff!"); // an alert pops up if the user is correct!
     } else {
       alert("WRONG"); //An alert pops up if the user is incorrect
     }
  }
}


let userRainbow = true;


 while (userRainbow) {
   let response = prompt("Do I play music? y/n");
  {
    if (response === "y" || response === "yes") {
      userRainbow = false;
      //console.log(userRainbow);
      totalScore++;
      alert("Good work!");
    } else {
      alert("TRY AGAIN");
    }
  }
}

let superMan = true;
while (superMan) {
  let response = prompt("Do I like cornbread? y/n?");
  {
    if (response === "n" || response === "no") {
      superMan = false;
      totalScore++;
      //console.log(superMan);
      alert("You guessed it!");
    } else {
      alert("NOPE!");
    }
  }
}

let water = true;
while (water) {
  let response = prompt("Do I love to draw?");
  {
    if (response === "yes" || response == "y") {
      water = false;
      totalScore++;
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
              totalScore++;
              
              alert(userName + " , You guessed correctly!!");

          }
          else{
              alert( " ...Let's try this again, " + userName);
          }
      }
  }
    

  /* So, we want the user to guess our number 4 times, and and after the 4th time, it tells them to the correct answer!
  */

  // Maybe a for loop?

   let correctAge = "22";
   let rightAnswer = true;
   
  
   

   for(attempts = 1; attempts <= 4; attempts++)
   {
   let ageEntered = prompt("Guess my age!");
     if(ageEntered > correctAge)
     {
       
       alert("too high, I'm in my early twenties!");

     }
     
     if (ageEntered < correctAge)
     {
       alert("I'm not THAT young..");
     }
      
     else if (ageEntered === correctAge) {
       totalScore++;
       alert("You got it!");
       rightAnswer = false;
       break;
       
       
     }
    }
    if(rightAnswer !== false){
      alert("sorry, Charlie! You guessed wrong too many times!");
      
    }
     
    
    
// //As a user, I would like to be guided to an answer 
// //through a series of feedback responses so that I can 
// // learn more about the site owner.




// /*As a user, I would like to guess the answer to a question 
// that could have many possibilities 
// so that I can have fun with a guessing game.*/

 let studyHours = ["2", "4", "6","8","10"];


// // I want there to be 3 different answers to the question

// i want to ask the user a question
for (answer = 1; answer <= 6; answer++) {
  let studyHourResponse = prompt("How many hours do you think I study?");
  
  

  if (studyHourResponse == studyHours[0]) {
    alert("Nice! Can you guess again??");
    totalScore++;
    //console.log(totalScore++)
    
  } else if (studyHourResponse == studyHours[1]) {
    alert("Nice! Guess again?");
    totalScore++;
    //console.log(totalScore);
    
  } else if (studyHourResponse == studyHours[2]) {
    alert("Nice! Guess again?");
    totalScore;
    //console.log(totalScore);
    
  }
  else if (studyHourResponse == studyHours[3]) {
    alert("Nice! Guess again?");
    totalScore;
    //console.log(totalScore);
  
  }

  else if (studyHourResponse == studyHours[4]) {
    alert("Nice! Guess again?");
    totalScore;
    //console.log(totalScore);
  }

  else {
    alert("Not quite...");
  }
  
}
totalScore++;
let finalAnswer = alert("Cool! the correct answers were " + studyHours);
totalAnswers = alert("You got " + totalScore + " Correct!");

  
  //if(studyHoursResponse == studyHours)



// if the user guesses correctly, the question will stop being asked.
//if the user guesses incorrectly 3 times the question will stop being asked.
// I want the user to see what were the right questions!

/* User wants to know how many answer they got right! 
keep track of all the answers*/