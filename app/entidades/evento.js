var Evento = (function(nombreInicialE){
	var self = Object.create({});


	//Atributos y metodos Obcionales
	var nombreE;
	self.getNombre=function (){
		return nombreE;
	}
    self.setNombre=function (valor){
		nombreE=valor;
	}

	var contactos;
	self.getContactos=function (){
		return contactos;
	}
    self.setContactos=function (valor){
		contactos=valor;
	}
	
	self.setNombreE(nombreInicialE);

	return self;
});

module.exports = Evento;