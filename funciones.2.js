// EJERCICIO 4_____________________________________________________________
// Escribir un programa que emule una calculadora de operaciones básicas. Para
// ello implemente una función para cada operación (suma, resta, multiplicación y división) que
// retorne el resultado

function suma(){
      return var1+var2;
}
function resta(){
      return var3-var4;
}
function div(){
      if (var6 != 0){
            return var5/var6;
      }else{
            return "no se puede dividir por cero";
      }
}
function mult(){
      return var7*var8;
}
var oper;
num1=parseFloat(prompt("ingrese Primer numero"));
num2=parseFloat(prompt("ingrese SEGUNDO numero"));
oper=prompt("ingrese la operacion que quiere realizar : suma, resta, multiplicación y división")
switch (oper) {
      case oper="suma": 
            var1=num1;
            var2=num2;
            alert(suma(var1,var2));
      case oper="resta": 
            var3=num1;
            var4=num2;   
            alert(resta(var3,var4));
      case oper="multiplicacion": 
            var5=num1;
            var6=num2;   
            alert(mult(var5,var6));
      case oper="division": 
            var7=num1;
            var8=num2; 
            alert(div(var7,var8)); 
}