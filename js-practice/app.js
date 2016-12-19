// ----------------chapter # 21 ----------------------



// var city = ["karachi","lahore","islambad"];
// var check = prompt("Enter your city name","name");
// check = check.toLowerCase();
// var flag = false;
// for(var i = 0; i<city.length; i++)
// {
//     if(check === city[i])
//     {
//         flag = true;
//         alert("It's one of the cleanest city");
//         break;
//     }
// }
// if(flag === false)
// {
//     alert("not cleanest city");
// }




//------------------chapter # 22 -------------------------



// var word = "boston";
// var firstchar = word.slice(0,1);
// firstchar = firstchar.toUpperCase();
// var remain = word.slice(1);
// remain = remain.toLocaleLowerCase();
// alert(firstchar+remain);


// var month = prompt("Enter a month name","month");
// var leng = month.length;
// if(leng>3)
// {
//     var strleng = month.slice(0,3);
//     strleng = strleng.toUpperCase();
//     alert(strleng);
// }

// var str = prompt("Enter some text string","string");
// var match = false;
// for(var i = 0; i<str.length;i++)
// {
//     if(str.slice(i,i+2)=== "  ")
//     {
//     match = true;
//     alert("double space found");
//     break;
//     }
// }
// if(match===false)
// {
//     alert("double space not found");
// }


 //var text = "i m imtiaz ahmed and my new name is also imtiaz ahmed i am the student of federal urdu university and my name is imtiaz ahmed ";

// for(var i = 0; i<text.length; i++)
// {
//     if(text.slice(i,i+12)==="imtiaz ahmed")
//     {
//         text = text.slice(0,i) + "ahmed siddique" + text.slice(i+12);
      
//     }
    
// }
// alert(text);

// var indexnum = text.indexOf("imtiaz ahmed");

// if(indexnum!==-1)
// {
//     text = text.slice(0,indexnum) + "ahmed siddique" + text.slice(indexnum);
// }
// alert(text);



//-----------------------chapter # 24 ---------------------

// var name = prompt("Enter your name");
// name = name.charAt(name.length-1);
// alert(name);

// var text = "my name is imtiaz ahmed !";
// for(var i=0; i<text.length; i++)
// {
//     if(text.charAt(i)==="!"){
//         alert("Exclimetery mark found");
//     }
// }



// var text = "my name is imtiaz ahmed and my name is imtiaz ahmed";
// text = text.replace(/imtiaz ahmed/g,"ahmed siddique");
// alert(text);

//-------------------chapter # 26 -------------------------


// var num = prompt("Enter a number");
// num = Math.random(num);
// alert(num);

// var num = prompt("Enter a number");
// num = Math.ceil(num);
// alert(num);

// var num = prompt("Enter a number");
// num = Math.floor(num);
// alert(num);


//-----------------chapter # 27 -----------------------------




// var random = Math.random()*15+1;
// random = Math.floor(random);
// alert(random);






//----------------------chapter # 30 --------------------------------


// var num = 123.43454;
// num = num.toFixed(3);
// alert(num);


//----------------------chapter # 31 ----------------------------------




// var first = new Date();
// alert(first);


// var second = new Date();
// var first = second.getDay();
// alert (first);


// var days = ["mon","tue","wen","Thus","friday","surduary","sun"];
// var now = new Date();
// var today = now.getDay();
// var real = days[today];
// alert(real);



//-----------------------chapter # 32 ------------------------------------


// var first = new Date();

// var last = first.getTime();

// alert(last);


//--------------------------chapter # 33 --------------------------------------


// var today = new Date();
// var domshdy = new Date("june 30",2035);
// var mstoday = today.getTime();
// var msdomshdy = domshdy.getTime();
// var msdiff = mstoday-msdomshdy;
// var ddiff = msdiff/(1000*60*60*24);
// var ddiff = Math.floor(ddiff);
// alert(ddiff);



// var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
//  var daysTillDoom = Mathfloor(msDiff / (1000 * 60 * 60 * 24));
//  alert(daysTillDoom);



//------------------------chapter # 34 ---------------------------------


// var d = new Date();
// d.getMilliseconds(678);
// alert(d);


//-------------------------chapter # 35 ------------------------------------


// function tellTime(){
    
