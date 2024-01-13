// PARTE PLUMA KIDS
//ABRE AS OPÇÕES DE CORES DE TAMANHOS
const comprar3 = () => {
  let adquirir = document.querySelector(".adquirir3");
  let mostrar = document.querySelector("#mostrarTudo3");

  if (adquirir) {
    mostrar.style.display = 'block';
  }
  mostrar.scrollIntoView({ behavior: 'smooth' });

}
//LIMPA TUDO QUANDO CLICAR NO BOTÃO CANCELAR
const limparSelecoes3 = () => {
  const todosBotoesCores = document.querySelectorAll(".cores3");
  todosBotoesCores.forEach(botao => {
    botao.style.backgroundColor = "";
  });

  const todosBotoesTamanhos = document.querySelectorAll(".tamanhos3");
  todosBotoesTamanhos.forEach(botao => {
    botao.style.backgroundColor = "";
  });

  let imagemSapato3 = document.querySelector("#imagemSapato3");
  imagemSapato3.innerHTML = "";

  //limpar opção de quantidade escolhida
  let select = document.getElementById("opcoes3");
  select.value = "---";
}

//FECHAR
const cancelar3 = () => {
  let tituloA4 = document.querySelector(".tituloA4")
  let ocultar1 = document.querySelector(".cancelar3");
  let mostrar1 = document.querySelector("#mostrarTudo3");
  if (ocultar1) {
    mostrar1.style.display = 'none';
  }
  tituloA4.scrollIntoView({ behavior: 'smooth' })
  limparSelecoes3()
}


//FAZ AS IMAGENS SURGIR
document.addEventListener('click', (e) => {
  const el = e.target;
  let imagem = document.createElement('img');
  imagem.setAttribute("id", "fotosImagem");
  let imagemSapato3 = document.querySelector("#imagemSapato3");

  // Verifica se o elemento clicado é um botão de cor
  if (el.classList.contains("cores3")) {
    const todosBotoes = document.querySelectorAll(".cores3");
    todosBotoes.forEach(botao => { //retira a cor quando clicado em outra
      botao.style.backgroundColor = "";
    });

    imagemSapato3.innerHTML = "";

    if (el.classList.contains("neon3")) {
      imagem.src = '/PedeAlgodao/img-Index/PLUMAKIDS/neon.jpeg';
      el.style.backgroundColor = "#E0BA12";
    }
    if (el.classList.contains("rosa3")) {
      imagem.src = '/PedeAlgodao/img-Index/PLUMAKIDS/rosa.jpeg';
      el.style.backgroundColor = "#E29EAD";
    }
    if (el.classList.contains("roxa3")) {
      imagem.src = '/PedeAlgodao/img-Index/PLUMAKIDS/roxa.jpeg';
      el.style.backgroundColor = "#666F8C";
    }
    if (el.classList.contains("vermelhaclara3")) {
      imagem.src = '/PedeAlgodao/img-Index/PLUMAKIDS/vermelhoclaro.jpeg';
      el.style.backgroundColor = "#B83760";
    }

    imagemSapato3.appendChild(imagem);
  }
});

//TAMANHOS
document.addEventListener('click', (ev) => {
  const et = ev.target;

  if (et.classList.contains("tamanhos3")) {
    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos3");

    todosBotoesTamanhos.forEach(botao => {// Retira a cor quando clicado em outra
      botao.style.backgroundColor = "";
    });
    // Define a cor apenas para o botão clicado
    et.style.backgroundColor = "#61A2B0";
  }
});


//PARTE QUE ARMAZENA NO SESSIONSTORAGE E MANDA
document.addEventListener('DOMContentLoaded', () => {

  // Lógica para definir valores no sessionStorage
  const definirValoresSessionStorage3 = () => {
    // Ouvinte de evento para os botões de modelos (cores)
    const botaoModelos = document.querySelectorAll(".cores3");
    botaoModelos.forEach(corModelos => {
      corModelos.addEventListener("click", () => {
        const corModelo = corModelos.value;
        sessionStorage.setItem('escolhaCor', corModelo);
      })
    })

    // Ouvinte de evento para os botões de tamanhos
    const botaoTamanhos = document.querySelectorAll(".tamanhos3");
    botaoTamanhos.forEach(tamanho => {
      tamanho.addEventListener("click", () => {
        const valorTamanho = tamanho.value;
        sessionStorage.setItem('escolhaTamanho', valorTamanho);
      })
    })

    // Ouvinte de evento para a opção de quantidade
    document.getElementById('opcoes3').addEventListener('change', function () {
      const opcaoEscolhida = this.value;
      sessionStorage.setItem('opcaoQuantidade', opcaoEscolhida);
    })
  }

  const NomeValorProduto = () => {
    // Dados do botão "Concluir"
    const botaoEnviar3 = document.querySelector(".concluir3");
    const valorBotaoEnviar3 = parseFloat(botaoEnviar3.getAttribute('data-value4'));
    const textoBotaoEnviar3 = botaoEnviar3.getAttribute('data-text4');
    sessionStorage.setItem('valorProduto', valorBotaoEnviar3);
    sessionStorage.setItem('nomeProduto', textoBotaoEnviar3);
  }

  const concluirCompra3 = () => {
    //estrutura para usar a condição de obrigar escolher cor, tamanho e opção
    const coresSelecionadas = document.querySelector('.cores3:active');
    const tamanhoSelecionado = document.querySelector('.tamanhos3:active');
    const opcaoSelecionada = document.getElementById('opcoes3').value;

    if (!coresSelecionadas && !tamanhoSelecionado && opcaoSelecionada === '---') {
      alert("Para prosseguir, escolha: cor, tamanho e quantidade");
      return false;
    }
    // Redirecionar para a próxima página
    window.location.href = '/lancamentos/compras/comprasFeitas.html';
 
  }
  definirValoresSessionStorage3();
  document.querySelector(".concluir3").addEventListener("click", () => {
    NomeValorProduto();
    concluirCompra3();
  })
});

