var Evento = require('../entidades/evento.js');
var EventoNegocio=(function(){
    var self=Object.create({});

        self.listado=function(){
          var lista=[];
          var cn = null;
                 for (i=0;i<100;i++){
		            
		             var ent=new Evento("Evento N° " + i);
                     //ent.setNombre("Evento N° "+ i);
		             lista.push(ent);
                }
                     return lista;
        }
     
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


     return self;
});

//metodo
    self.obtener=function(id){
            
        var c=new evento();
         c.setNombre('Evento '+id);
         
         for (j=1;j<5;j++){
           Contactos=new ();
           cn.setNombre('Contactos '+j);
           c.GetContactos().push(cn);
          };
        return c;


module.exports=EventoNegocio;