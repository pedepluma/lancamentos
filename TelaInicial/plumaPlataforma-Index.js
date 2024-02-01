// PARTE PLUMA KIDS
//ABRE AS OPÇÕES DE CORES DE TAMANHOS
const comprar4 = () => {
    let adquirir = document.querySelector(".adquirir4");
    let mostrar = document.querySelector("#mostrarTudo4");

    if (adquirir) {
        mostrar.style.display = 'block';
    }
    mostrar.scrollIntoView({ behavior: 'smooth' });

}
//LIMPA TUDO QUANDO CLICAR NO BOTÃO CANCELAR
const limparSelecoes4 = () => {
    const todosBotoesCores = document.querySelectorAll(".cores4");
    todosBotoesCores.forEach(botao => {
        botao.style.backgroundColor = "";
    });

    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos4");
    todosBotoesTamanhos.forEach(botao => {
        botao.style.backgroundColor = "";
    });

    let imagemSapato3 = document.querySelector("#imagemSapato4");
    imagemSapato3.innerHTML = "";

     //limpar opção de quantidade escolhida
     let select = document.getElementById("opcoes4");
     select.value = "---";
}

//FECHAR
const cancelar4 = () => {
    let tituloA5 = document.querySelector(".tituloA5")
    let ocultar1 = document.querySelector(".cancelar4");
    let mostrar1 = document.querySelector("#mostrarTudo4");
    if (ocultar1) {
        mostrar1.style.display = 'none';
    }
    tituloA5.scrollIntoView({ behavior: 'smooth' })
    limparSelecoes4()
}


//FAZ AS IMAGENS SURGIR
document.addEventListener('click', (e) => {
    const el = e.target;
    let imagem = document.createElement('img');
    imagem.setAttribute("id", "fotosImagem");
    let imagemSapato4 = document.querySelector("#imagemSapato4");

    // Verifica se o elemento clicado é um botão de cor
    if (el.classList.contains("cores4")) {
        const todosBotoes = document.querySelectorAll(".cores4");
        todosBotoes.forEach(botao => { //retira a cor quando clicado em outra
            botao.style.backgroundColor = "";
        });

        imagemSapato4.innerHTML = "";

        if (el.classList.contains("azulbebe4")) {
            imagem.src = '/lancamentos/img-Index/PLUMAPLATAFORMA/azulbebe.jpeg';
            el.style.backgroundColor = "#C5DFE0";
        }
        if (el.classList.contains("branca4")) {
            imagem.src = '/lancamentos/img-Index/PLUMAPLATAFORMA/branca.jpeg';
            el.style.backgroundColor = "white";
        }
        if (el.classList.contains("neon4")) {
            imagem.src = '/lancamentos/img-Index/PLUMAPLATAFORMA/neon.jpeg';
            el.style.backgroundColor = "#DBEC46";
        }
        if (el.classList.contains("nude4")) {
            imagem.src = '/lancamentos/img-Index/PLUMAPLATAFORMA/nude.jpeg';
            el.style.backgroundColor = "#EACBB7";
        }
        if (el.classList.contains("preta4")) {
            imagem.src = '/lancamentos/img-Index/PLUMAPLATAFORMA/preta.jpeg';
            el.style.backgroundColor = "black";
        }
        if (el.classList.contains("rosa4")) {
            imagem.src = '/lancamentos/img-Index/PLUMAPLATAFORMA/rosa.jpeg';
            el.style.backgroundColor = "#F487B1";
        }
        if (el.classList.contains("rosaescuro4")) {
            imagem.src = '/lancamentos/img-Index/PLUMAPLATAFORMA/rosaescuro.jpeg';
            el.style.backgroundColor = "#FC789D";
        }
        if (el.classList.contains("roxo4")) {
            imagem.src = '/lancamentos/img-Index/PLUMAPLATAFORMA/roxo.jpeg';
            el.style.backgroundColor = "#C473DC";
        }

        imagemSapato4.appendChild(imagem);
    }
});

