let cualquieras = [{nom:"juan", last:{first:"perez", second:"lugo"}, edad:34, vivo:true}];
let cualquiera = {nom:"pedro", last:"lugo", edad:22, vivo:true};

cualquieras.push(cualquiera);

cualquieras.forEach(element => {
    element.status = false

    console.log(element);


});

const modificados = cualquieras.map(element => {

    element.nom = element.nom+element.edad  
 
});

console.log(modificados);
