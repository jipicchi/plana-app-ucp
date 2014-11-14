var Lugar = require('../entidades/lugar.js');
var LugarNegocio=(function(){
    var self=Object.create({});


        self.listado=function(){
          var lista=[];
                 for (i=0;i<100;i++){
		
		             var ent=new Lugar("Lugar N° " + i);
                     //ent.setNombre("Evento N° "+ i);
                     ent.setId(i);
		             lista.push(ent);
                }
                     return lista;
        }
     
self.buscar = function(palabras){
    var entidadesFiltradas = [];
    //Obtiene la lista de un metodo que devuelve todos los objetos sin filtrar
    var lista = self.listado();
    var l = null;
    
    for (var i = 0; i<lista.length; i++) {
        l = lista[i];
        if (l.getNombre().indexOf(palabras) > -1) {
            entidadesFiltradas.push(l)
        };
    };

    return entidadesFiltradas;
        
}   



self.obtener = function(id){
    
   
    var lista = self.listado();
    var l = null;
    
    for (var i = 0; i<lista.length; i++) {
        l = lista[i];
        if (l.getId() == id) {
            return l;
        };
    };

    return null;
        
        }   



     return self;
});





module.exports=LugarNegocio;