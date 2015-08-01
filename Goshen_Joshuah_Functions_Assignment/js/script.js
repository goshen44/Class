/*
Josh Goshen
Scalable Data Infrastructures
Functions Assignment
SDI 1507
 */

//I'm playing the Powerball Lottery, and I think I have a pretty good ticket in my hand
powerball= confirm("Are you ready to watch the Powerball Tonight and see if you're going to win or lose? (OK for Yes, Cancel for No)");

if (powerball === true) {
    //code that runs if you want to watch the Powerball tonight
    console.log("I can just imagine if I win....");
}else{
    //code that runs if you don't care to see if you win or lose
    console.log("Wouldn't you rather watch live and find out to see if you win?");
}
function myOdds(){
    var chances= 59; //Number of balls there are for the first number in Powerball
    var numbersPulled= 1; //Number of Balls they pull
    var odds= 1/59; //Your odds of getting the first Number
    console.log (odds);
}
myOdds();
function powerBall(number){
    var powerBall = 1/ number; //Number of ball possibilities
    console.log("Now, the chances of me pulling the right number is " + powerBall + " percent."); //Chances of me having the right number in sentence form.
}
powerBall(59);//The Number of balls in the initial Powerball drawing
// I'm watching TV and they just pulled the first number
var firstNumber=6; //The first Number they pull is the number 6
var firstPulled= "The first number they pulled in Tonight's Powerball is"; //Text used to display the first number they pulled
console.log( firstPulled + " " +firstNumber + " " + "and I have it."); //Used to show the user the outcome
powerBall(58);//The Number of remaining balls in the initial Powerball drawing
var secondNumber= 25; //The Second Number they pulled
var secondPulled= "The second number they pulled is"; //Text used to display the second number they pulled
console.log( secondPulled + " " +secondNumber + " " + "and I have it."); //Used to show the user the outcome
powerBall(57);//The Number of remaining balls in the initial Powerball drawing
var thirdNumber= 19; //The Third Number they pulled
var thirdPulled= "The third number they pulled in is"; //Text used to display the third number they pulled
console.log( thirdPulled + " " +thirdNumber + " " + "and I have it."); //Used to show the user the outcome
powerBall(56);//The Number of remaining balls in the initial Powerball drawing
var fourthNumber= 46; //The Fourth Number they pulled
var fourthPulled= "The fourth number they pulled is"; //Text used to display the fourth number they pulled
console.log( fourthPulled + " " +fourthNumber + " " + "and I have it."); //Used to show the user the outcome
powerBall(55);//The Number of remaining balls in the initial Powerball drawing
var fifthNumber= 21; //The Fifth Number they pulled
var fifthPulled= "The final number they pulled before the Powerball is"; //Text used to display the last number they pulled before the Powerball pull
console.log( fifthPulled + " " +fifthNumber + " " + "and I have it."); //Used to show the user the outcome
powerBall(35);//The Number of Balls in the Special Powerball drawing
var lastNumber= 4; //The Fifth Number they pulled
var lastPulled= "The final number in Tonight's Powerball ball drawing is the Powerball and it is"; //Text used to display the last number they pulled before the Powerball pull
console.log( lastPulled + " " +lastNumber + " " + "and I have it."); //Used to show the user the outcome
//I Just Won the Lottery!
function mySecondOdds(){
    var chances= 58; //Number of balls there are for the second number in Powerball, since they pulled one, there are 58 balls left
    var numbersPulled= 1; //Number of Balls they pull
    var odds= 1/58; //Your odds of getting the Second Number
    console.log (odds);
}
mySecondOdds();

function powerBall2(number){
    var powerBall2 = number / 58; //Number of ball possibilities
    console.log("The chances of me pulling the right number on the second pull is " + powerBall2 + " percent."); //Chances of me having the right number in sentence form.
}
powerBall2(1);
//They just pulled the second ball



