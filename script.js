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
function applyCopyButtonFunctionality() {
  document.querySelectorAll(".copy-button").forEach((button) => {
    button.addEventListener("click", function () {
      const codeBlock = document.querySelector(
        this.getAttribute("data-clipboard-target")
      );
      const codeText = codeBlock.textContent;
      navigator.clipboard
        .writeText(codeText)
        .then(() => {
          alert("Código copiado com sucesso!");
        })
        .catch((err) => {
          console.error("Erro ao copiar o código:", err);
        });
    });
  });
}

// Chama a função para aplicar a funcionalidade de copiar código
applyCopyButtonFunctionality();

// Função para alternar entre tema claro e escuro
const toggleThemeButton = document.getElementById("toggle-theme");
const currentTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(currentTheme);

toggleThemeButton.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  document.body.classList.remove("light", "dark");
  document.body.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
});
