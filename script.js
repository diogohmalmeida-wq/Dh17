// Data do aniversário (1 de setembro de 2026 às 19:00)
const destino = new Date("September 1, 2026 19:00:00").getTime();

function atualizarContagem() {
  const agora = new Date().getTime();
  const diferenca = destino - agora;

  if (diferenca <= 0) {
    document.getElementById("countdown").innerHTML = "🎉 É hoje!";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${dias} Dias • ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContagem, 1000);
atualizarContagem();

function confirmar() {
  const nome = document.getElementById("nome").value.trim();

  if (nome === "") {
    alert("Digite seu nome.");
    return;
  }

  const mensagem = `Olá, DH! Meu nome é ${nome} e confirmo minha presença no seu aniversário no dia 01/09 às 19:00. 🎉`;

  const url = `https://wa.me/351936562030?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

// Animação suave ao rolar
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
