/*
Realice un programa que registre la venta de bebidas diarias durante 7 días, las
cuales son introducidas a través del teclado por el usuario. A partir de los datos
registrados, el programa debe realizar las siguientes acciones desde un menú de
opciones:
1. Calcular el total de venta de los 7 días
2. Calcular la venta promedio
3. Indicar cuál fue el día (índice) con mayor venta
4. Indicar la cantidad de ventas pares totales
5. Salir del programa
*/
const prompt = require("prompt-sync")();//va junto con colocar npm install prompt-sync por terminal)
bebidas =[]
suma=0,
mayor=-1
cont=0

for (var i=0;i<7;i++){//0,1,2
    bebidas.push(parseInt(prompt("Ingrese bebida día:")))  
    suma = suma +bebidas[i];
    if (bebidas[i]>mayor){
        mayor= bebidas[i];
        indice= i+1;
    }
    if (bebidas[i]%2==0){
        cont=cont+1;
    }
}

do{
    console.log("***************************************************")
    console.log("**********             Menú              **********")
    console.log("***************************************************")
    console.log("1. Calcular el total de venta de los 7 días")
    console.log("2. Calcular la venta promedio")
    console.log("3. Indicar cuál fue el día (índice) con mayor venta")
    console.log("4. Indicar la cantidad de ventas pares totales")
    console.log("5. Salir del programa")
    opcion = parseInt(prompt("Ingrese su opcion: "))
    switch(opcion){
        case 1: console.log("La suma es:", suma); break
        case 2: console.log ("la venta promedio fue:", suma/(bebidas.length));break
        case 3: console.log("La mayor venta fue ", mayor, ", día ", indice);break
        case 4: console.log("La cantidad de pares de ventas fueron ", cont);break
        case 5: console.log("Muchas gracias por ejecutar el código");break
        default: console.log("El numero que ingresó no es parte del menú, vuelva a ingresar su opción"); break
    }
}while (opcion!=5)
