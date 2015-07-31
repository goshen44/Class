/*
Josh Goshen
Scalable Data Infrastructures
Functions Assignment
SDI 1507
 */

//I'm playing the Powerball Lottery, and I think I have a pretty good ticket in my hand.
powerball= confirm("Are you ready to watch the Powerball Tonight and see if you're going to win or lose? (OK for Yes, Cancel for No)");

if (powerball === true) {
    //code that runs if you want to watch the Powerball tonight
    console.log("I can just imagine if I win....");
}else{
    //code that runs if you don't care to see if you win or lose
    console.log("Wouldn't you rather watch live and find out to see if you win?");
}
// I'm watching TV and they just pulled the first number.
var firstNumber=6; //The first Number they pull is the number 6.
var firstPulled= "The first number they pulled in Tonight's Powerball is"; //Text used to display the number they pulled
console.log( firstPulled + " " +firstNumber + "."); //Used to show the user the outcome.
