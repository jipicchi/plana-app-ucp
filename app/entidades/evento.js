var Evento = (function(nombreInicial){
	var self = Object.create({});


	//Atributos y metodos Obcionales
	var nombre;
	self.getNombre=function (){
		return nombre;
	}
    self.setNombre=function (valor){
		nombre=valor;
	}

	var contactos;
	self.getContactos=function (){
		return contactos;
	}
    self.setContactos=function (valor){
		contactos=valor;
	}
	
	self.setNombre(nombreInicial);

	return self;
});

module.exports = Evento;