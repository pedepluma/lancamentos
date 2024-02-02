
let somaTotal = 0;
 const carrinhoCompras=()=>{
    const container = document.querySelector('.conteudo');
    
  
    const Apagar = (div, chaveProduto, chaveValor, chaveQuantidade) => {
      let excluir = document.createElement('button');
      excluir.setAttribute("class", "excluirItem");
      excluir.innerHTML = "REMOVER";
      div.appendChild(excluir);
  
      excluir.addEventListener('click', function () {
        //multiplica para depois subtrair o valor que foi excluido
        const valorDivRemovida = parseFloat(sessionStorage.getItem(chaveValor)) * parseFloat(sessionStorage.getItem(chaveQuantidade));
  
        container.removeChild(div); // Remove a div que contém o botão
        removerSessionStorage(chaveProduto, chaveValor);
  
        // Subtrai o valor da div removida do somaTotal
        somaTotal -= valorDivRemovida;
  
        // Atualiza o valor total no documento
        document.querySelector(".valor").innerHTML = `<span style="font-weight: bold;">VALOR TOTAL GERAL:</span> R$ ${somaTotal.toFixed(2)}`;
      });
    };
  
    const removerSessionStorage = (chaveProduto, chaveValor) => {
      sessionStorage.removeItem(chaveProduto);
      sessionStorage.removeItem(chaveValor);
    };
  
    const calcular = (escolhaValor, escolhaQuantidade) => {
      somaTotal += escolhaValor * escolhaQuantidade;
    };
  
    const CriaDiv = () => {
      for (let i = 0; i < sessionStorage.length; i++) {
        const chaveProduto = `escolhaProduto_${i}`;
        const chaveValor = `escolhaProdutoValor_${i}`;
        const chaveCores = `cores_${i}`;
        const chaveTamanho = `tamanhos_${i}`;
        const chaveQuantidade = `opcoes_${i}`;
  
        const escolhaProduto = sessionStorage.getItem(chaveProduto);
        const escolhaValor = parseFloat(sessionStorage.getItem(chaveValor));
        const escolhaCores = sessionStorage.getItem(chaveCores);
        const escolhaTamanho = sessionStorage.getItem(chaveTamanho);
        const escolhaQuantidade = parseFloat(sessionStorage.getItem(chaveQuantidade));
  
        if (escolhaProduto && escolhaQuantidade && escolhaCores && escolhaTamanho && !isNaN(escolhaValor)) {
          let div = document.createElement('div');
          div.setAttribute("class", "mercadoria");
  
          calcular(escolhaValor, escolhaQuantidade);
          const soma = escolhaValor * escolhaQuantidade;
  
          div.innerHTML =
            `
                <br><br> <span style="font-weight: bold;">SANDÁLIA:</span> ${escolhaProduto}
                <br> <span style="font-weight: bold;">VALOR UNITÁRIO:</span> R$ ${escolhaValor.toFixed(2)}
                <br> <span style="font-weight: bold;">COR:</span> ${escolhaCores}
                <br> <span style="font-weight: bold;">TAMANHO:</span> ${escolhaTamanho}
                <br> <span style="font-weight: bold;">QUANTIDADE (PAR):</span> ${escolhaQuantidade}
                <br><br> <span style="font-weight: bold;">VALOR TOTAL: R$ </span> ${soma.toFixed(2)}
              `;
  
          container.appendChild(div);
          Apagar(div, chaveProduto, chaveValor, chaveQuantidade);
        }
      }
  
    }
 
    // Atualiza o valor total no documento
    CriaDiv()
   document.querySelector(".valor").innerHTML = `<span style="font-weight: bold;">VALOR TOTAL GERAL:</span> R$ ${somaTotal.toFixed(2)}`;  
  }

  document.addEventListener('DOMContentLoaded', () => {
    carrinhoCompras()
  });
  
  
  //------------------------ENDEREÇO-----
  //ENDEREÇO PARA ENTREGA
  const FormEnd = () => {
    let nomeRua = document.getElementById('nomeRua').value;
    let numeroCasa = document.getElementById('numeroCasa').value;
    let cep = document.getElementById('cep').value;
    let cidade = document.getElementById('cidade').value;
    let bairro = document.getElementById('bairro').value;
    let referencia = document.getElementById('referencia').value;

    if (nomeRua && numeroCasa && cep && cidade && bairro && referencia) {
      let endereco = {
        nomeRua: nomeRua,
        numeroCasa: numeroCasa,
        cep: cep,
        cidade: cidade,
        bairro: bairro,
        referencia: referencia,
      };

      sessionStorage.setItem('endereco', JSON.stringify(endereco));
    } else {
      alert('Por favor, preencha todos os campos do Endereço para Entrega.');
      return false; // Impede o envio do formulário se a validação falhar
    }
  };

  // let botaoEndereco = document.querySelector("#botaoEndereco");
  // botaoEndereco.addEventListener("click", () => {
  //   FormEnd();
  //   enviarZap();
  // });

  //----------------------------------------------------------------------------


  let Retiradas = document.getElementsByName('entrega');
  for (var i = 0; i < Retiradas.length; i++) {
    Retiradas[i].addEventListener('click', naoRetirar);
  }

  function limparFormulario() {
    document.getElementById('nomeRua').value = '';
    document.getElementById('numeroCasa').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('referencia').value = '';
  }

  function naoRetirar() {
    let escolhaEntrega = document.querySelector('input[name="entrega"]:checked');
    if (escolhaEntrega) {
      let NaoEntregar = document.querySelector('#myForm');
      let botao = document.querySelector(".botano")

      if (escolhaEntrega.value === 'NÃO') {
        NaoEntregar.style.display = 'block';
        botao.style.display = 'none';
        sessionStorage.setItem('escolhaEntrega', escolhaEntrega.value);
      } else {
        NaoEntregar.style.display = 'none';
        botao.style.display = 'block';
        sessionStorage.setItem('escolhaEntrega', escolhaEntrega.value);
        limparFormulario();
      }
    }
  }

  // let botaoRetirada = document.querySelector("#botaoRetirada")
  // botaoRetirada.addEventListener("click", () => {
  //   naoRetirar();
  //      // window.location.href = '/lancamentos/compras/comprasFeitas.html';
  //  // enviarZap();
  // })


  function enviarZap() {

  
    let textoParaEnviar = '';

    for (let i = 0; i < sessionStorage.length; i++) {
      const chaveProduto = `escolhaProduto_${i}`;
      const chaveValor = `escolhaProdutoValor_${i}`;
      const chaveCores = `cores_${i}`;
      const chaveTamanho = `tamanhos_${i}`;
      const chaveQuantidade = `opcoes_${i}`;

      const escolhaProduto = sessionStorage.getItem(chaveProduto);
      const escolhaValor = parseFloat(sessionStorage.getItem(chaveValor));
      const escolhaCores = sessionStorage.getItem(chaveCores);
      const escolhaTamanho = sessionStorage.getItem(chaveTamanho);
      const escolhaQuantidade = parseFloat(sessionStorage.getItem(chaveQuantidade));


      if (escolhaProduto && escolhaQuantidade && escolhaCores && escolhaTamanho && !isNaN(escolhaValor)) {
        const soma = escolhaValor * escolhaQuantidade;
        textoParaEnviar += `
          \n*SANDÁLIA:* ${escolhaProduto}
          *VALOR:* R$ ${escolhaValor.toFixed(2)}
          *COR:* ${escolhaCores}
          *TAMANHO:* ${escolhaTamanho}
          *QUANTIDADE (PAR):* ${escolhaQuantidade}
          *VALOR TOTAL:* R$ ${soma.toFixed(2)}
        `;
      }
    }
    textoParaEnviar += `\n*VALOR TOTAL GERAL:*  R$ ${somaTotal.toFixed(2)}`
    const codigoPais = '55';
    const numeroTelefone = '87991614277';

    const linkWhatsApp = `https://wa.me/${codigoPais}${numeroTelefone}?text=${encodeURIComponent(textoParaEnviar)}`;
    window.open(linkWhatsApp, '_blank');
  }


  let botaoFinalizar = document.querySelector("#finalizar") //ativa o botão de enviar os dados via zap
  botaoFinalizar.addEventListener("click", enviarZap)