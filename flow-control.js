function basicTeenager(age) {
var basicTeenager = age>=13 && age<=19;
  if(age === true) {
    return 'You are a teenager!'
  }
}
basicTeenager(20);


function teenager(age) {
  var teenager = age>=13 && age<=19;
if(age === true) {
  return 'You are a teenager!'
} else{
  return "You are not a teenager"
}
}
teenager(20);



function ageChecker(age) {
  var ageChecker = age>=13 && age<=19;
if(age === true){
  console.log('You are a teenager!');
}else if(age <=12) {
  console.log('You are a kid');
} else if(age>19){
  console.log('You are a grown up.');
}
}
ageChecker(4);




function ternaryTeenager(age) {
var ternaryTeenager = age>=13 && age<=19;
return ternaryTeenager==='age'?'You are a teenager.':'You are not a teenager.';
}
ternaryTeenager(15);




function switchAge(age) {
var age = 16;
switch(age){
  case 13,14,15,16,17,18,19:
  console.log('You are a teenegr!');
  break;
  default:
  return 'You have an age.'
}

}
switchAge(16);
