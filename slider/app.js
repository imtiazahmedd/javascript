

var count = 0;
var array = ['red', 'blue', 'green', 'brown' , 'yellow' , 'orange', 'darkblue', 'black'];

function slider() {
    setInterval (function () {
        document.getElementById('color').style.background = array[count];
        if(count == array.length-1){
            count = 0;
        }
        else{
            count++
        }
    }, 500)
     
}
slider();

