document.addEventListener("DOMContentLoaded", () => {
    // Adiciona animações nos links do menu ao serem clicados
    const menuLinks = document.querySelectorAll(".nav ul li a");

    menuLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            // Suavemente rolar para a seção correspondente
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Botão interativo para destacar os álbuns
    const albumSection = document.querySelector("#albuns");
    const button = document.createElement("button");
    button.textContent = "Destacar Álbuns";
    button.style.marginTop = "20px";
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "#ff6f61";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {
        const albumListItems = document.querySelectorAll(".album-list li");
        albumListItems.forEach(item => {
            item.style.transition = "transform 0.3s, background-color 0.3s";
            item.style.transform = "scale(1.1)";
            setTimeout(() => {
                item.style.transform = "scale(1)";
                item.style.backgroundColor = "#ffd700"; // Dourado temporário
            }, 300);
        });
    });

    albumSection.appendChild(button);

    // Exibe mensagem de boas-vindas no console
    console.log("Bem-vindo à Fan Page da Taylor Swift!");
});
