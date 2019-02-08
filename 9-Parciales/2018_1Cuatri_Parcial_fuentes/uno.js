
function mostrar()
{
prompt ("escriba el ancho de un rectangulo");
prompt  ("escriba el largo de un rectangulo");
var dato1=parseInt(document.getElementById(ancho).value);
var dato2=parseInt(document.getElementById(largo).value);
var resultado1= dato1+dato1;
var resultado2= dato2+dato2;
var resultado3= resultado1+resultado2;

alert("su rectangulo tiene un perimetro de"+resultado3);

}
