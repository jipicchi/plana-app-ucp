var Contacto = require('../entidades/contacto.js');
var ContactoNegocio=(function(){
    var self=Object.create({});


        self.listado=function(){
          var lista=[];
                 for (i=0;i<100;i++){
        
                     var ent=new Contacto("Contacto N° " + i);
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
    var c = null;
    
    for (var i = 0; i<lista.length; i++) {
        c = lista[i];
        if (c.getNombre().indexOf(palabras) > -1) {
            entidadesFiltradas.push(c)
        };
    };

    return entidadesFiltradas;
        
}   



self.obtener = function(id){
    
   
    var lista = self.listado();
    var c = null;
    
    for (var i = 0; i<lista.length; i++) {
        c = lista[i];
        if (c.getId() == id) {
            return c;
        };
    };

    return null;
        
        }   



     return self;
});





module.exports=ContactoNegocio;