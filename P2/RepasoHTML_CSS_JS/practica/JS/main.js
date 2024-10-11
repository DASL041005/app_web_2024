//esto es un comentario de una linea

/*
esto es un comentario 
de varias lineas
*/

//alerta
//alert("Hola soy una alerta")

//variables
var nombre="Diego Soto"; 
let nombre2='Rodolfo el Reno'; 
let edad=20; 
let estatura=1.80; 
let logico=true;

//Mostrar en consola
console.log("Hola estoy en la consola");
console.log("Hola tengo "+edad+" años");

//mostrar en pantalla
document.write("Hola estoy en la pantalla <br>");
document.write("<h2>Hola tengo "+edad+" años</h2>");


//Mostrar en pantalla getElementById

let datos=document.getElementById("informacion");
datos.innerHTML="Hola este es el contenido de innerHTML"
datos.innerHTML+="<hr><h3>Hola este es el contenido de innerHTML</h3>"
datos.innerHTML+="<hr><h3>Mido: "+estatura+" metros </h3>"
datos.innerHTML`
     <br>
    <hr>
    <h1>
        Hola soy contenido de innerHTML mi nombre es: ${nombre}
        <br>y mi estatura es: ${estatura}
    </h1>`;

//condicionales
if (edad>=18) 
    datos.innerHTML+=`<hr> Soy mayor de edad <hr>`;
else
    datos.innerHTML+=`<hr> Soy menor de edad <hr>`;


//ciclos
for(let i=1;i<5;i++)
{
    datos.innerHTML+=`<hr><h3>For el numero es ${i}</h3>`
}


let i=1;
while (i<=5)
{
    datos.innerHTML+=`<hr><h3>while El numero es ${1}</h3>`
    i++;
}

i=1; 
do
{
    datos.innerHTML+=`<hr><h3>While El numero es ${i}</h3>`;
    i++;
}
while (i>5);


//funciones
//1.-  funcion que no recibe parametros y no regresa valor 
function suma1()
{
    let n1=2;
    let n2=3;
    let suma=n1+n2;
    datos.innerHTML=`<hr><h1>El resultado de la suma1 es: ${suma}</h1>`
}

suma1();

//2.-  funcion que no recibe parametros y regresa valor 
function suma2()
{
    let n1=2;
    let n2=3;
    let suma=n1+n2;
    return suma; 
}

let sum=suma2();
datos.innerHTML=`<hr><h1>El resultado de la suma2 es: ${suma}</h1>`

//3.-  funcion que recibe parametros y no regresa valor 
function suma2(numero1,numero2)
{
    let n1=numero1;
    let n2=numero2;
    let suma=n1+n2;
    datos.innerHTML=`<hr><h1>El resultado de la suma3 es: ${suma}</h1>`
}

suma3=(3,4);

//4.-  funcion que recibe parametros y regresa valor 
function suma4(numero1,numero2)
{
    let n1=numero1;
    let n2=numero2;
    let suma=n1+n2;
    return suma;
}

sum=suma4(4,4);
datos.innerHTML=`<hr><h1>El resultado de la suma4 es: ${sum}</h1>`

//arreglos
let animales=[];
animales[0]="perro";
animales[1]="gato";
animales[3]="ave";

let animales2=["tigre","leon","elefante"];

for(let i=0;i<animales.length;i++)
{
    datos.innerHTML+=`<hr><h1>El animal es: ${animales[i]}</h1>`;
}

animales2.forEach(animales2 => {
    datos.innerHTML+=`<hr><h1>El animal es: ${Element}</h1>`
});