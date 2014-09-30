var Entidad=(function(){
    var self=Object.create({});

     var eve = require('../entidades/evento.js');
       var lista=[];
        self.listado=function(eve){
        

        for (i=0;i<3;i++){
		
		  ent=new eve();
           ent.setNombre=('Lista evento Nº '+i);
		   lista.push=(ent);
        }
             return lista;
        }
     

     return self;
});
module.exports=Entidad;


