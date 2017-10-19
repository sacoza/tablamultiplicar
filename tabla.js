var i=0;
var numero=parseInt(prompt('La tabla de multiplicar del:'));
document.write("<table border= '1'<tr><td>Número</td><td>Resultado</td></tr>")
while(numero>100){
  alert("ERROR");
  var numero=prompt('La tabla de multiplicar del:');
}

if(numero<=100){
for(i=0; i<=10; i++) {
document.write("<tr><td>"+ numero +" X " + i + "</td><td>" + numero * i  + "</td></tr>");
}

document.write("</table>");
};
