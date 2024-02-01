// PARTE PLUMA NUVEM
//ABRE AS OPÇÕES DE CORES DE TAMANHOS
const comprar = () => {
  let adquirir = document.querySelector(".adquirir");
  let mostrar = document.querySelector("#mostrarTudo");

  if (adquirir) {
    mostrar.style.display = 'block';
  }
  mostrar.scrollIntoView({ behavior: 'smooth' });

}
//LIMPA TUDO QUANDO CLICAR NO BOTÃO CANCELAR
const limparSelecoes = () => {
  const todosBotoesCores = document.querySelectorAll(".cores");
  todosBotoesCores.forEach(botao => {
    botao.style.backgroundColor = "";
  });

  const todosBotoesTamanhos = document.querySelectorAll(".tamanhos");
  todosBotoesTamanhos.forEach(botao => {
    botao.style.backgroundColor = "";
  });

  let imagemSapato = document.querySelector("#imagemSapato");
  imagemSapato.innerHTML = "";


  //limpar opção de quantidade escolhida
  let select = document.getElementById("opcoes");
  select.value = "";
}

//FECHAR
const cancelar = () => {
  let tituloA = document.querySelector(".tituloA")
  let ocultar = document.querySelector(".cancelar");
  let mostrar = document.querySelector("#mostrarTudo");
  if (ocultar) {
    mostrar.style.display = 'none';
  }
  tituloA.scrollIntoView({ behavior: 'smooth' })
  limparSelecoes()
}


//FAZ AS IMAGENS SURGIR
document.addEventListener('click', (e) => {
  const el = e.target;

  //cria a imagem
  let imagem = document.createElement('img');
  imagem.setAttribute("id", "fotosImagem");
  let imagemSapato = document.querySelector("#imagemSapato");

  // Verifica se o elemento clicado é um botão de cor
  if (el.classList.contains("cores")) {
    const todosBotoes = document.querySelectorAll(".cores");
    todosBotoes.forEach(botao => { //retira a cor quando clicado em outra
      botao.style.backgroundColor = "";
    });

    imagemSapato.innerHTML = "";

    if (el.classList.contains("bege")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/lilas.png';
      imagem.src = '/lancamentos/img-Index/PLUMANUVEM/lilas.png';
      el.style.backgroundColor = "#A87AA9";
    }
    if (el.classList.contains("preto")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/preta.png';
      imagem.src = '/lancamentos/img-Index/PLUMANUVEM/preta.png';
      el.style.backgroundColor = "black";
    }
    if (el.classList.contains("amareloouro")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/amareloouro.png';
      imagem.src = '/lancamentos/img-Index/PLUMANUVEM/amareloouro.png';
      el.style.backgroundColor = "#E0BA12";
    }
    if (el.classList.contains("laranja")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/laranja.png';
      imagem.src = '/lancamentos/img-Index/PLUMANUVEM/laranja.png';
      el.style.backgroundColor = "#C84F22";
    }
    if (el.classList.contains("rosabebe")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/rosa.png';
      imagem.src = '/lancamentos/img-Index/PLUMANUVEM/rosa.png';
      el.style.backgroundColor = "#E29EAD";
    }
    if (el.classList.contains("branco")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/branca.png';
      imagem.src = '/lancamentos/img-Index/PLUMANUVEM/branca.png';
      el.style.backgroundColor = "white";
    }
    if (el.classList.contains("azulmarinho")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/azulmarinho.png';
      imagem.src = '/lancamentos/img-Index/PLUMANUVEM/azulmarinho.png';
      el.style.backgroundColor = "#666F8C";
    }
    if (el.classList.contains("azulclaro")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/azulbebe.png';
      imagem.src = '/lancamentos/img-Index/PLUMANUVEM/azulbebe.png';
      el.style.backgroundColor = "#61A2B0";
    }
    if (el.classList.contains("verdemilitar")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/verdemilitar.png';
      imagem.src = '/lancamentos/img-Index/PLUMANUVEM/verdemilitar.png';
      el.style.backgroundColor = "#6F735C";
    }

    if (el.classList.contains("nude")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/verdemilitar.png';
      imagem.src = '/lancamentos/img-Index/PLUMANUVEM/nude.png';
      el.style.backgroundColor = "#E3C9B9";
    }

    if (el.classList.contains("neon")) {
      //imagem.src = '/PedeAlgodao/img-Index/PLUMANUVEM/verdemilitar.png';
      imagem.src = '/lancamentos/img-Index/PLUMANUVEM/neon.png';
      el.style.backgroundColor = "#BCE14F";
    }
    imagemSapato.appendChild(imagem);
  }
});

//TAMANHOS
document.addEventListener('click', (ev) => {
  const et = ev.target;

  if (et.classList.contains("tamanhos")) {
    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos");

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
    const botaoModelos = document.querySelectorAll(".cores");

    botaoModelos.forEach(corModelos => {
      corModelos.addEventListener("click", () => {
        const corModelo = corModelos.value;
        const EscolhaCor = `cores_${indiceCores}`;
        sessionStorage.setItem(EscolhaCor, corModelo);
         });
    });

    // Ouvinte de evento para os botões de tamanhos
    const botaoTamanhos = document.querySelectorAll(".tamanhos");
    botaoTamanhos.forEach(tamanho => {
      tamanho.addEventListener("click", () => {
        const valorTamanho = tamanho.value;
        const EscolhaTamanho = `tamanhos_${indiceTamanhos}`;
        sessionStorage.setItem(EscolhaTamanho, valorTamanho);
      });
    });

    // Ouvinte de evento para a opção de quantidade
    document.getElementById('opcoes').addEventListener('change', function () {
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
    const botaoEnviar = document.querySelector(".concluir");

    // Verifique se o botão foi encontrado antes de prosseguir
    if (botaoEnviar) {
      // Obtenha os atributos do botão
      const produto = botaoEnviar.getAttribute('data-text1');
      const valor = parseFloat(botaoEnviar.getAttribute('data-value1'));

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
    const coresSelecionadas = document.querySelector('.cores:active');
    const tamanhoSelecionado = document.querySelector('.tamanhos:active');
    const opcaoSelecionada = document.getElementById('opcoes').value;

    if (!coresSelecionadas && !tamanhoSelecionado && opcaoSelecionada === '---') {
      alert("Para prosseguir, escolha: cor, tamanho e quantidade");
      return false;
    }
    // Redirecionar para a próxima página
    //window.location.href = '/lancamentos/endereco/endereco.html';
    window.location.href = '../endereco/endereco.html';


  }
  definirValoresSessionStorage();
  document.querySelector(".concluir").addEventListener("click", () => {
    concluirCompra();
    NomeValorProduto();

  })
});
