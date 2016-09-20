var name,city,gender;
name = prompt("enter your name","name");
city = prompt("enter your city","city");
gender = prompt("enter your gender","gender");
if ( city === "karachi" || gender === "male"){
    alert( name + " congratulation your are selected");
}
else{
    alert("sorry u are discolify");
}