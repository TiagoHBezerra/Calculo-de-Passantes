const btn = document.querySelector("#calcular");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const qntPcs = document.querySelector("#quantPecas");
  const qpValue = qntPcs.value;

  const qntPass = document.querySelector("#quantPass");
  const qpsValue = qntPass.value;

  const tamTira = document.querySelector("#tamTira");
  const ttValue = tamTira.value;

  const tamPassante = document.querySelector(
    'input[name="tamPass"]:checked'
  ).value;
  const tpsValue = tamPassante;

  const total = Math.floor((qpValue * qpsValue) / (ttValue / tpsValue) * 1.1);

  alert(`Você precisa fazer ${total} tiras de passante. Já com margem de segurança de 10% a mais de passantes`)
});
