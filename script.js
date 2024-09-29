// Função para navegação dinâmica
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const page = this.getAttribute("href");
    fetch(page)
      .then((response) => response.text())
      .then((html) => {
        document.querySelector("main").innerHTML = html;
        // Reaplica a funcionalidade de copiar código após o carregamento dinâmico
        applyCopyButtonFunctionality();
      })
      .catch((error) => console.error("Erro ao carregar a página:", error));
  });
});

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
