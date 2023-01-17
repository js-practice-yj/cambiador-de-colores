const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color"); 

btn.addEventListener("click", function(){
    let hexColor = "#";
    for (let i = 0; i < 6 ; i++) {
        hexColor += hex[getRamdonNumber()]
    } 

    // hacemos un ciclo "for" que se repita 6 veces para generar los 6 campos del hexadecimal...usamos hexColor += hex, para agregar el dato contenido en hexColor con el hex (por eso no se pone solo el "=" ya q si se pone hex sera el valor de hexColor, osea una asignacion).

    color.textContent = hexColor;
    //usamos este (textContent) como su nombre lo indica para editar el texto que tenemos contenido en dicho lugar, en este caso el texto que esta en nuestro span dentro del archivo de html...

    document.body.style.backgroundColor = hexColor; 
    //usamos este (document.body.style) para poder seleccionar el body y cambiar el estilo, luego agreagamos la propiedad aue queremos cambiar en este caso background
})

function getRamdonNumber(){
    return Math.floor(Math.random() * hex.length);
}

// return Math.floor(Math.random() * hex.length); ---(Math.floor)esto redondea hacia abajo el numero decimal (1.6 = 1 ) , y multiplicamos por el numero de items del array, por eso usamos .length, para asi asegurar que el numero que se genere este entre cero y el ultimo indice del array---