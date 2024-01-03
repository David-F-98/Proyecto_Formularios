const formulario = document.getElementById('formulario-donacion');
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+/g;
    
    const datos = {
        correo:formulario.correo.value,
        pais:formulario.pais.value,
        donacion: formulario.donacion.value,
        dia: formulario.fecha.value,
        terminos: formulario['terminos-y-condiciones'].checked,
    };

    // if(datos.correo.length  <= 2){
    //     console.log('Correo invalido'); 
    //     return; 
    // };
    
    if(!expresionRegular.test(datos.correo)){
        console.log('Correo invalido'); 
        return; 
    };

    if(datos.pais === ''){
        console.log('Pais invalido'); 
        return; 
    };

    if(datos.donacion === ''){
        console.log('Selecciona una Cantidad a Donar'); 
        return; 
    };

    if(datos.dia === ''){
        console.log('Seleccione una fecha'); 
        return; 
    };

    if(!datos.terminos){
        console.log('Acepte los terminos y condiciones'); 
        return; 
    };

    console.log(datos);
    console.log('Enviando datos...');

});