document.addEventListener("DOMContentLoaded", function () {
  // Alternar menu de navegação responsivo
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", function () {
          navLinks.classList.toggle("active");
      });
  }

  // Rolagem suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (event) {
          event.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
              target.scrollIntoView({ behavior: "smooth" });
          }
      });
  });

  // Botão "voltar ao topo"
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
      window.addEventListener("scroll", function () {
          if (window.scrollY > 300) {
              backToTop.style.display = "block";
          } else {
              backToTop.style.display = "none";
          }
      });

      backToTop.addEventListener("click", function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }

  // Validação de formulário
  const form = document.getElementById("contact-form");
  if (form) {
      form.addEventListener("submit", function (event) {
          event.preventDefault();
          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();

          if (name === "" || email === "") {
              alert("Por favor, preencha todos os campos.");
          } else {
              alert("Formulário enviado com sucesso!");
              form.reset();
          }
      });
  }
});
