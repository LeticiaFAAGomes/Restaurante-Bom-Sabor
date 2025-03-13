/**
 * Esta função monitora o scroll, decidindo entre mostrar ou não o botão de id `scrollbutton`.
 */
function monitorarScroll() {
  scrollBtn = document.getElementById("scrollbutton");
  if (window.scrollY > 0) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

/**
 * Esta função recebe um elemento e a partir do id deste elemento navega até ele.
 * @param {string} elemento - Refere-se ao nome do id elemento a ser navegado.
 */
function goTo(elemento) {
  window.scroll({ top: document.getElementById(elemento).offsetTop, behavior: "smooth" });
}

/**
 * Esta função alterna entre o menu mobile ter a classe `abrir` ou não.
 */
function abrirMenu() {
  document.querySelector(".menu_mobile").classList.toggle("abrir");
}

window.addEventListener("scroll", monitorarScroll);
