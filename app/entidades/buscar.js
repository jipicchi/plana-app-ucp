self.buscar = function(palabras){
	var entidadesFiltradas = [];
	//Obtiene la lista de un metodo que devuelve todos los objetos sin filtrar
	var lista = self.listado();
	var e = null;
	
	for (var i = 0; i<lista.length; i++) {
		e = lista[i];
		if (e.getNombre().indexOf(palabras) > -1) {
			entidadesFiltradas.push(e)
		};
	};

	return entidadesFiltradas;
}	

module.exports = entidadesFiltradas;