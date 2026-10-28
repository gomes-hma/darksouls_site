
const cards = document.querySelectorAll(".card");
const resultado = document.querySelector("#resultado");

cards.forEach(card => {
  card.addEventListener("click", () => {

    // Destaca somente o card escolhido
    cards.forEach(c => {
      c.classList.remove("selecionado");
    });

    card.classList.add("selecionado");

    // Identifica o personagem e sua imagem
    const personagem = card.dataset.personagem;
    const imagem = card.dataset.imagem;

    let mensagem = "";

    // Define a mensagem com switch
    switch (personagem) {
      case "Malenia":
        mensagem =
          "Você escolheu Malenia, Lâmina de Miquella!";
        break;

      case "art":
        mensagem =
          "Você escolheu Artorias, o Andarilho do Abismo!";
        break;

      case "soc":
        mensagem =
          "Você escolheu Soul of Cinder, o Protetor da Chama!";
        break;

      default:
        mensagem = "Personagem inválido!";
    }

    // Atualiza o texto da página
    resultado.textContent = mensagem;

    // Altera o fundo para a imagem do personagem
    document.body.style.backgroundImage =
      `url("${imagem}")`;

    // Exibe o alerta
    alert(mensagem);

  });
});
