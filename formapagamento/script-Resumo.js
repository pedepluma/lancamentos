document.addEventListener('DOMContentLoaded', function () {
  
  //FORMA DE PAGAMENTO
  let formasPagamento = document.getElementsByName('pagamento');
  for (let i = 0; i < formasPagamento.length; i++) {
    formasPagamento[i].addEventListener('change', mostrarTroco);
  }

  function mostrarTroco() {
    let escolhaPagamento = document.querySelector('input[name="pagamento"]:checked').value;
    let trocoSection = document.getElementById('trocoSection');

    if (escolhaPagamento === 'DINHEIRO') {
      trocoSection.style.display = 'block';
    } else {
      trocoSection.style.display = 'none';
    }
  }



  //ENVIAR ZAP----------------------------------------------
  function enviarMensagemWhatsApp() {
   
    const textoParaEnviar = `
           *
           \n*FORMA DE PAGAMENTO*
           ${document.querySelector('input[name="pagamento"]:checked').value}
           ${document.querySelector('input[name="pagamento"]:checked').value === 'DINHEIRO' && document.getElementById('valorTroco').value.trim() !== '' ? '\n*VALOR DE TROCO (R$)*\n' + document.getElementById('valorTroco').value : ''}
          
       `; 
  }
})