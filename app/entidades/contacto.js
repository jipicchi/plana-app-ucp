var Contacto = (function(nombreInicial){
	var self = Object.create({});

var Contacto = function(nombre,apellido,numero){
     this.nombre = nombre;
     this.apellido = apellido;
     this.numero = numero;

}

	//Atributos y metodos Opcionales
	
	var nombre;
	self.getNombre=function(){
	    return nombre;
	}
	self.setNombre=function(valor){
	    nombre=valor;
	}
		
	var apellido;
	self.getApellido=function(){
	    return apellido;
	}
	self.setApellido=function(valor){
	    apellido=valor;
	}
	
	var numero;
	self.getNum=function(){
	    return numero;
	}
	self.setNum=function(valor){
	    numero=valor;
	}

	self.setNombre(nombreInicial);
	
	return self;
});
module.exports = Contacto;