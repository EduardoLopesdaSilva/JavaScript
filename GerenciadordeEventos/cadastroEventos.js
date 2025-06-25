const formEventos = document.getElementById("formEventos");
const listaEventos = document.getElementById("listaEventos");
let eventos = [];

formEventos.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const modalidade = document.querySelector('input[name="modalidade"]:checked').value;
    const local = document.getElementById("local").value;
    const publico = document.getElementById("publico").checked ? "Sim" : "Não";
    
    const evento = {
        nome,
        data,
        modalidade,
        local,
        publico
    };
    
    eventos.push(evento);
    exibirEventos();
    formEventos.reset();
});

function exibirEventos() {
    listaEventos.innerHTML = "";
    
    if (eventos.length === 0) {
        listaEventos.innerHTML = "<p class='text-gray-500'>Nenhum evento cadastrado ainda.</p>";
        return;
    }
    
    eventos.forEach((evento, index) => {
        const eventoDiv = document.createElement("div");
        eventoDiv.className = "border-b border-gray-200 pb-4 mb-4";
        eventoDiv.innerHTML = `
            <h3 class="font-bold text-lg">${evento.nome}</h3>
            <p><span class="font-medium">Data:</span> ${evento.data}</p>
            <p><span class="font-medium">Modalidade:</span> ${evento.modalidade}</p>
            <p><span class="font-medium">Local:</span> ${evento.local}</p>
            <p><span class="font-medium">Aberto ao público:</span> ${evento.publico}</p>
        `;
        listaEventos.appendChild(eventoDiv);
    });
}

// Exibir mensagem inicial
exibirEventos();