//     var now = new Date();
//     var hr = now.getHours();
//     var min = now.getMinutes();
//     alert("current time :" + hr +":"+ min);
// }


// tellTime();



//--------------------chapter # 36 ------------------------------------


// var today = new Date();
// var doomsday = new Date("June 30, 2035");
// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();
// var msDiff = msDoomsday - msToday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// dDiff = Math.floor(dDiff);
// alert(dDiff);


// var d = new Date();
//  d.setFullYear(2001);
//  alert(d);

//------------------------- chapter # 39 & 40  --------------------------------


// var dayOfWeek = prompt("Enter day of week");
// if(dayOfWeek === "sat"){
//     alert("today is saturday")
// }
// else if(dayOfWeek === "fri"){
//     alert("today is friday");
// }
// else{
//     alert("not a day of week which we defined in code!");
// }

// var dayOfWeek = prompt("Enter day of week");
// switch(dayOfWeek){
//     case "fri":
//     alert("Today is firday");
//     break;
//     case "sat":
//     alert("today is saturday");
//     break;
//     default:
//     alert("not of the day of week which we defined in coding");
// }



//-------------------------chapter # 41 -------------------------------------

// for(var i=0; i<=3; i++){
//     alert(i);
// }


// var i=0;
// while(i<=3){
   
//     alert(i);
//      i++;
    
// }


// function add(one,two,three){
//     var addition = one+two+three;
//     alert(addition);
    
    
// }

// add(12,13,14)

// var city = prompt("Enter your city name","name");
// city = city.toLowerCase();
// var cleanest = ["karachi","lahore","islamabad"];
// for(var i=0; i<cleanest.length;i++)
// {
//     if(city.toLowerCase()=cleanest[i])
//     {
//         alert(city);
//     }
// }



// var text = "bOsTon";
// var firstChar = text.slice(0,1);
// var otherChar = text.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();
// text = firstChar+otherChar;
// alert(text);





// var text = prompt("Enter a string"); var firstChar = text.slice(0,1);
//  var otherChar = text.slice(1);
//  firstChar = firstChar.toUpperCase();
//  otherChar = otherChar.toLowerCase();
//  text = firstChar+otherChar;
//  alert(text);



// var month = prompt("Enter month name");
// var threeChar = month.slice(0,3);
// var otherChar = month.slice(3);
// threeChar=threeChar.toUpperCase();
// otherChar = otherChar.toLowerCase();
// alert(threeChar+otherChar)


// var text = prompt("Enter a text string");
// for(var i=0; i<text.length;i++)
// {
//     if(text.slice(i,i+2)==="  ")
//     {
//         alert("Double space found");
//     }
// }



//window.alert (' welcome to javascript ') 

// var name = "imtiaz";
// alert(name);
// name = "ahmed";
// alert(name);

// var nationality ;
// nationality = "pakistani";
// alert(nationality);


// var weight = 150;
// weight = weight+25;
// alert(weight);

// var original = 23;
// var total = original+7;
// alert(total);

// var original = 12;
// var newnum = 22;
// var total = original + newnum;
// alert(total);


// var original = 90;
// original = 90+123;
// alert(original);


// var original = "23";
// original = original+7;
// alert(original);


// alert(122);


// var nun = 10;
// var popularNum = nun+200;
// alert(popularNum);

// alert(20%6);

// var num = (2+2);
// alert(num);


// var num = 1;
// var newnum = --num;
// alert(newnum);

// var name = prompt("Enter your name");
// var thank = "thanks ";
// var str = "!";
// alert(thank+name+str);

//alert("2"+"2");



// var noofcats = +prompt("Enter no of cats");
// var too = noofcats+1;
// alert(too);
// var x = prompt("sonthing");
// if(x==="vatican")
// alert("congratualtion");



// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
// alert(cities[3]);


// var cityToCheck = prompt("Enter");
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

//  if (cityToCheck === cleanestCities[0]) {
//  alert("It's one of the cleanest cities");
//  }
//  else if (cityToCheck === cleanestCities[1]) {
//  alert("It's one of the cleanest cities");
//  }
//  else if (cityToCheck === cleanestCities[2]) {
//  alert("It's one of the cleanest cities");
//  }
//  else if (cityToCheck === cleanestCities[3]) {
//  alert("It's one of the cleanest cities");
//  }
//  else if (cityToCheck === cleanestCities[4]) {
//  alert("It's one of the cleanest cities");
//  }

