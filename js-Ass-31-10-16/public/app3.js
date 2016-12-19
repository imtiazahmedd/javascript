var i,j,k,s;
var sym = prompt("Enter any symbol");
var no = prompt("Enter no of rows");
if(no%2==0){
    no++;
    document.write("The number of rows is changed to make a true diamand " + no);
}
document.write("<center>");
s = (no/2)+1;
for(i=1; i<=(no/2)+1; i++){
    
    for(j=1; j<=s; j++)
    {
        document.write(" ");
    }
    s--;
    
    for(k=1; k<=(2*i)-1;k++){
    document.write(sym);
}
document.write("<br>")
}
s=2;
for(i=(no/2);i>=1; i--){
    
    for(j=1; j<=s; j++){
        document.write(" ");
    }
    s++;
    for(k=1; k<=(2*i)-1;k++){
        document.write(sym);
    }
    document.write("<br>");
}

document.write("</center>");
























































   