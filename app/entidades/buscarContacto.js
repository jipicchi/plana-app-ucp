self.buscarContacto = function(palabras){
	var entidadesFiltradas = [];
	//Obtiene la lista de un metodo que devuelve todos los objetos sin filtrar
	var lista = self.listado();
	var c = null;
	
	for (var i = 0; i<lista.length; i++) {
		c = lista[i];
		if (c.getNombre().indexOf(palabras) > -1) {
			entidadesFiltradas.push(c)
		};
	};

	return entidadesFiltradas;
}	

module.exports = entidadesFiltradas;