self.buscarLugar = function(palabras){
	var entidadesFiltradas = [];
	//Obtiene la lista de un metodo que devuelve todos los objetos sin filtrar
	var lista = self.listado();
	var l = null;
	
	for (var i = 0; i<lista.length; i++) {
		l = lista[i];
		if (e.getNombre().indexOf(palabras) > -1) {
			entidadesFiltradas.push(l)
		};
	};

	return entidadesFiltradas;
}	

module.exports = entidadesFiltradas;