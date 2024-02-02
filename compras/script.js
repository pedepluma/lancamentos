


let somaTotal = 0;
const carrinhoCompras = () => {
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
  CriaDiv()
  // Atualiza o valor total no documento
  document.querySelector(".valor").innerHTML = `<span style="font-weight: bold;">VALOR TOTAL GERAL:</span> R$ ${somaTotal.toFixed(2)}`;

}
document.addEventListener('DOMContentLoaded', carrinhoCompras);


//----------------------zap
export function enviarZap() {


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

  const endereco = JSON.parse(sessionStorage.getItem('endereco')) || {};
  const retiradaProduto = sessionStorage.getItem('escolhaEntrega')

  const formaPagamento = sessionStorage.getItem('formaPagamento');
  const valorTroco = sessionStorage.getItem('Vtroco');

  // Verifica se o endereço foi preenchido
  const enderecoPreenchido = (endereco.nomeRua || endereco.numeroCasa || endereco.cep || endereco.cidade || endereco.bairro || endereco.referencia);

  let enderecoTexto = '';
  if (enderecoPreenchido) {
    enderecoTexto = `
               \n*ENDEREÇO PARA ENTREGA*
               *Nome da Rua:* ${endereco.nomeRua || 'Não fornecido'}
               *Número da Casa/AP:* ${endereco.numeroCasa || 'Não fornecido'}
               *CEP:* ${endereco.cep || 'Não fornecido'}
               *Cidade:* ${endereco.cidade || 'Não fornecido'}
               *Bairro:* ${endereco.bairro || 'Não fornecido'}
               *Ponto de Referência:* ${endereco.referencia || 'Não fornecido'}
           `;
  }

  textoParaEnviar += `\n*VALOR TOTAL GERAL:*  R$ ${somaTotal.toFixed(2)}`

  textoParaEnviar += ` \n\n*RETIRADA NO LOCAL*: ${retiradaProduto}`

  textoParaEnviar += `${enderecoTexto}`

  if (formaPagamento) {
    textoParaEnviar += `
      \n*FORMA DE PAGAMENTO: *${formaPagamento} 
    `;
  } 
  
  if (valorTroco) {
    textoParaEnviar += `
    \n*TROCO: * ${valorTroco}
    `;
  }
  



  const codigoPais = '55';
  const numeroTelefone = '87991614277';

  const linkWhatsApp = `https://wa.me/${codigoPais}${numeroTelefone}?text=${encodeURIComponent(textoParaEnviar)}`;
  window.open(linkWhatsApp, '_blank');
}
