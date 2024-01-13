// PARTE PLUMA SALTINHO
//ABRE AS OPÇÕES DE CORES DE TAMANHOS
const comprar5 = () => {
    let adquirir = document.querySelector(".adquirir5");
    let mostrar = document.querySelector("#mostrarTudo5");

    if (adquirir) {
        mostrar.style.display = 'block';
    }
    mostrar.scrollIntoView({ behavior: 'smooth' });

}
//LIMPA TUDO QUANDO CLICAR NO BOTÃO CANCELAR
const limparSelecoes5 = () => {
    const todosBotoesCores = document.querySelectorAll(".cores5");
    todosBotoesCores.forEach(botao => {
        botao.style.backgroundColor = "";
    });

    const todosBotoesTamanhos = document.querySelectorAll(".tamanhos5");
    todosBotoesTamanhos.forEach(botao => {
        botao.style.backgroundColor = "";
    });

    let imagemSapato5 = document.querySelector("#imagemSapato5");
    imagemSapato5.innerHTML = "";

     //limpar opção de quantidade escolhida
     let select = document.getElementById("opcoes5");
     select.value = "---";
}

//FECHAR
const cancelar5 = () => {
    let tituloA6 = document.querySelector(".tituloA6")
    let ocultar1 = document.querySelector(".cancelar5");
    let mostrar1 = document.querySelector("#mostrarTudo5");
    if (ocultar1) {
        mostrar1.style.display = 'none';
    }
    tituloA6.scrollIntoView({ behavior: 'smooth' })
    limparSelecoes5()
}


//FAZ AS IMAGENS SURGIR
document.addEventListener('click', (e) => {
    const el = e.target;
    let imagem = document.createElement('img');
    imagem.setAttribute("id", "fotosImagem");
    let imagemSapato5= document.querySelector("#imagemSapato5");

    // Verifica se o elemento clicado é um botão de cor
    if (el.classList.contains("cores5")) {
        const todosBotoes = document.querySelectorAll(".cores5");
        todosBotoes.forEach(botao => { //retira a cor quando clicado em outra
            botao.style.backgroundColor = "";
        });

        imagemSapato5.innerHTML = "";

        if (el.classList.contains("azulbebe5")) {
            imagem.src = '/lancamentos/img-Index/PLUMASALTINHO/azulbebe.png';
            el.style.backgroundColor = "#77B8BA";
        }
        if (el.classList.contains("branco5")) {
            imagem.src = '/lancamentos/img-Index/PLUMASALTINHO/branca.png';
            el.style.backgroundColor = "white";
        }
        if (el.classList.contains("laranjaclaro5")) {
            imagem.src = '/lancamentos/img-Index/PLUMASALTINHO/laranjaclaro.png';
            el.style.backgroundColor = "#FDD0B3";
        }
        if (el.classList.contains("neon5")) {
            imagem.src = '/lancamentos/img-Index/PLUMASALTINHO/neon.png';
            el.style.backgroundColor = "#BCE14F";
        }
        if (el.classList.contains("preta5")) {
            imagem.src = '/lancamentos/img-Index/PLUMASALTINHO/preta.png';
            el.style.backgroundColor = "black";
        }
        if (el.classList.contains("rosa5")) {
            imagem.src = '/lancamentos/img-Index/PLUMASALTINHO/rosa.png';
            el.style.backgroundColor = "#E29EAD";
        }
        if (el.classList.contains("vermelho5")) {
            imagem.src = '/lancamentos/img-Index/PLUMASALTINHO/vermelho.png';
            el.style.backgroundColor = "#E12E4E";
        }
        
        imagemSapato5.appendChild(imagem);
    }
});

//TAMANHOS
document.addEventListener('click', (ev) => {
    const et = ev.target;
  
    if (et.classList.contains("tamanhos5")) {
      const todosBotoesTamanhos = document.querySelectorAll(".tamanhos5");
  
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
    const definirValoresSessionStorage5 = () => {
    
  
      // Ouvinte de evento para os botões de modelos (cores)
      const botaoModelos = document.querySelectorAll(".cores5");
      botaoModelos.forEach(corModelos => {
        corModelos.addEventListener("click", () => {
          const corModelo = corModelos.value;
          sessionStorage.setItem('escolhaCor', corModelo);
        })
      })
  
      // Ouvinte de evento para os botões de tamanhos
      const botaoTamanhos = document.querySelectorAll(".tamanhos5");
      botaoTamanhos.forEach(tamanho => {
        tamanho.addEventListener("click", () => {
          const valorTamanho = tamanho.value;
          sessionStorage.setItem('escolhaTamanho', valorTamanho);
        })
      })
  
      // Ouvinte de evento para a opção de quantidade
      document.getElementById('opcoes5').addEventListener('change', function () {
        const opcaoEscolhida = this.value;
        sessionStorage.setItem('opcaoQuantidade', opcaoEscolhida);
      })
    }

    const NomeValorProduto=()=>{
      // Dados do botão "Concluir"
      const botaoEnviar5 = document.querySelector(".concluir5");
      const valorBotaoEnviar5 = parseFloat(botaoEnviar5.getAttribute('data-value6'));
      const textoBotaoEnviar5 = botaoEnviar5.getAttribute('data-text6');
      sessionStorage.setItem('valorProduto', valorBotaoEnviar5);
      sessionStorage.setItem('nomeProduto', textoBotaoEnviar5);
    }
  
    const concluirCompra5 = () => {
      //estrutura para usar a condição de obrigar escolher cor, tamanho e opção
      const coresSelecionadas = document.querySelector('.cores5:active');
      const tamanhoSelecionado = document.querySelector('.tamanhos5:active');
      const opcaoSelecionada = document.getElementById('opcoes5').value;
  
      if (!coresSelecionadas && !tamanhoSelecionado && opcaoSelecionada === '---') {
        alert("Para prosseguir, escolha: cor, tamanho e quantidade");
        return false;
      }
      // Redirecionar para a próxima página
      //window.location.href = '/PedeAlgodao/CARRINHO/comprasFeitas.html';
      window.location.href = '/lancamentos/compras/comprasFeitas.html';
    }
    definirValoresSessionStorage5();
    document.querySelector(".concluir5").addEventListener("click", ()=>{
      NomeValorProduto();
      concluirCompra5();
    })
  });
  