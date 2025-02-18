// const cliqueBotao = document.querySelector('.botao');
// const numeroConselho = document.querySelector('.card');
// const conselho = document.querySelector('.conselho');

// async function obterConselho() {
//     try {
//         const resposta = await fetch('https://api.adviceslip.com/advice');

//         if(!resposta.ok) {
//             throw new Error('Erro ao obter conselho');
//         }

//         const conteudoDoConselho = await resposta.json();
//         const obtendoCOnselho = `Advice #${conteudoDoConselho.slip.id}`;
//         const textoDoConselho = `"${conteudoDoConselho.slip.advice}"`;

//         numeroConselho.innerText = obtendoCOnselho;
//         conselho.innerText = textoDoConselho;
//     } catch (error) {
//         console.Error("Erro ao obter conselho", error);
//     }
// }

// cliqueBotao.addEventListener('click', obterConselho);
// obterConselho();

// const cliqueBotao = document.querySelector('.botao');
// const numeroConselho = document.querySelector('.card h2');  // Seletor para o h2 dentro de .card
// const conselho = document.querySelector('.card p');  // Seletor para o p dentro de .card

// async function obterConselho() {
//     try {
//         const resposta = await fetch('https://api.adviceslip.com/advice');

//         if (!resposta.ok) {
//             throw new Error('Erro ao obter conselho');
//         }

//         const conteudoDoConselho = await resposta.json();
//         const obtendoConselho = `Advice #${conteudoDoConselho.slip.id}`;
//         const textoDoConselho = `"${conteudoDoConselho.slip.advice}"`;

//         numeroConselho.innerText = obtendoConselho;
//         conselho.innerText = textoDoConselho;  // Agora está atualizando o conteúdo correto

//     } catch (error) {
//         console.error("Erro ao obter conselho", error);
//     }
// }

// cliqueBotao.addEventListener('click', obterConselho);
// obterConselho();  // Para já carregar o primeiro conselho ao abrir a página



const botao = document.querySelector(`.botao`);
const numeroConselho = document.querySelector(`.card h2`);
const conselho = document.querySelector(`.card p`);

async function obtendoConselho() {
    try {
        const resposta = await fetch(`https://api.adviceslip.com/advice`);

        if(!resposta.ok) {
            throw new Error("Erro ao obter conselho");
                        
        }

        const conteudoDoConselho = await resposta.json();
        const obtendoConselho = `Conselho #${conteudoDoConselho.slip.id}`;
        const textoDoConselho = `"${conteudoDoConselho.slip.advice}"`;

        numeroConselho.innerText = obtendoConselho;
        conselho.innerText = textoDoConselho;

        
    } catch (error) {
        
        console.log("Erro ao obter conselho", error);
    }
}

botao.addEventListener(`click`, obtendoConselho);
obtendoConselho();