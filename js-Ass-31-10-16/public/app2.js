
var no = prompt("Enter a no","no");
var i,first,second,next;
first=0;
second=1;
for(i=0; i<no; i++){
    
    if(i<=1){
        next = i;
    }
    else{
        next = first+second;
        first = second;
        second = next;
    }
    document.write(next+"<br>");
}