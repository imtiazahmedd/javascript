
loop1:
for (var i = 0; i < 5; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (var j = 0; j < 5; j++) {   //The second for statement is labeled "loop2"
      if (i === 3 && j === 3) {
         continue loop1;
      }
      document.write("i = " + i + ", j = " + j + "<br>");
   }
}