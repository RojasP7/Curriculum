// // 4 formas de impresion
// alert("HOLA MUNDO");
// console.log("HOLA DESDE LA CONSOLA");
// document.write("HOLA DESDE LA INTERFAZ")
// // swal.fire("HOLA DESDE SWEETALERT")
// Swal.fire({
//     title: "The internet",
//     text: "You clicked the button!",
//     icon: "error"
//   });

//VARIABLES Y TIPOS DE DATOS
const pi = 3.14; //decimal
const pull = 2.54;
var name = "Fabian Eduardo" //string
let edad = 23; //entero
var ver = true; //boolean
let fal = false; //boolean

//OPERADORES BASICOS

var suma = 5+2;
console.log(suma)
var var_uno = 10;
var var_dos = 5;
console.log(var_uno-var_dos);
console.log(var_uno*var_dos);
console.log(var_uno/var_dos);
console.log(var_uno%var_dos);

// OPERADORES DE COMPARACION
// = Asigancion
// == comparacion
// === estrictamente comparado ( valor y tipo de dato)
// > / >= / <= / < / <>

console.log("mi edad es: "+ edad);

function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        // imageHeight: 1500,
        showConfirmButton: false,
        timer: 2000
      });
}
function send_form(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    if(name.length == 0 || last_name.length == 0){
        Swal.fire({
        title: "Cajas de texto vacias",
        text: "Alguna de las cajas de texto esta vacia",
        icon: "error"
    });
        if( name.length == 0){
        document.getElementById("name").style.border = "2px solid red"
        }
        else{
        document.getElementById("name").style.border = "2px solid green"
        }
        if( last_name.length == 0){
        document.getElementById("last_name").style.border = "2px solid red"
        }  
        else{
        document.getElementById("last_name").style.border = "2px solid green"
        }   
}
else{
    document.getElementById("print").innerText = "su nombre es: "+ name + " "+ last_name;
}
}
