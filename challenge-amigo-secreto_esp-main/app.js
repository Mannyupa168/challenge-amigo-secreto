// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];
let amigoSecreto;
let listaDeAmigos;
let elementoLista;

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
  listaDeAmigos = document.getElementById('listaAmigos');
  listaDeAmigos.innerHTML = ''; //Limpia la lista de amigos
  elementoLista = ''; //Variable para construir la lista de amigos con el elemento <li>

  for (let i = 0; i < nombresAmigos.length; i++) {
    elementoLista += `<li>${nombresAmigos[i]}</li>`; // Agregar cada amigo dentro de <li>
  }

  listaDeAmigos.innerHTML = elementoLista; // Insertar los elementos en la lista
}

function sortearAmigo() {
  if(nombresAmigos.length === 0){
    alert('Por favor, agrega al menos el nombre de un amigo');
  } else {
    amigoSecreto = nombresAmigos[Math.floor(Math.random() * nombresAmigos.length)];
    console.log(amigoSecreto);
    document.getElementById('resultado').innerHTML = amigoSecreto;
    return;
  }
}
