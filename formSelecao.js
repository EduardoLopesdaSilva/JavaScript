const form = document.getElementById("formSelecao");
const lista = document.getElementById("listaSelecao");

form.addEventListener("submit", function (evento) {
    evento.preventDefault(); 

    
    const titulo = document.getElementById("titulo").value;
    const jogador = document.getElementById("jogador").value;
    const pais = document.getElementById("pais").value; 
    const ano = document.getElementById("ano").value;
    const continente = document.getElementById("continente").value;

   
    const novaSelecao = document.createElement("li");
    novaSelecao.innerText = `${titulo} --  ${jogador} -- ${pais} --  ${ano} --  ${continente}`;

    lista.appendChild(novaSelecao);
    form.reset();
});