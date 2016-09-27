var name = prompt("Enter your name","name");
document.getElementById("name").innerHTML = name;

var father = prompt("Enter your father name","father");
document.getElementById("father").innerHTML = father;


var institute = prompt("Enter your institute name","institute");
document.getElementById("institute").innerHTML = institute;


var git =  parseInt (prompt("Enter your git percentage","git"));
document.getElementById("git").innerHTML = git;


var html = parseInt ( prompt("Enter your html5 percentage","html5"));
document.getElementById("html").innerHTML = html;


var css1 = parseInt( prompt("Enter your css1 percentage","css1"));
document.getElementById("css1").innerHTML = css1;



var css2 = parseInt ( prompt("Enter your father name","css2"));
document.getElementById("css2").innerHTML = css2;

var average = ( git + html + css1 + css2 ) / 4 ;
document.getElementById("average").innerHTML = average;

if (average >= 90){
    document.getElementById("grade").innerHTML = "A+";
}
else if  (average >= 80){
    document.getElementById("grade").innerHTML = "A";
  
}
else if  (average >= 70){
    document.getElementById("grade").innerHTML = "B+";
  
}
else if  (average >= 60){
    document.getElementById("grade").innerHTML = "B";
  
}
else if  (average >= 50){
    document.getElementById("grade").innerHTML = "C";
  
}
else {
    document.getElementById("grade").innerHTML = "Fail";
}
