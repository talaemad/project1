alert('Welcome!');
var name= prompt('please enter your name');
var gender = prompt('please enter f if you are fmale and m if you are male');
if (gender=='f'){
    document.write('<p> <b> Madam '+name+'</b> </p>');
}
else if (gender=='m'){
    document.write('<p> <b> Sir '+name+'</b> </p>');
}
document.write('<p> We are happy that you chose us and we hope that you have a good day with a good experience.</p>' )
