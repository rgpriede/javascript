'use strict'
// JASONplaceholder ( servicio cloud test )
window.addEventListener('load', ()=>{
	
	//alert("carga");
	// fetch peticiones apis rest
	var div_usuarios = document.querySelector('#usuarios');
	var div_comentarios = document.querySelector('#comentario');
	getUsuarios()
		.then(data => data.json())
		.then(data => {
			//console.log(usuarios);
			listaUsuarios(data);
			return getComment();
		})
		.then(data => data.json())
		.then(coment=>{
			listaComentarios(coment);
			return getPhotos();
		})
		.then(data =>data.json())
		.then(photo=>{
			listaPhotos(photo);
		})
		.catch(error => {
			console.log(error+'<<<<<');
		});
		
	function getUsuarios(){	
		return fetch('https://jsonplaceholder.typicode.com/users');
	};
	function getComment(){
		return fetch('https://jsonplaceholder.typicode.com/posts/1');
	};
	function getPhotos(){
		return fetch('https://jsonplaceholder.typicode.com/photos');	
	};

	function listaUsuarios(usuarios){
		usuarios.map((users,i)=>{
			let nombre= document.createElement('h3');
			nombre.innerHTML = i +" "+ users.name +" / "+users.username;
			div_usuarios.appendChild(nombre);
			document.querySelector('.loading').style.display='none';
		});
	};
	function listaComentarios(comentario){
		
		let nombre= document.createElement('h3');
		nombre.innerHTML = "Título: "+comentario.title +"\n"+"Contenido: "+comentario.body;
		div_usuarios.appendChild(nombre);
		document.querySelector('.loading2').style.display='none';
		
	};
	function listaPhotos(photo){
		console.log(photo);
		let foto= document.createElement('a');
		console.log(foto);
		foto.href=photo.thumbnailUrl;
		div_usuarios.appendChild(foto);
		
	};
});