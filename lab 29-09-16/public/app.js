var operator = prompt ("Enter an opator for operation two num","$(for root),+,-,*,/");
if (operator === "$"){
    var root = prompt("Enter num","root");
    root = Math.sqrt(root) ;
    document.write(root);
}
else if (operator ==="+") {
    var one = parseFloat (prompt("Enter 1st num","Enter first Integer"));
    var tow = parseFloat (prompt("Enter 2nd num","Enter second integer"));
    document.write(one+tow);
}
else if (operator ==="-") {
    var one = parseFloat (prompt("Enter 1st num","Enter first Integer"));
    var tow = parseFloat (prompt("Enter 2nd num","Enter second integer"));
     document.write(one-tow);
   
}
else if (operator ==="*") {
    var one = parseFloat (prompt("Enter 1st num","Enter first Integer"));
    var tow = parseFloat (prompt("Enter 2nd num","Enter second integer"));
     document.write(one*tow);
   
}
else if (operator ==="/") {
    var one = parseFloat (prompt("Enter 1st num","Enter first Integer"));
    var tow = parseFloat (prompt("Enter 2nd num","Enter second integer"));
     document.write(one/tow);
}
else{
    alert(Something_wrong);
}


