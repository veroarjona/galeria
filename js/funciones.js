const enlaces = document.querySelectorAll(".galeria a"); //todos los enlaces que están dentro de galeria 
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechasModal = document.querySelectorAll(".modal button");
let imgActual = 0; //no importa que número poner porque el primer click que haga le va a dar valor a esa variable


//ABRIR MODAL
//hacer click en cualquiera de los enlaces(las imagenes) y ponerle la clase visible a la modal 
//evento preventdefault() para que no navegue, se puede hacer con for, foreach
//foreach no necesita que utiliza let porque ya está clausurandolo 

enlaces.forEach(function(enlace,indice){
	enlace.addEventListener("click", function(evento){
		evento.preventDefault();
		imgActual = indice;
		imgModal.setAttribute("src",enlaces[imgActual].getAttribute("href")); // sacamos el href de un lado (resuelve primero esa) y le inyectamos el src de otro (después puede ejecutar la exterior, que hace un cambio en el dom)
		modal.classList.add("visible");
	});
});

/*OPCIÓN CON IF PARA ABRIR
for(let i = 0; i < enlaces.length; i++){
	enlaces[i].addEventListener("click", function(evento){
		evento.preventDefault();
		modal.classList.add("visible");
	});
}
*/
	
//CERRAR MODAL
//hacer click en cualquier parte de la modal y quitarle la clase visible a la modal 
enlaces.forEach(function(){
	modal.addEventListener("click", function(){
		modal.classList.remove("visible")
	});
});


//NAVEGACIÓN IMÁGENES
flechasModal.forEach(function(flecha,indice){
	flecha.addEventListener("click", function(evento){
		evento.stopPropagation(); //addeventlistener en un evento padre e hijo, si es el mismo, al yo hacer click en el del hijo, también dispara el del padre, pones stop propagation para que se cierre el del hijo, que no suba 
		if(indice == 0){
			imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length -1; //anterior --> imagen actual es mayor a cero? si, -1, sino será el último valor posible 
		}else{
			imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0; //siguiente 
		}
		imgModal.setAttribute("src",enlaces[imgActual].getAttribute("href"));
	});
});