//TAMANHOS
document.addEventListener('click', (ev) => {
    const et = ev.target;
  
    if (et.classList.contains("tamanhos4")) {
      const todosBotoesTamanhos = document.querySelectorAll(".tamanhos4");
  
      todosBotoesTamanhos.forEach(botao => {// Retira a cor quando clicado em outra
        botao.style.backgroundColor = "";
      });
      // Define a cor apenas para o botão clicado
      et.style.backgroundColor = "#61A2B0";
    }
  });


 //-------------------------------------------------------------
//PARTE QUE ARMAZENA NO SESSIONSTORAGE E MANDA
document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de índices fora da função
  let indiceCores = sessionStorage.length;
  let indiceTamanhos = sessionStorage.length;
  let indiceOpcao = sessionStorage.length;

  // Lógica para definir valores no sessionStorage
  const definirValoresSessionStorage = () => {
    // Ouvinte de evento para os botões de modelos (cores)
    const botaoModelos = document.querySelectorAll(".cores4");

    botaoModelos.forEach(corModelos => {
      corModelos.addEventListener("click", () => {
        const corModelo = corModelos.value;
        const EscolhaCor = `cores_${indiceCores}`;
        sessionStorage.setItem(EscolhaCor, corModelo);
         });
    });

    // Ouvinte de evento para os botões de tamanhos
    const botaoTamanhos = document.querySelectorAll(".tamanhos4");
    botaoTamanhos.forEach(tamanho => {
      tamanho.addEventListener("click", () => {
        const valorTamanho = tamanho.value;
        const EscolhaTamanho = `tamanhos_${indiceTamanhos}`;
        sessionStorage.setItem(EscolhaTamanho, valorTamanho);
      });
    });

    // Ouvinte de evento para a opção de quantidade
    document.getElementById('opcoes4').addEventListener('change', function () {
      const opcaoEscolhida = this.value;
      const EscolhaOpcao = `opcoes_${indiceOpcao}`;
      sessionStorage.setItem(EscolhaOpcao, opcaoEscolhida);
    });
  };

  //----------------------------------------------------------------------------------------------------
  // Declare os índices fora da função para que eles não sejam redefinidos a cada chamada da função
  let indiceProduto = sessionStorage.length;
  let indiceValor = sessionStorage.length;
  const NomeValorProduto = () => {

    // Obtenha a referência do botão usando um seletor mais específico
    const botaoEnviar = document.querySelector(".concluir4");

    // Verifique se o botão foi encontrado antes de prosseguir
    if (botaoEnviar) {
      // Obtenha os atributos do botão
      const produto = botaoEnviar.getAttribute('data-text5');
      const valor = parseFloat(botaoEnviar.getAttribute('data-value5'));

      // Use o índice atual para criar chaves únicas no sessionStorage
      const TipoProduto = `escolhaProduto_${indiceProduto}`;
      const TipoProdutoValor = `escolhaProdutoValor_${indiceValor}`;

      // Armazene os novos itens no sessionStorage
      sessionStorage.setItem(TipoProduto, produto);
      sessionStorage.setItem(TipoProdutoValor, valor);
    }
  };




  //-------------------------------------------------------------



  const concluirCompra = () => {
    //estrutura para usar a condição de obrigar escolher cor, tamanho e opção
    const coresSelecionadas = document.querySelector('.cores4:active');
    const tamanhoSelecionado = document.querySelector('.tamanhos4:active');
    const opcaoSelecionada = document.getElementById('opcoes4').value;

    if (!coresSelecionadas && !tamanhoSelecionado && opcaoSelecionada === '---') {
      alert("Para prosseguir, escolha: cor, tamanho e quantidade");
      return false;
    }
    // Redirecionar para a próxima página
    window.location.href = '/lancamentos/compras/comprasFeitas.html';

  }
  definirValoresSessionStorage();
  document.querySelector(".concluir4").addEventListener("click", () => {
    concluirCompra();
    NomeValorProduto();

  })
});
