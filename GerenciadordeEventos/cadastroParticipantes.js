const formParticipantes = document.getElementById("formParticipantes");
const listaParticipantes = document.getElementById("listaParticipantes");
let participantes = [];

formParticipantes.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const evento = document.getElementById("evento").value;
    const regulamento = document.getElementById("regulamento").checked ? "Sim" : "Não";
    
    const participante = {
        nome,
        idade,
        genero,
        evento,
        regulamento
    };
    
    participantes.push(participante);
    exibirParticipantes();
    formParticipantes.reset();
});

function exibirParticipantes() {
    listaParticipantes.innerHTML = "";
    
    if (participantes.length === 0) {
        listaParticipantes.innerHTML = "<p class='text-gray-500'>Nenhum participante cadastrado ainda.</p>";
        return;
    }
    
    participantes.forEach((participante, index) => {
        const participanteDiv = document.createElement("div");
        participanteDiv.className = "border-b border-gray-200 pb-4 mb-4";
        participanteDiv.innerHTML = `
            <h3 class="font-bold text-lg">${participante.nome}</h3>
            <p><span class="font-medium">Idade:</span> ${participante.idade}</p>
            <p><span class="font-medium">Gênero:</span> ${participante.genero}</p>
            <p><span class="font-medium">Evento:</span> ${participante.evento}</p>
            <p><span class="font-medium">Aceitou regulamento:</span> ${participante.regulamento}</p>
        `;
        listaParticipantes.appendChild(participanteDiv);
    });
}

// Exibir mensagem inicial
exibirParticipantes();