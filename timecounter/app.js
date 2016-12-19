// function countdown() {
//     var now = new Date();
//     var eventDate = new Date(2016,11,7);
//     var currentTime = now.getTime();
//     var eventTime =eventDate.getTime();
    
//     var remTime = eventTime-currentTime;
//     var s = Math.floor(remTime/1000);
    
//     var m = Math.floor(remTime/60);
  
//     var h = Math.floor(remTime/60);

//     var d = Math.floor(remTime/24);
 
    
    
//     h%24;
//     m%60;
//     s%60;
   
    
//     h=(h<10) ? "0" + h : h;
//     m=(m<10) ? "0" + m : m;
//     s=(s<10) ? "0" + s : s;
    
//     document.getElementById("days").textContent = d;
//      document.getElementById("days").innerText = d;
    
    
//      document.getElementById("hours").textContent = h;
     
//       document.getElementById("min").textContent = m;
      
//        document.getElementById("sec").textContent = s;
       
//  setTimeout(countdown,1000); 
     

// }
// countdown();


function showTime() {
    var a_p;
    var today = new Date();
    var current_hour = today.getHours();
    var current_minutes = today.getMinutes();
    var current_second = today.getSeconds();
    if(current_hour<12){
        a_p = "AM";
    }
    else{
        a_p = "PM";
    }  
    if(current_hour == 0){
        current_hour = 12;
    }
    if(current_hour > 12){
        current_hour = current_hour - 12;
    }
    current_hour = checktime(current_hour);
    current_minutes = checktime(current_minutes);
    current_hour = checktime(current_hour);
    
    document.getElementById("digital").innerHTML = current_hour + ": " + current_minutes + ": " + current_second +" "+  a_p;
    
    function checktime(i) {
        if(i<10){
            i = "0" + i;
        }
        return i;
    }
    
    
}
setInterval(showTime);




