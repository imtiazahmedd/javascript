var num1 = parseInt (prompt("Enter 1st num","no1"));

var operation = prompt("Enter operator","+ , - , * , /");

var num2 = parseInt (prompt("Enter 2nd num","no2"));

if (operation == "+"){
    alert(num1+num2);
}
else if (operation == "-"){
    alert(num1-num2);
}

else if (operation == "*"){
    alert(num1*num2);
}
else if (operation == "/"){
    alert(num1/num2);
}
else{
    alert("something wrong");
}