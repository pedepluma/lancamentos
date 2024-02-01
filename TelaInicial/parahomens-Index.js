// PARTE PARA HOMENS
//ABRE AS OPÇÕES DE CORES DE TAMANHOS
const comprar7 = () => {
  let adquirir = document.querySelector(".adquirir7");
  let mostrar = document.querySelector("#mostrarTudo7");

  if (adquirir) {
    mostrar.style.display = 'block';
  }
  mostrar.scrollIntoView({ behavior: 'smooth' });

}
//LIMPA TUDO QUANDO CLICAR NO BOTÃO CANCELAR
const limparSelecoes7 = () => {
  const todosBotoesCores = document.querySelectorAll(".cores7");
  todosBotoesCores.forEach(botao => {
    botao.style.backgroundColor = "";
  });

  const todosBotoesTamanhos = document.querySelectorAll(".tamanhos7");
  todosBotoesTamanhos.forEach(botao => {
    botao.style.backgroundColor = "";
  });

  let imagemSapato7 = document.querySelector("#imagemSapato7");
  imagemSapato7.innerHTML = "";

  //limpar opção de quantidade escolhida
  let select = document.getElementById("opcoes7");
  select.value = "---";
}

//FECHAR
const cancelar7 = () => {
  let tituloA3 = document.querySelector(".tituloA8")
  let ocultar1 = document.querySelector(".cancelar7");
  let mostrar1 = document.querySelector("#mostrarTudo7");
  if (ocultar1) {
    mostrar1.style.display = 'none';
  }
  tituloA3.scrollIntoView({ behavior: 'smooth' })
  limparSelecoes7()
}


//FAZ AS IMAGENS SURGIR
document.addEventListener('click', (e) => {
  const el = e.target;
  let imagem = document.createElement('img');
  imagem.setAttribute("id", "fotosImagem");
  let imagemSapato7 = document.querySelector("#imagemSapato7");

  // Verifica se o elemento clicado é um botão de cor
  if (el.classList.contains("cores7")) {
    const todosBotoes = document.querySelectorAll(".cores7");
    todosBotoes.forEach(botao => { //retira a cor quando clicado em outra
      botao.style.backgroundColor = "";
    });

    imagemSapato7.innerHTML = "";

    if (el.classList.contains("azulbebe7")) {
      imagem.src = '/lancamentos/img-Index/PARAHOMENS/azulbebe.png';
      el.style.backgroundColor = "#77B8BA";
    }
    if (el.classList.contains("azulmarinho7")) {
      imagem.src = '/lancamentos/img-Index/PARAHOMENS/azulmarinho.png';
      el.style.backgroundColor = "#666F8C";
    }
    if (el.classList.contains("branca7")) {
      imagem.src = '/lancamentos/img-Index/PARAHOMENS/branca.png';
      el.style.backgroundColor = "white";
    }
    if (el.classList.contains("neon7")) {
      imagem.src = '/lancamentos/img-Index/PARAHOMENS/neon.png';
      el.style.backgroundColor = "#BCE14F";
    }
    if (el.classList.contains("preta7")) {
      imagem.src = '/lancamentos/img-Index/PARAHOMENS/preta.png';
      el.style.backgroundColor = "black";
    }
    if (el.classList.contains("verdemilitar7")) {
      imagem.src = '/lancamentos/img-Index/PARAHOMENS/verdemilitar.png';
      el.style.backgroundColor = "#6F735C";
    }
    imagemSapato7.appendChild(imagem);
  }
});

//TAMANHOS
document.addEventListener('click', (ev) => {
  const et = ev.target;

  if (et.classList.contains("tamanhos7")) {
    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos7");

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
    const botaoModelos = document.querySelectorAll(".cores7");

    botaoModelos.forEach(corModelos => {
      corModelos.addEventListener("click", () => {
        const corModelo = corModelos.value;
        const EscolhaCor = `cores_${indiceCores}`;
        sessionStorage.setItem(EscolhaCor, corModelo);
         });
    });

    // Ouvinte de evento para os botões de tamanhos
    const botaoTamanhos = document.querySelectorAll(".tamanhos7");
    botaoTamanhos.forEach(tamanho => {
      tamanho.addEventListener("click", () => {
        const valorTamanho = tamanho.value;
        const EscolhaTamanho = `tamanhos_${indiceTamanhos}`;
        sessionStorage.setItem(EscolhaTamanho, valorTamanho);
      });
    });

    // Ouvinte de evento para a opção de quantidade
    document.getElementById('opcoes7').addEventListener('change', function () {
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
    const botaoEnviar = document.querySelector(".concluir7");

    // Verifique se o botão foi encontrado antes de prosseguir
    if (botaoEnviar) {
      // Obtenha os atributos do botão
      const produto = botaoEnviar.getAttribute('data-text8');
      const valor = parseFloat(botaoEnviar.getAttribute('data-value8'));

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
    const coresSelecionadas = document.querySelector('.cores7:active');
    const tamanhoSelecionado = document.querySelector('.tamanhos7:active');
    const opcaoSelecionada = document.getElementById('opcoes7').value;

    if (!coresSelecionadas && !tamanhoSelecionado && opcaoSelecionada === '---') {
      alert("Para prosseguir, escolha: cor, tamanho e quantidade");
      return false;
    }
    // Redirecionar para a próxima página
    window.location.href = '/lancamentos/compras/comprasFeitas.html';

  }
  definirValoresSessionStorage();
  document.querySelector(".concluir7").addEventListener("click", () => {
    concluirCompra();
    NomeValorProduto();

  })
});