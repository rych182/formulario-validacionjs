function validar() {
	var nombre, apellidos, correo, usuario, clave, telefono, expresion;
	nombre = document.getElementById('nombre').value;//el value es para guadar su valor en cada variable
	apellidos = document.getElementById('apellidos').value;//el value es para guadar su valor en cada variable
	correo = document.getElementById('correo').value;//el value es para guadar su valor en cada variable
	usuario = document.getElementById('usuario').value;//el value es para guadar su valor en cada variable
	clave = document.getElementById('clave').value;//el value es para guadar su valor en cada variable
	telefono = document.getElementById('telefono').value;//el value es para guadar su valor en cada variable

	//Evaluar con expresiones regulares
	//Lo que esté dentro de los slash, ahí está dentro la expresión
	//Evaluar que lo primero que se ingrese es texto con "\w", luego @, luego un punto "\." y solo caracteres de la "a la z"

	expresion = /\w+@+\.+[a-z]/;

	if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave === "" || telefono === "") {
		alert("Todos los campos son obligatorios");
		return false;/*Hace que no envíe nada hasta que llene el campo*/
	}

	else if(nombre.length>30){
		alert("El nombre no debe tener mas de 30 caracteres");
		return false;
	}
	else if(apellidos.length>30){
		alert("Los apellidos no deben de tener mas de 30 caracteres");
		return false;
	}
	else if(correo.length>30){
		alert("El correo no debe tener mas de 30 caracteres");
		return false;
	}
	else if(!expresion.test(correo)){//Aquí evalúo la variable "expresion" 
		//que coreo cumpla con la expresión regular que se almaceno en la variables expresion
		alert("El correo no es válido");
		return false;
	}
	else if(usuario.length>20 || clave.length>20){
		alert("El usuario y la clave no deben tener mas de 20 caracteres");
		return false;
	}
	else if(telefono.length>30){
		alert("El telefono no debe tener mas de 10 caracteres");
		return false;
	}
	else if (isNaN(telefono)) {//isNaN es para verificar si no es un número
		alert("El teléfono ingresado no es un número")
		return false;
	}

}

