/*
var gender = prompt('please enter (f) if you are fmale and (m) if you are male');
if (gender=='f'){
    document.write('<p> <b> Madam '+name+'</b> </p>');
}
else if (gender=='m'){
    document.write('<p> <b> Sir '+name+'</b> </p>');
}
document.write('<p> We are happy that you chose us and we hope that you have a good day with a good experience.</p>' )
*/

// the new addedd 24Dec

function alrt(msg) {
 alert(msg);
}
function validation(msg1) {
    var value1 = prompt(msg1);
    while(value1 === undefined || value1 === null || value1 === ''){
       value1 = prompt(msg1);
    }
    return value1;
}

alrt("Welcome to our page");
var uname=validation('please enter your name');
alrt("Hello "+uname)
var addpic=''
val=validation('how many time you would like to see the view of our resturent');

for (i=1; i <= val;i++){
 addpic=addpic+'<p>'+i+'<img src="download.jpeg"width="200" height="200">'+'</p>';
}
document.write(addpic);