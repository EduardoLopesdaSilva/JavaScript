//Aqui vamos pegar o form e a lista para exibir os jogos
const form = document.getElementById("formJogo");
const lista = document.getElementById("listaJogo");
//Adicionar o evento de submit ao formulario
form.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Evita o recarregamento da página
    //Pegar os valores dos campos do formulario
    const nome = document.getElementById("genero").value;
    const genero = document.getElementById("genero").value;
    const ano = document.getElementById("ano").value;
    //criar um novo elemento lista de jogo
    const novoJogo = document.createElement("li");
    novoJogo.innerText = `${genero} -- ${genero} -- ${ano}`;
    //Adicionar o novo item a lista
    lista.appendChild(novoJogo); 
    //Limpar os campos do formulario
    form.reset();
});