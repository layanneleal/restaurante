function calcularPreco() {
  //Cria referência aos elemetos da página
  let inQuilo = document.getElementById('inQuilo')
  let inConsumo = document.getElementById('inConsumo')
  let outValor = document.getElementById('outValor')

  //Obtem contéudo dos campos de entrada
  let quilo = Number(inQuilo.value)
  let consumo = Number(inConsumo.value)

  //Calcula o valor a ser pago
  let valor = (quilo / 1000) * consumo

  //Altera o conteúdo da linha de resposta 
  outValor.textContent = 'Valor a pagar R$: '+ valor.toFixed(2)
}
  //Cria referência ao elemento btCalcular
  let btCalcular = document.getElementById('btCalcular')

  //Registra um evento associado ao botão para carregar uma função
  btCalcular.addEventListener('click', calcularPreco)
