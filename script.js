// Ques # 01
 
const string = prompt('Enter a character or a number: ');

const result = string.charCodeAt(0);

if(result >= 65 && result <= 90){
  document.write('UpperCase');
}
else if(result >= 97 && result <= 122){
  document.write('LowerCase');
}
else if (result >= 48 && result <= 57){
  document.write('Number');
}
 
//Ques # 02
// function display(){
//     let userInput1 = document.getElementById('input1').value;
//     let userInput2 = document.getElementById('input2').value;

//     let result = document.getElementById('result');
//     if (userInput1 > userInput2){
//         result  = document.write(`1st value ${userInput1} is greater than 2nd value ${userInput2}`);
//     }
//     else
//     if (userInput2 > userInput1){
//         result  = document.write(`2nd value ${userInput2} is greater than 1st value ${userInput1}`);
//     }

//     else   {
//         result  = document.write(`Both numbers are equal`);
//     }
// }
 
 //Ques # 03
// function display(){
//     let userInput = document.getElementById('input').value;
    

//     let result = document.getElementById('result');
//     if (userInput > 0){
//         result  = document.write(`Entered number ${userInput} is Positive. `);
//     }
//     else
//     if (userInput < 0){
//         result = document.write(`Entered number ${userInput} is Negative. `);
//     }

//     else   {
//         result  = document.write(`Entered number is 0`);
//     }
// }


 //Ques # 04
// function check(){
//     let letter = document.getElementById('input').value;
//     if( letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U'){
//         document.write(`True`);

//     }

//     else {
//         document.write(`False`);
//     }
// }
    // Ques # 05
// function checkpassword(){

//     let pass = document.getElementById('input').value;
//     let correctpass = "W3BareBears";
//     let msg = document.getElementById('msg');

//     if( pass === correctpass){
//         msg.innerHTML =  (`Correct! The password you entered matches the original password`);

//     }

//     else if ( pass === ''){
//         msg.innerHTML = (`Please Enter your password`);
//     }

//     else {
//         msg.innerHTML = ('Incorrect Password');
//     }

// }

// Ques # 06
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting  = document.write("Good day") ;
// }
// else{
// greeting = document.write ("Good evening");
// }


 //Ques # 07
function time(){
    let time = +document.getElementById('input').value;
    
    let msg = document.getElementById('msg');

    if (time >= 0 && time < 1200 ){
        msg.innerHTML = (`Good Morning`);
    }

   else if (time >= 1200 && time < 1700 ){
        msg.innerHTML = (`Good afternoon`);
    }
    else if (time >= 1700 && time < 2100 ){
        msg.innerHTML = (`Good Evening`);
    }

    else if (time >= 2100 && time < 2359 ){
        msg.innerHTML = (`Good Night`);
    }

}
