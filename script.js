/* ==========================================================================
PORTFÓLIO DEV - SCRIPT PRINCIPAL
Lógica desenvolvida em JavaScript Vanilla
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ALTERNÂNCIA DE TEMA (DARK / LIGHT MODE)
    const botaoTema = document.getElementById("botao-tema");
    const iconeTema = botaoTema.querySelector("i");

    botaoTema.addEventListener("click", () => {
        document.body.classList.toggle("tema-escuro");
        
        if (document.body.classList.contains("tema-escuro")) {
            iconeTema.className = "bi bi-sun-fill";
        } else {
            iconeTema.className = "bi bi-moon-stars-fill";
        }
    });

    // 2. EFEITO MÁQUINA DE ESCREVER NA SEÇÃO HERO
    const elementoTexto = document.getElementById("texto-digitado");
    const frasesApresentacao = [
        "Estudante de Desenvolvimento Full Stack",
        "Especializando em Front-end",
        "Futura Desenvolvedora Back-end & Mobile"
    ];
    
    let indiceFrase = 0;
    let indiceCaractere = 0;
    let estaApagando = false;

    function executarEfeitoDigitacao() {
        const fraseAtual = frasesApresentacao[indiceFrase];

        if (estaApagando) {
            elementoTexto.textContent = fraseAtual.substring(0, indiceCaractere - 1);
            indiceCaractere--;
        } else {
            elementoTexto.textContent = fraseAtual.substring(0, indiceCaractere + 1);
            indiceCaractere++;
        }

        let velocidade = estaApagando ? 50 : 100;

        if (!estaApagando && indiceCaractere === fraseAtual.length) {
            velocidade = 2000; // Pausa no final da frase
            estaApagando = true;
        } else if (estaApagando && indiceCaractere === 0) {
            estaApagando = false;
            indiceFrase = (indiceFrase + 1) % frasesApresentacao.length;
            velocidade = 500;
        }

        setTimeout(executarEfeitoDigitacao, velocidade);
    }

    executarEfeitoDigitacao();

    // 3. MENU HAMBÚRGUER MOBILE
    const botaoMenuMobile = document.getElementById("botao-menu-mobile");
    const menuNavegacao = document.getElementById("menu-navegacao");

    botaoMenuMobile.addEventListener("click", () => {
        menuNavegacao.classList.toggle("ativo");
        const iconeMenu = botaoMenuMobile.querySelector("i");
        
        if (menuNavegacao.classList.contains("ativo")) {
            iconeMenu.className = "bi bi-x-lg";
        } else {
            iconeMenu.className = "bi bi-list";
        }
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll(".link-menu").forEach(link => {
        link.addEventListener("click", () => {
            menuNavegacao.classList.remove("ativo");
            botaoMenuMobile.querySelector("i").className = "bi bi-list";
        });
    });

    // 4. BOTÃO VOLTAR AO TOPO
    const botaoTopo = document.getElementById("botao-topo");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            botaoTopo.classList.add("visivel");
        } else {
            botaoTopo.classList.remove("visivel");
        }
    });

    botaoTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 5. ANO DINÂMICO NO RODAPÉ
    const elementoAno = document.getElementById("ano-atual");
    elementoAno.textContent = new Date().getFullYear();

    // 6. ANIMAÇÃO DE FADE-IN EM CADA SEÇÃO DURANTE A ROLAGEM
    const secoesOcultas = document.querySelectorAll(".secao-oculta");

    const observadorScroll = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("secao-visivel");
            }
        });
    }, { threshold: 0.1 });

    secoesOcultas.forEach(secao => observadorScroll.observe(secao));
});