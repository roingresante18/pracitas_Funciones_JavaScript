// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------A  R  R  A  Y-----------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
        // EJERCICIO 1_____________________________________________________________
        /*Declarar y cargar un array con los datos que contenga la cantidad 
        de accidentes de tránsito registrados cada mes del año 2020 
        de la República Argentina, mostrar datos por consola y por pantalla*/

let accidentes=[];
let meses=["enero","febrero","marzo","abril","mayo","junio","Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"];
// for(let x=0;x<12;x++){
//         num1=(prompt("Ingrese cantidad accidentes en "+ meses[x]))
//         num2=parseInt(num1)
//         accidentes[x]=num1;

// //        accidentes[x]=parseInt(prompt("Ingrese cantidad accidentes en "+ meses[x]));
// }
for(let x=0;x<12;x++){
//     document.write(`en ${meses[x]} se produjeron ${accidentes[x]} <br>`);
    console.log(`en ${meses[x]} se produjeron ${accidentes[x]}`);
}

// ------------------------------------------------------------------------------------------------------
        // EJERCICIO 2_____________________________________________________________
        // Declarar un vector que permita almacenar las temperaturas promedio, de la ciudad de
        // Posadas, correspondientes a la primera semana del mes de septiembre, mostrar el vector
        // resultante por consola, los datos serán ingresados por teclado.

// var tempProm=[];
// for(let x=1;x<=7;x++){
//         tempProm[x]=parseInt(prompt("Ingrese temperatura promedio del dia "+ x));
//         alert(" la temperatura promedio del dia "+ x+ " fue " + tempProm[x]+" C°"+"<br>");
// }


// ------------------------------------------------------------------------------------------------------
        // EJERCICIO 3_____________________________________________________________
        // Declarar y cargar un vector con 10 números enteros, y recorrerlo para sumar los números
        // pares, mostrar resultado por pantalla.

// var vector1=[];
// var var1=0;
// var suma=0;
// for(let x=0;x<=10;x++){
//         vector1[x]=parseInt(prompt("ingrese Numero"));
//         var1= vector1[x];
//         if(var1%2==0){
//             suma=suma+var1;
//         }
//         document.write(vector1[x]+"--");
// }
// document.write(" "+"<br>");
// document.write("suma de los numeros pares es "+ suma+"<br>");


// ------------------------------------------------------------------------------------------------------
        // EJERCICIO 4_____________________________________________________________
        // Calcular la media de las estaturas de una clase, sabiendo que la cantidad de alumnos es de
        // 25, declarar el vector, cargarlo. Luego deberá recorrerlo para obtener lo siguiente: cuántos
        // son más altos que la media y cuántos son más bajos que dicha media. Mostrar por pantalla
        // el vector y el los datos solicitados.

// var vector1=[];
// var var1=0;
// var suma=0;
// var conta=0;
// var conta2=0;
// var conta3=0;
// for(let x=0;x<=25;x++){
//         vector1[x]=parseInt(prompt("ingrese estatura en centimetros."));
//         suma=vector1[x]+suma;
//         conta=conta+1;
//         document.write(vector1[x]+"--");
// }
// prom=suma/conta;
// for(let x=0;x<=25;x++){
//     if(vector1[x]<prom){
//         conta2=conta2+1;
//     }else{
//         conta3=conta3+1;
//     }
// }
// document.write("--"+"<br>");
// document.write("los mas altos que la media " +prom+ " son de "+ conta3+"<br>");
// document.write("los mas bajos que la media " +prom+ " son de "+ conta2+"<br>");


// ------------------------------------------------------------------------------------------------------
        // EJERCICIO 5_____________________________________________________________
        // Declarar y cargar una matriz de 3x3 con los datos numéricos, para luego mostrar por
        // consola el resultado.
// ------------------------------------------------------------------------------------------------------
        // EJERCICIO 6_____________________________________________________________
        // Recorrer la matriz creada en el ejemplo anterior, sumar todos los números y mostrar por
        // pantalla.

// var numeros=[[],[],[]]
// var suma=0;
// for(let x=0; x<3; x++){
//     for(let y=0;y<3;y++){
//         numeros[x][y]=parseInt(prompt("ingrese numero"))
//         document.write(`${numeros[x][y]} `)
//         suma=suma+numeros[x][y];
//     }
//     document.write(`<br>`)
// }

// document.write("la suma de todos los valores de la matriz es "+suma);

// ------------------------------------------------------------------------------------------------------
// EJERCICIO 7_____________________________________________________________
        // Declarar una matriz de 4x4, cargarla. Luego recorrerla e identificar lo siguiente
        // a- Detecte el valor máximo y mínimo de la matriz.
        // b- Muestre por pantalla y conjuntamente con el numero de fila y columna al que
        // corresponde cada uno.

// var numeros=[[],[],[],[]]
// var suma=0;
// var mayor=0;
// var minimo=1000000;
// var j=0;
// var m=0;
// var l=0;
// var k=0;
// for(let x=0; x<4; x++){
//     document.write("<br>"+"fila  "+x+"--")
//     for(let y=0;y<4;y++){
//         numeros[x][y]=parseInt(prompt("ingrese numero"));
//         if (numeros[x][y]>mayor){
//             mayor=numeros[x][y];
//             j=x;
//             m=y;
//         }
//         if(numeros[x][y]<minimo){
//             minimo=numeros[x][y];
//             l=x;
//             k=y;
//         }
//         document.write(numeros[x][y] + "   |   ")
//     }
    
// }
// document.write("<br>")
// document.write("el valor maximo es "+mayor+" / ");
// document.write("fila "+j+" columna "+ m + "<br>")
// document.write("el valor minimo es "+minimo+ "/");
// document.write("fila "+l+" columna "+ k + "<br>")
