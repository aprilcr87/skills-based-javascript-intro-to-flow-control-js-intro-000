function basicTeenager(age) {
var basicTeenager = 'age'>=13 && 'age'<=19;
  if(age>=13 && age<=19) {
    console.log('You are a teenager!');
  }

}
  basicTeenager(14);


function teenager(age) {
  var teenager = 'age'>=13 && 'age'<=19;
if(age>=13 && age<=19) {
  console.log('You are a teenager!');
}else {
  console.log('You are not a teenager.');
}
}
teenager(20);



function ageChecker(age) {
  var ageChecker = 'age'>=13 && 'age'<=19;
if(age>=13 && age<=19){
  console.log('You are a teenager!');
}else if(age <=12) {
  console.log('You are a kid');
} else if(age>19){
  console.log('You are a grown up.');
}
}
ageChecker(4);




function ternaryTeenager(age) {
var ternaryTeenager = 'age'>=13 && 'age'<=19;
return ternaryTeenager==='age'?'You are a teenager.':'You are not a teenager.';
}
ternaryTeenager(15);




function switchAge(age) {

}
