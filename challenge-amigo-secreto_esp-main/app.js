// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function agregarAmigo() {
  let nombreDeAmigo = document.getElementById('amigo').value;
  console.log(nombreDeAmigo);

  if (nombreDeAmigo === '') {
    alert('Por favor, inserte un nombre');
    
  } else {
    nombresAmigos.push(nombreDeAmigo);
    console.log(nombresAmigos);
    limpiarCampo();
  }
  return;
}

function limpiarCampo(){
  document.getElementById('amigo').value = '';
  return;
}
