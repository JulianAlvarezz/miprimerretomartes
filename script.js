
//Ejercicio 1
/* 
const hijoDaniel = document.getElementById('hijoDaniel');
const hijoAlan =document.getElementById('hijoAlan');
//console.log(hijoDaniel);
//Nombre del hermano anterior
console.log(hijoDaniel.previousElementSibling.getAttribute("id")); //Devuelve el elemento anterior al hermano
console.log(hijoDaniel.nextElementSibling.getAttribute("id"));   //Devuelve el siguiente elemento a Daniel
console.log(hijoDaniel.parentElement.getAttribute("id"));        //Devuelve el padre de Daniel
console.log(hijoDaniel.parentElement.parentElement.getAttribute("id"));  //Devuelve el abuelo de 
*/
//Ejercicio 2
/* 
const papa = document.getElementById('padre');
console.log(papa.children);                                //Devuelve los hijo
console.log(papa.firstElementChild);                         //Devuelve el primer hijo
console.log(papa.lastElementChild);                          //Devuelve el ultimo hijo
console.log(papa.childElementCount);                          //Cuantos hijos tiene 
*/

//Ejercicio 3 -->   Nombre de seclectores  CSS
/* 
let anclaInicio =document.querySelector('#inicio');
console.log(anclaInicio);
let anclaInicio =document.querySelectorAll('.nav_link');
console.log(anclaInicio); 
let etiquetaNav =document.querySelector('nav');
console.log(etiquetaNav);
let anclaPortafolio = etiquetaNav.querySelector("#portafolio");
console.log(anclaPortafolio); 
*/

// Ejercio 3 --> Agrtegar style CSS
// elemento.style.propiedadCSS = "valor";
/* 
let titulo = document.getElementById( 'titulo' );
console.log(titulo);
titulo.style.background = "blue";
titulo.style.color="white";
titulo.style.padding="25px";
titulo.style.marginLeft="3rem";
titulo.style.borderLeft= "1rem solid red";
 */

//Ejercicio 4 -->   Acceder 
//document.getElementsByTagName("a")[0].click();
//obtener-elementos-por-etiqueta-nombre

//let anclas = document.getElementsByTagName("a");
/*
let anclas = Array.from(document.getElementsByTagName("a"));
console.log (anclas);
console.log(Array.isArray(anclas)); 
*/
//let anclas = document.getElementsByClassName("nav_link");
/* 
let anclas = Array.from(document.getElementsByClassName("nav_link"));
console.log (anclas);
console.log(Array.isArray(anclas)); 
 */
// ahora con el ID "El ID esta hecho para llamar elementos desde JS, de hecho nisiquiera los necesitamos llamar con get.element"
/* 
let anclaInicio =document.getElementById   ("inicio");
console.log (anclaInicio) ;
console.log (portafolio);
console.log (contacto); 
*/

//
/* const $titulo = document.getElementById('titulo');
console.log("$titulo.classList");
$titulo.classList.add("mt-5");
$titulo.classList.remove("bg-dark");
$titulo.classList.toggle("text-warning");
$titulo.classList.toggle("text-warning");

$titulo.addEventListener("click", ()=>{
    $titulo.classList.toggle("text-warning");
});
$titulo.classList.contains("bg-dark");
console.log($titulo.classList.contains("bg-dark")); */


// Crear etiquetas HTML desde JS 
// Agregar un atributo <e attr = "val"></e> (obtener) e.setAtrribute(), e.removerAtrribute(), (poner)e.getAttribute()
 /* const elementH2 =  document.createElement("h2");
 elementH2.setAttribute("id", "titulo");
 elementH2.setAttribute("class", "titulo");
 elementH2.removeAttribute("class");
//elementH2.getAttribute("id");
console.log(elementH2.getAttribute("id"));
//let valorId = elementH2.getAttribute("id");
//console.log(valorId);
console.log(elementH2.hasAttribute( "class" ) ); 
console.log(elementH2);*/

// Agregar Texto <e attr="val"> Hola, Mundo </e> ; e.tectContent  ; e.innerText

const elementH2 =  document.createElement("h2");
 elementH2.setAttribute("id", "titulo");
 elementH2.textContent= "Hola Mundo";
 elementH2.innerText="Adios Mundo"; // Cambia solo el text
 console.log(elementH2);
