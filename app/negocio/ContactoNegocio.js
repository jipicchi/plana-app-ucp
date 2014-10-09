var Contacto = require('../entidades/contacto.js');
var ContactoNegocio=(function(){
    var self=Object.create({});

     
      
        self.listado=function(){
          var lista=[];
                 for (i=0;i<5;i++){
		
		             ent=new Contacto();
                     ent.setNombre=("Contacto N° ");
		             lista.push(ent);
                    }
                     return lista;
                 }
     

     return self;
});
module.exports=ContactoNegocio;


