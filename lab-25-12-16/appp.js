
var arr = [];
   // press Enter coding
function functioncheck(){
    if(event.keyCode ==  '13'){
    myfunction();
    }
}     


//----------------form validation code ---------------------


function checkname(){
     txtname = document.getElementsByClassName('form-control')[0].value;
       if(txtname == '' || !isNaN(txtname)){
        document.getElementById('demo').innerHTML = 'Please Enter your name'; 
        
    }
   else{
       document.getElementById('demo').style.display= "none";
       myfunction();
   }
}
 
function checkemail(){
     var txtemail = document.getElementsByClassName('form-control')[1].value;
     var emailValid = document.forms["myForm"]["email"].value;
     var at = emailValid.indexOf("@");
     var dot = emailValid.indexOf(".");
     if(txtemail == ''){
        document.getElementById('demo').innerHTML  = 'Please Enter your email';
       }
       else if(at<1 || dot< at+2 || dot+2>=emailValid.length){
        document.getElementById('demo').innerHTML = 'example@gmail.com';
        }
       else{
        document.getElementById('demo').style.display= "none";
        myfunction();
    }
}

function checkpassword(){
     txtpassword = document.getElementsByClassName('form-control')[0].value;
     if(txtpassword == ''){
       document.getElementById('demo').innerHTML  = 'Please Enter your password';
    }
   else{
       document.getElementById('demo').style.display= "none";
       myfunction();
   }
}
      //  main function get data from input field
     
function myfunction() {
     
     txtname = document.getElementsByClassName('form-control')[0].value;
     txtemail = document.getElementsByClassName('form-control')[1].value;
     txtpassword = document.getElementsByClassName('form-control')[2].value;
      var obj = {name :  txtname, email : txtemail , Password : txtpassword};
      arr.push(obj);       
     if(txtname == ""){
         checkname();
     }          
     if(txtemail == ""){
         checkemail();
     }
     else{
     window.location.href = ('./login.html');
    }
    // local storage code
console.log(arr);
localStorage.setItem("data", JSON.stringify(arr));
// localStorage.setItem("Name", txtname);
// localStorage.setItem("Email", txtemail);
// localStorage.setItem("Password", txtpassword);
}




// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function loginfunction() {
    window.location.href = login.html;
}