var Evento = require('../entidades/evento.js');
var EventoNegocio=(function(){
    var self=Object.create({});

     
      
        self.listado=function(){
          var lista=[];
                 for (i=0;i<7;i++){
		
		             ent=new Evento("Evento N° " + i);
                     //ent.setNombre("Evento N° "+ i);
		             lista.push(ent);
                    }
                     return lista;
                 }
     

     return self;
});
module.exports=EventoNegocio;