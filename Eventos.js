var Eventos=(function(){
    var self=Object.create({});

     var eve = require('../entidades/evento.js');
       var lista=[];
        self.listado=function(eve){
        

        for (i=0;i<7;i++){
		
		  ent=new eve();
           ent.setNombreE=('Lista evento '+i);
		   lista.push=(ent);
        }
             return lista;
        }
     

     return self;
});
module.exports=Eventos;


