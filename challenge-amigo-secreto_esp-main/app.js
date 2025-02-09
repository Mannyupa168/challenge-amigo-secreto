// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function agregarAmigo() {
  let nombreDeAmigo = document.getElementById('amigo').value;

  if (nombreDeAmigo === '') {
    alert('Por favor, inserte un nombre');
    
  } else {
    nombresAmigos.push(nombreDeAmigo);
    actualizarListaDeAmigos();
    limpiarCampo();
  }
  return;
}

function limpiarCampo(){
  document.getElementById('amigo').value = '';
  return;
}

function actualizarListaDeAmigos() {
  let listaDeAmigos = document.getElementById('listaAmigos');
  listaDeAmigos.innerHTML = ''; //Limpia la lista de amigos
  let elementoLista = ''; //Variable para construir la lista de amigos con el elemento <li>

  for (let i = 0; i < nombresAmigos.length; i++) {
    elementoLista += `<li>${nombresAmigos[i]}</li>`; // Agregar cada amigo dentro de <li>
  }

  listaDeAmigos.innerHTML = elementoLista; // Insertar los elementos en la lista
}
