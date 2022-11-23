// /* Implementar una función que devuelva un valor entero ingresado por 
//  teclado y este debe estar comprendido entre un límite superior y otro
//   inferior, dichos límites se ingresarán como parámetro. */
// function numero(a,b){
//    let x=false;
//     while (x==false){
//        let num;
//        num=parseInt(prompt("ingrese un valor"));
//        if (num>=a && num<=b){
//         document.write(`el valor es ${num}`)
//         x=true;
//        }
//    }
// }
//  numero(1,10);

// // ------------------------------------------------------------------------------------------------------
// // ------------------------------------------------------------------------------------------------------

// // -------------  -           -   --      -      -----  --------      ------       --       -   
// //       --       -           -   - -     -    -            -        -       -     - -      - 
// //       --       -           -   -  -    -   -             -      -          -    -  -     - 
// //    --------     -         -    -   -   -  -              -     -            -   -   -    - 
// //       --        -         -    -    -  -   -             -      -          -    -    -   - 
// //       --         -       -     -     - -    -            -        -       -     -     -  - 
// //       --          -------      -      --      ------  -------      ------       -      --- 

// // ------------------------------------------------------------------------------------------------------
// // ------------------------------------------------------------------------------------------------------
// // EJERCICIO 1_____________________________________________________________
// //       Escribir el encabezado de las funciones apropiadas para resolver los siguientes problemas.
// //       Identificar, para cada función, cuáles son los parámetros, cuál es el tipo de cada parámetro y
// //       cuál es el tipo de retorno.
// //       a. Dados dos enteros, calcular su suma.
// //       b. Dados dos enteros, decir si son iguales.
// //       c. Ingresar tres parámetros por teclado y pasarlos como argumentos a una
// //       función que devolverá el menor de ellos
// //       d. Dados 3 enteros, calcular el promedio de los tres.

// //       a. Dados dos enteros, calcular su suma.
// function sumar_y_mostrar(num) { 
   
//    resultado = (num + num);
//    document.write("EL RESULTADO ES "+ resultado);
// }
// num=parseFloat(prompt("ingrese un numero"));
// sumar_y_mostrar(5);
// // "num" corresponde al parametro, es un parametro tipo POR REFERENCIA 

//       // b. Dados dos enteros, decir si son iguales.
// function enteros(num1,num2){
//    if(num1==num2){
//       alert("los numeros son iguales ");
//    }else{
//       alert("los numeros NO SON iguales ");
//    }
// }
// num1=parseFloat(prompt("ingrese un numero"));
// num2=parseFloat(prompt("ingrese otro numero"));
// enteros(num1,num2);
// // num1 y num2 corresponden a los parametros, son del tipo por referencia. 

//       // c. Ingresar tres parámetros por teclado y pasarlos como 
//       // argumentos a una función que devolverá el menor de ellos

// function menor (num1,num2,num3){
//    if(num1<num3 & num1<num2){
//       return num1
//    }
//    if(num2<num3 & num2<num1){
//       return num2
//    }
//    if(num3<num2 & num3<num1){
//       return num3
//    }
// }
// num1=parseFloat(prompt("ingrese un numero"));
// num2=parseFloat(prompt("ingrese otro numero"));
// num3=parseFloat(prompt("ingrese otro numero"));
// menor(num1,num2,num3);
// alert(menor(num1, num2, num3)+" es el numero menor")

//       // d. Dados 3 enteros, calcular el promedio de los tres.

// function media (num1,num2,num3){
//    suma=num1+num2+num3;
//    med=suma/3;
//    return med;
// }
// num1=parseFloat(prompt("ingrese un numero"));
// num2=parseFloat(prompt("ingrese otro numero"));
// num3=parseFloat(prompt("ingrese otro numero"));
// media(num1,num2,num3);
// console.log((media(num1,num2,num3)+" es la Media"));

// // ------------------------------------------------------------------------------------------------------
// // ------------------------------------------------------------------------------------------------------
// // EJERCICIO 2_____________________________________________________________
// //  Implementar una función que devuelva un valor entero ingresado por teclado y
// // este debe estar comprendido entre un límite superior y otro inferior, dichos límites se
// // ingresarán como parámetro.

// function numEntero (num, lim1,lim2){
//       if (num>lim1 & num<lim2){
//             return("el numero "+ num +" esta dentro de los limites "+ lim1 + " - "+ lim2)
//       }else{
//             return("el numero "+num+" NO esta dento de los limites " + lim1 + " - "+ lim2)
//       }
// }
// num=parseFloat(prompt("ingrese un numero"));
// lim1=parseFloat(prompt("ingrese LIMITE inferior"));
// lim2=parseFloat(prompt("ingrese LIMITE Superior"));
// document.write( numEntero(num,lim1,lim2));

// // ------------------------------------------------------------------------------------------------------
// // ------------------------------------------------------------------------------------------------------
// // EJERCICIO 3_____________________________________________________________
// // Determinar el porcentaje de mujeres que ingresaron a la carrera Tecnicatura
// // Superior en Desarrollo de aplicaciones Web y App, para ello determinar que valores son
// // necesarios mandar por parámetros a la función, teniendo en cuenta que la función debe
// // retornar el porcentaje.

// function porcentaje(){
//       return (((totalMujeres*100)/totalAlumnos));
// }
// totalAlumnos=parseFloat(prompt("ingrese el TOTAL de Alumnos inscriptos. "));
// totalMujeres=parseFloat(prompt("ingrese la cantidad de mujeres inscriptass"));
// alert(porcentaje(totalAlumnos,totalMujeres)+"% de mujeres inscriptas. ");

// ------------------------------------------------------------------------------------------------------
// // ------------------------------------------------------------------------------------------------------
// // EJERCICIO 4_____________________________________________________________
// // Escribir un programa que emule una calculadora de operaciones básicas. Para
// // ello implemente una función para cada operación (suma, resta, multiplicación y división) que
// // retorne el resultado

// function suma(){
//       return var1+var2;
// }
// function resta(){
//       return var3-var4;
// }
// function div(){
//       if (var6 != 0){
//             return var5/var6;
//       }else{
//             return "no se puede dividir por cero";
//       }
// }
// function mult(){
//       return var7*var8;
// }
// var oper;
// num1=parseFloat(prompt("ingrese Primer numero"));
// num2=parseFloat(prompt("ingrese SEGUNDO numero"));
// oper=prompt("ingrese la operacion que quiere realizar : suma, resta, multiplicación y división")
// switch (oper) {
//       case oper="suma": 
//             var1=num1;
//             var2=num2;
//             alert(suma(var1,var2));
//       case oper="resta": 
//             var3=num1;
//             var4=num2;   
//             alert(resta(var3,var4));
//       case oper="multiplicacion": 
//             var5=num1;
//             var6=num2;   
//             alert(mult(var5,var6));
//       case oper="division": 
//             var7=num1;
//             var8=num2; 
//             alert(div(var7,var8)); 
// }

