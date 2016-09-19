function firstfunction(){
    var x;
    if (confirm("click on button")==true){
        x = "you have clicked on button";
    }
    else{
        x= "you cancle on click ";
    }
    document.getElementById("first").innerHTML = x;
}