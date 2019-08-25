var btnMenu = document.getElementById('btn-menu');//Variable que me almacena el id de btnMenu que esta dentro del span del html
var nav = document.getElementById('nav');//Variable que me almacena el id de nav del html
//El icono de menu pasa a ser variable y puede controlarse con javascript
btnMenu.addEventListener('click', function(){//Al hacer click en el icono del menu al nav se le va a agregar la clase mostrar
	nav.classList.toggle('mostrar');
})