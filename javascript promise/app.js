// ------------------- promise  -------------------------------- 

// var newImtiazStore = function(){
//     return new Promise(function (resolve,reject) {
//         var a = prompt("Please Enter Your name:","");
//         if (a == ""){
//             reject(alert("Please Write Something"));
//         }
//         else{
//             resolve(a);
//         }
//     })
// }
// newImtiazStore().then(function(a){
//     alert(a+" Your good");
// }).catch(function(a){
//     alert("your bad");
// })


//--------------------------promise.all method ------------------------



// var realImtiaz = function() {
//     return new Promise(function (resolve,reject) {
//         var a = true;
//         if (a){
//             resolve("This is Good");
//         }
//         else{
//             reject("am busy");
//         }
//     });
// };

// var supperMart= function() {
//     return new Promise(function (resolve,reject) {
//         var a = true;
//         if (a){
//             resolve("This is Good");
//         }
//         else{
//             reject("am busy");
//         }
//     });
// };

// var sadr = function() {
//     return new Promise(function (resolve,reject) {
//         var a = false;
//         if (a){
//             resolve("This is Good");
//         }
//         else{
//             reject("am busy");
//         }
//     });
// };

// Promise.all([realImtiaz(),supperMart(),sadr()]).then(function(a){
//     document.write("<h1>all off them</h1>");
// }).catch(function(a){
//     document.write("<h1>waiting Some One</h1>");
// });

 
 
 // ----------------------promise.race method -------------------------



// var realImtiaz = function() {
//     return new Promise(function (resolve,reject) {
//         var a = true;
//         if (a){
//             resolve("This is Good");
//         }
//         else{
//             reject("am busy");
//         }
//     });
// };

// var supperMart= function() {
//     return new Promise(function (resolve,reject) {
//         var a = true;
//         if (a){
//             resolve("This is Good");
//         }
//         else{
//             reject("am busy");
//         }
//     });
// };

// Promise.race([realImtiaz(),supperMart(),sadr()]).then(function(a){
//     document.write("<h1>all off them</h1>");
// }).catch(function(a){
//     document.write("<h1>waiting Some One</h1>");
// });






