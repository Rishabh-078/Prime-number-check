var readlineSync=require('readline-sync');
var chalk= require('chalk');
var pointer=0;

console.log(chalk.green("Welcome to game of prime numbers!"))
console.log(chalk.green("We'll check whether you birth date is prime number or not. \n"))
var userName= readlineSync.question(chalk.bold.cyanBright('Whats your Name? '));
console.log(chalk.yellow(`\nWelcome ${userName}! Let's begin \n`));
var dob= readlineSync.question(chalk.blueBright('Please enter your Birth Date in DD/MM format: '));

var splitDob= dob.split("/");
var dateDob= splitDob[0];
var monthDob= splitDob[1];

if(isNaN(dateDob)||dateDob>31||monthDob>12||isNaN(monthDob)){
  console.log(chalk.red.bold("\nPlease enter date in the specified format"))
} else {
  if(dateDob==1){
    console.log(chalk.red.bold("\nBirth Date is neither prime nor composite"))
  }
  else{
    for(var i=2;i<dateDob;i++){
    if(dateDob%i==0){
      pointer=1
    }
  }   
  if(pointer===0){
  console.log(chalk.red.bold("\nYour Birth Date is a prime number."))
  }else{
  console.log(chalk.red.bold("\nYour Birth Date is not a prime number."))
  }}
}
