fetch("menu.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("menu-container").innerHTML = data;

    // Seleciona os elementos do menu mobile
    const btnAbrir = document.getElementById("btn-menu");
    const btnFechar = document.getElementById("btn-fechar");
    const menuMobile = document.getElementById("menu-mobile");
    const overlayMenu = document.getElementById("overlay-menu");
    const menuLinks = document.querySelectorAll(".menu-mobile nav ul li a");

    // Função para abrir o menu mobile
    btnAbrir.addEventListener("click", () => {
      menuMobile.classList.add("abrir-menu");
      overlayMenu.style.display = "block";
    });

    // Função para fechar o menu mobile
    btnFechar.addEventListener("click", () => {
      menuMobile.classList.remove("abrir-menu");
      overlayMenu.style.display = "none";
    });

    // Fechar o menu mobile ao clicar no overlay
    overlayMenu.addEventListener("click", () => {
      menuMobile.classList.remove("abrir-menu");
      overlayMenu.style.display = "none";
    });

    // Fechar o menu mobile ao clicar em qualquer link do menu
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuMobile.classList.remove("abrir-menu");
        overlayMenu.style.display = "none";
      });
    });
  })
  .catch((error) => console.error("Erro ao carregar o menu:", error));

// Função para copiar código
// Seleciona todos os elementos com a classe 'copyable'
const copyableElements = document.querySelectorAll(".copyable");

// Adiciona o evento de clique a cada elemento
copyableElements.forEach(function (element) {
  element.addEventListener("click", function () {
    // Seleciona o texto dentro do <code>
    const text = this.innerText;

    // Copia o texto para a área de transferência
    navigator.clipboard
      .writeText(text)
      .then(function () {
        // Exibe o popup de confirmação
        const popup = document.getElementById("popup");
        popup.classList.add("show");

        // Remove o popup após 3 segundos
        setTimeout(function () {
          popup.classList.remove("show");
        }, 3000);
      })
      .catch(function (err) {
        console.error("Erro ao copiar o texto: ", err);
      });
  });
});
