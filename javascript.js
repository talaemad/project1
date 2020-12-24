alert('Welcome!');
var name= prompt('please enter your name');

var gender = prompt('please enter (f) if you are fmale and (m) if you are male');
if (gender=='f'){
    document.write('<p> <b> Madam '+name+'</b> </p>');
}
else if (gender=='m'){
    document.write('<p> <b> Sir '+name+'</b> </p>');
}
document.write('<p> We are happy that you chose us and we hope that you have a good day with a good experience.</p>' )

// the new addedd 24Dec
var number= prompt('how many time you would like to see the view of our resturent');

while(number == null || number == ''){
 number= prompt('how many time you would like to see the view of our resturent');
}
var addpic=''
for (i=1; i <= number;i++){
addpic=addpic+'<p>'+i+'<img src="download.jpeg"width="200" height="200">'+'</p>';
}
document.write(addpic);