//  else {
//  alert("It's not on the list");
//  }



// for(var i=0; i<30; i++){
//     document.write(i);
// }


// var city = prompt("Enter your city name");
// var cleanest = ["karachi","lahore","islamabad"];
// cleanest = cleanest.tolower();
// var matchfound = false;
// for(var i=0; i<cleanest.length;i++)
// {
//     if(cleanest.tolower()===cleanest[i]){
//         matchfound = true;
//         alert(city);
//         break;
//     }
// }

// if(matchfound===false){
//     alert("not cleanest");
// }


// var name = prompt("Enter your name","name");
// var firstChar = name.slice(0,1);
// var remain = name.slice(1);
// firstChar = firstChar.toUpperCase();
// remain = remain.toLowerCase();
// alert(firstChar+remain);


// var month = prompt("Enter month");
// var len = month.length;
// if(len>3){
//     var first = month.slice(0,3);
//     var remain = month.slice(3);
//     first = first.toUpperCase();
//     remain = remain.toLowerCase();
// }
// alert(first+remain);


// var text = prompt("Enter a string");
// for(var i=0; i<text.length;i++){
//     if(text.slice(i,i+2)==="  ")
//     {
//         alert("double space found");
//         break;
//     }
//     else{
//         alert("double space not found");
//         break;
//     }
// }

// var name = "my name is imtiaz ahmed!";
// for(var i=0; i<name.length;i++)
// {
//     if(name.charAt[i] ==="!")
//     {
//         alert("Exclimetery mark found");
//         break;
//     }
// }


// var text = "my name is imtiaz ahmed and i the student of urdu university and i m imtiaz ahmed";
// text = text.replace(/imtiaz ahmed/g,"ahmed siddique");
// alert(text);
//alert(Math.round(1.5));


// var bigDecimal = Math.random();
//  var improvedNum = (bigDecimal * 6) + 1;
//  var numberOfStars = Math.floor(improvedNum);
//  alert(numberOfStars);
// var total = 12.2233;
// total = total.toFixed();
// alert(total);


// var days = ["Monday","Tuesday","Wednesday","Thusday","Friday","Saturday","Sunday"];
// var now = new Date();
// var day = now.getDay();
// var nameOfDay = days[day];
// alert(nameOfDay);


// var d = new Date();
// var all = d.getTime();
// alert(all);

// var today = new Date();
// var doomsday = new Date("June 30, 2035");
// var msToday = today.getTime();
//  var msDoomsday = doomsday.getTime();
//  var msDiff = msDoomsday - msToday;
//  var dDiff = msDiff / (1000 * 60 * 60 * 24);
//  dDiff = Math.floor(dDiff);
//  alert(dDiff);




// var d = new date();
// d.setFullyear(2001);
// alert(d);


// var now = new Date();
// var min = now.getMinutes();
// var hr = now.getHours();
// alert("Time"+":"+hr+":"+min);

// function telltime()
// {
//     var now = new Date();
//     var hr = now.getHours();
//     var min = now.getMinutes();
//     alert("Time "+ hr + " : " + min );
// }

// telltime();


// function add(one,tow)
// {
//     var addition = one+tow;
//     alert(addition); 
// }

// var no1 = 12;
// var no2 = 14;
// add(no1,no2);

// function showMessage(one , tow , three){
//     alert(one+tow+three);
    
// }
// var month = "march";
// showMessage(month,"winning the price",3);

// var day = prompt("day of week enter");
// switch(day){
//     case "saturay":
//     alert("today is suturday");
//     break;
//     case "sunday":
//     alert("Today is sunday");
//     break;
//     case "monday":
//     alert("today is monday");
//     break;
//     default :
//     alert("shoot me now");
// }

// for(var i=0; i<=3;i++){
//     document.write(i);
// }

// "<br>"

// var i=0;
// while(i<=3){
//     document.write(i);
//     i++;
// }



// var i=0;
// do{
//     alert(i);
//     i++;
// }
// while(i<=3);


var i = prompt("Enter value");

for( i=0; i<=20; i=i+n){
    document.write(i);
}