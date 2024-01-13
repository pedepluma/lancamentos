document.addEventListener('DOMContentLoaded', () => {
    const nomeModelo = sessionStorage.getItem('nomeProduto');
    const valorModelo = parseFloat(sessionStorage.getItem('valorProduto'));
    const cor = sessionStorage.getItem('escolhaCor');
    const tamanho = sessionStorage.getItem('escolhaTamanho');
    const quantidade = sessionStorage.getItem('opcaoQuantidade')
    // const quantidade
    
    document.querySelector('#nomeproduto').innerHTML = `
<span style="font-weight: bold;">PRODUTO: </span> ${nomeModelo} - <span style="font-weight: bold;"> VALOR R$</span> ${valorModelo.toFixed(2)}
    `;

    document.querySelector('#cor').innerHTML = `
    <span style="font-weight: bold;"> COR: </span> ${cor}
    `;

    document.querySelector('#tamanho').innerHTML = `
    <span style="font-weight: bold;">TAMANHO: </span> ${tamanho}
    `;

    document.querySelector('#quantidade').innerHTML = `
    <span style="font-weight: bold;"> QUANTIDADE: </span> ${quantidade}
    `

    function enviarZap() {
        const textoParaEnviar = `
    *PRODUTO:* ${nomeModelo}
    *VALOR:* R$ ${valorModelo}
    *COR:* ${cor}
    *TAMANHO:* ${tamanho}
    *QUANTIDADE:* ${quantidade}
    `
        const codigoPais = '55';
        const numeroTelefone = '87991614277';

        const linkWhatsApp = `https://wa.me/${codigoPais}${numeroTelefone}?text=${encodeURIComponent(textoParaEnviar)}`;
        window.open(linkWhatsApp, '_blank');
    }

    let botaoFinalizar = document.querySelector("#finalizar") //ativa o botão de enviar os dados via zap
    botaoFinalizar.addEventListener("click", enviarZap)
});

