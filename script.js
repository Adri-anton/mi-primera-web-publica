const boton=document.getElementById("botonSaludo");
const mensaje=document.getElementById("mensaje");
boton.addEventListener("click", function() {
    mensaje.textContent="¡Enhorabuena! Tu primera web ya es interactiva";
});
