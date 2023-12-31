//Evento Submit
const formulario = document.forms['formulario-donacion'];
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('enviando datos...');
});



//Evento Change
formulario.pais.addEventListener('change',(e)=>{
    console.log('El pais cambio...');
    console.log('el nuevo valor es: ' + e.target.value);
});

formulario['cantidad-5'].addEventListener('change',(e)=>console.log('La cantidad cambio a: '+ e.target.value));
formulario['cantidad-10'].addEventListener('change',(e)=>console.log('La cantidad cambio a: '+ e.target.value));


//Evento Focus
formulario.correo.addEventListener('focus', ()=>{
    console.log('El imput ahora es el FOCO');
});


//Evento Blur
formulario.correo.addEventListener('blur', ()=>{
    console.log('El imput ahora NO es el FOCO');
});


//Evento Keydown
formulario.correo.addEventListener('keydown', (e)=>{
    console.log('Estas precionando la tecla: ' + e.target.value );
});



//Evento Keyup
formulario.correo.addEventListener('keyup', (e)=>{
    console.log('Dejaste de presionar la tecla: ' + e.target.value );
});