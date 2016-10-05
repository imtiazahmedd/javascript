var name = prompt("Enter your name","Name");
document.getElementById("id1").innerHTML = name;

var id = prompt("Enter your id","id");
document.getElementById("id2").innerHTML = id;

var father = prompt("Enter your father name","father");
document.getElementById("id3").innerHTML = father;


var html = parseInt(prompt("Enter your html percentage","html"));
document.getElementById("id4").innerHTML = html;
if (html>90){
    document.getElementById("id8").innerHTML = " A+";
}
else if (html>80){
    document.getElementById("id8").innerHTML = " A";
}
else if (html>70){
    document.getElementById("id8").innerHTML = " B";
}
else if (html>60){
    document.getElementById("id8").innerHTML = " c";
}
else{
    document.getElementById("id8").innerHTML = " fail";
}


var css1 = parseInt(prompt("Enter your css1 percentage","css1"));
document.getElementById("id5").innerHTML = css1;
if (css1>90){
    document.getElementById("id9").innerHTML = " A+";
}
else if (css1>80){
    document.getElementById("id9").innerHTML = " A";
}
else if (css1>70){
    document.getElementById("id9").innerHTML = " B";
}
else if (css1>60){
    document.getElementById("id9").innerHTML = " c";
}
else{
    document.getElementById("id9").innerHTML = " fail";
}


var css2 = parseInt(prompt("Enter your css2 percentage","css2"));
document.getElementById("id6").innerHTML = css2;
if (css2>90){
    document.getElementById("id10").innerHTML = " A+";
}
else if (css2>80){
    document.getElementById("id10").innerHTML = " A";
}
else if (css2>70){
    document.getElementById("id10").innerHTML = " B";
}
else if (css2>60){
    document.getElementById("id10").innerHTML = " c";
}
else{
    document.getElementById("id10").innerHTML = " fail";
}

var avg = (html + css1 + css2)/ 3;
document.getElementById("id7").innerHTML = avg;
if (avg>90){
    document.getElementById("id11").innerHTML = " A+";
}
else if (avg>80){
    document.getElementById("id11").innerHTML = " A";
}
else if (avg>70){
    document.getElementById("id11").innerHTML = " B";
}
else if (avg>60){
    document.getElementById("id11").innerHTML = " c";
}
else{
    document.getElementById("id11").innerHTML = " fail";
}
