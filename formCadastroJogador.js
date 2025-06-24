    const form = document.getElementById('formJogador');
    const lista = document.getElementById('listaJogador');
    //Função que quando algué clicar no botão de enviar, vai pegar os valores do formulario
    form.addEventListener('submit', function (evento) {
    evento.preventDefault(); //Evita o envio do formulario
    const nome = document.getElementById('nome').value;
    const habilidades = document.querySelectorAll('input[name="habilidades"]:checked');
    
    //Pega os valores das habilidades selecionadas
    const habilidadesSelecionadasNodes = document.querySelectorAll('input[name="habilidades"]:checked');
    const habilidadesArray = Array.from(habilidadesSelecionadasNodes).map(checkbox => checkbox.value);

    //Pega a posição do jogador
    const posicaoSelecionada = document.querySelector('input[name="posicao"]:checked');
    const posicao = posicaoSelecionada ? posicaoSelecionada.value : "Não informada";

    //Pega a data de estreia na seleção
    const dataEstreia = document.getElementById('estreia').value;
    //Adicionar o jogador na lista
    const JogadorItem = document.createElement('li');
    JogadorItem.innerHTML = 
    `Nome: ${nome} <br>
    Habilidades: ${habilidadesArray.length > 0 ? habilidadesArray.join(', ') : 'Nenhuma'} <br>
    Posição: ${posicao} <br>
    Data de Estreia na Seleção: ${dataEstreia} <br>`;
      lista.appendChild(JogadorItem)
    //Limpar os campos do formulario
    form.reset();
    // Exibir mensagem de sucesso
    alert('Jogador cadastrado com sucesso!');
    });