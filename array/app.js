// var arry1 = ["one", "two","three","four","five"];
// var arry2 = ["three","four","two","five","one"];
// var arry3 = ["one","four","three", "two","five"];
// var blank = [];

// for(var i=0; i<=arry1.length; i++){

//     if(blank.indexOf (arry1[i])== -1){
//         blank.push(arry1[i]);
//     }
// }
// // document.write(blank);
// for(var j=0; j<=arry2.length; j++){

//    if(blank.indexOf (arry2[i])== -1){
//         blank.push(arry2[i]);
//     }
// }
// // document.write(blank);

// for(var k=0; k<=arry3.length; k++){

//      if(blank.indexOf (arry1[i])== -1){
//         blank.push(arry1[i]);
//     }
// }

// for(var l=0; l<=blank.length; l++){


// }

// console.log();
// document.write(blank);

// var arr = [];

// do {
//     var a = prompt("enter a value");
//     if (a !== 'no') {
//         arr.push(a);
//     }
// } while (a !== 'no')

// document.write(arr);

// var arr = [];

// for (; ;) {
//     var a = prompt("enter a value");
//     if (a == 'no') {
//         break;
//     } else {
//         arr.push(a);
//     }
// }
// document.write(arr);



// var array = [];
// for(; ;){
//     var a = prompt("Enter value");
//     if(a == "no"){
//         break;
//     }
//     else{
//         array.push(a);
//     }
// }
// document.write(array);








// var ingrd1 = ["egg", "salt", "sugur"];
// var ingrd2 = ["water", "sugur", "milk"];
// var ingrd3 = ["flour", "milk", "sugur"];
// var allingrd = [];
// function mergeArray(ingr1, ingr2, ingr3) {
//     for (var i = 0; i <ingr1.length; i++) {
//         if (allingrd.indexOf(ingr1[i]) == -1) {
//             allingrd.push(ingr1[i]);
//         }
//     }

//     for (var i = 0; i < ingr2.length; i++) {
//         if (allingrd.indexOf(ingr2[i]) == -1) {
//             allingrd.push(ingr2[i]);
//         }
//     }

//     for (var i = 0; i < ingr3.length; i++) {
//         if (aallingrd.indexOf(ingr3[i]) == -1) {
//             allingrd.push(ingr3[i]);
//         }
//     }
// }
// console.log(allingrd);

// mergeArray(ingrd1.ingrd2, ingrd3);



// function time(){

//     alert("welocme to javascript");
// }
// setInterval(time,3000);

// setTimeout(time,4000);


// var hr = 0;
// var min = 0;
// var sec;
// function time(){

//   sec = document.getElementById("first").innerHTML = setTimeout(time,1000);


// }
// document.write(time());


//   var hr = 0; 
//     var min =0;
//     var sec;
// function stopwatch (){

//     sec = setTimeout(time,1000);
// }
// document.write(stopwatch());


// var arr1 = ["one","two","three","four","five"];
// var arr2 = ["two","five","one","four","three"];
// var arr3 = ["three","one","two","four","five"];
// var empty = [];
// for(var i=0; i<=arr1.length; i++){
//     if(empty.indexOf(arr1[i]==-1)){
//         empty.push(arr1[i]);
//     }
// }
// for(var i=0; i<=arr2.length; i++){
//     if(empty.indexOf(arr2[i]==-1)){
//         empty.push(arr2[i]);
//     }
// }
// for(var i=0; i<=arr3.length; i++){
//     if(empty.indexOf(arr3[i]==-1)){
//         empty.push(arr3[i]);
//     }
// }
// document.write(empty);


// var array1 = [];
// var array2 = [];
// var array3 = [];
// for(var i = 0; i < 5; i++ ){
//     var a = prompt("Enter 5 elements");
//     array1.push(a);
  
// }
//   document.write("First 5 elements are "+"<br>" + array1);
//   "<br>"
// for(var i = 0; i < 5; i++ ){
//     var b = prompt("Enter 5 elements");
//     array2.push(b);
   
// }
//  document.write("second 5 elements are "+"<br>" + array2);

// "<br>"
// for(var i = 0; i < 5; i++ ){
//     var c = prompt("Enter 5 elements");
//     array3.push(c);
   
// }
//  document.write("third 5 elements are "+"<br>" + array3);
// var empty = [];
// for(var i =0 ; i<array1.length; i++){
//     if(empty.indexOf(array1[i])==-1){
//         empty.push(array1[i]);
//     }
// }
// for(var j=0; j<=array2.length; j++){
//     if(empty.indexOf(array2[i])==-1){
//         empty.push(array2[i]);
//     }
// }
// for(var k=0; k<array3.length;k++ ){
//     if(empty.indexOf(array3[i])==-1){
//         empty.push(array3[i])
//     }
// }
// document.write("Arraging elemnts are"+"<br>"+empty);

var array = [];
for(var i=0; i<10;i++){
     var a = prompt("Enter your values");
    array.push(a);
    document.write(array);
}


