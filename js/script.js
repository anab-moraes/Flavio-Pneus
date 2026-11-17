
// =========================
// INICIALIZAR ÍCONES
// =========================

if (window.lucide) {
    lucide.createIcons();
}


// =========================
// ELEMENTOS DO FORMULÁRIO
// =========================

const formulario = document.getElementById("form-login");

const usuario = document.getElementById("usuario");

const senha = document.getElementById("senha");

const botaoOlho = document.getElementById("mostrar-senha");

const mensagem = document.getElementById("mensagem");


// =========================
// MOSTRAR E OCULTAR SENHA
// =========================

botaoOlho.addEventListener("click", function () {

    const estaOculta = senha.type === "password";

    senha.type = estaOculta ? "text" : "password";

    botaoOlho.setAttribute(
        "aria-label",
        estaOculta ? "Ocultar senha" : "Mostrar senha"
    );

    botaoOlho.setAttribute(
        "aria-pressed",
        String(estaOculta)
    );

    const icone = botaoOlho.querySelector("svg, i");

    if (icone && window.lucide) {

        const novoIcone = document.createElement("i");

        novoIcone.setAttribute(
            "data-lucide",
            estaOculta ? "eye-off" : "eye"
        );

        icone.replaceWith(novoIcone);

        lucide.createIcons();
    }

});


// =========================
// VALIDAR FORMULÁRIO
// =========================

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const valorUsuario = usuario.value.trim();
    const valorSenha = senha.value;

    mensagem.textContent = "";
    mensagem.style.color = "#d00012";

    // VERIFICAR CAMPOS VAZIOS

    if (valorUsuario === "" || valorSenha === "") {

        mensagem.textContent = "Preencha todos os campos.";

        return;
    }

    // VALIDAR FORMATO DO E-MAIL

    const emailValido =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorUsuario);

    // VALIDAR FORMATO DO CPF

    const cpfNumeros = valorUsuario.replace(/\D/g, "");

    const cpfFormatoValido = /^\d{11}$/.test(cpfNumeros);

    if (!emailValido && !cpfFormatoValido) {

        mensagem.textContent = "Digite um e-mail ou CPF válido.";

        return;
    }

    // VALIDAR TAMANHO DA SENHA

    if (valorSenha.length < 6) {

        mensagem.textContent =
            "A senha deve ter pelo menos 6 caracteres.";

        return;
    }

    // FORMULÁRIO VALIDADO

    mensagem.style.color = "#16803c";

    mensagem.textContent =
        "Formulário validado! Login demonstrativo.";

    window.location.href = "./pages/inicio.html";

});
