//alertas
alert("soy un mensaje de alerta");

//variables
let nombre="Su nombre"; //las let tienen un mayor rendimiento
var edad = 18;
console.log(nombre); //se puede ver en el navegador pero en pla parte de inspeccionar consola

//constante
const altura = 1.80; //siempre debe estar inicializada

//concatenar
let concatena = nombre + " " + altura;

//seleccionar elementos del dom (página)
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <h1>Soy ${nombre}</h1>
`;

//condiciones
if(edad >= 18){
    datos.innerHTML += "<h3>Eres mayor</h3>";
}else{
    datos.innerHTML += "<h3>Eres menor</h3>";
}

//bucles
for(let num=1; num <= 10; num++){
    datos.innerHTML +="<h3> es el número: "+num+"</h3>";
    //dato.innerHTML += `<h3> es el número: ${num}</h3>`;
}

//arrays
let nombres = ["mario","pepe","pedro"];

let divNombres = document.querySelector("#nombres");

divNombres.innerHTML = "<p>Listado de nombres</p><ul>";
nombres.forEach(nombre =>{
    divNombres.innerHTML += "<li>"+nombre+"</li>"
})
divNombres.innerHTML +="</ul>"

//funciones
const funcion = () => {

}

const informacion = (parametro1, parametro2) => {
    let misDatos = `
        <h3>Estos son mis datos</h3>
        <p>${parametro1}</p> y <p>${parametro2}</p>
    `;

    return misDatos;
}

console.log(informacion("valor 1","valor 2"));

//o imprimer en pantalla de la siguiente forma

const imprimir = () => {

    let datos = document.querySelector("#datos");
    datos.innerHTML = miInformacion("valor 1","valor 2");
}

imprimir();

//promesas
var saludo = new Promise((resolve,reject) => {
    setTimeout(() => {
        let saludo = "Hola";
        if(saludo){
            resolve(saludo);
        }else{
            reject("No saludar");
        }
    }, 2000);
});

saludo.then(resultado => {
    alert(resultado); //resolve
})//;
.catch(e => {
    alert(e); //reject
});

