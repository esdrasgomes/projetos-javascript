// Variáveis

let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

// Eventos
// Resetando o quiz ao concluí-lo
document.querySelector('.scoreArea button').addEventListener('click', resetEvent);

// Funções
function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        // Calculo referente a barra de porcentagem
        let porcentagem = Math.floor((currentQuestion / questions.length) * 100);
        document.querySelector('.progress--bar').style.width = `${porcentagem}%`;

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = '';

        let optionsHtml = '';
        for (let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });
    } else {
        finishQuiz();
    }
}

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    // Verificando se a opção clicada é a correta (answer)
    if (questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
    } else {

    }

    // Depois que responder a pergunta atual, passar para a próxima pergunta
    currentQuestion++;
    showQuestion();
}

// Função para mostrar as informações ao finalizar o quiz
function finishQuiz() {
    let points = Math.floor((correctAnswers / questions.length) * 100);

    if (points <= 30) {
        document.querySelector('.scoreText1').innerHTML = `Não foi dessa vez!`;
        document.querySelector('.scorePorcentagem').style.color = '#FF0000';
    } else if (points > 30 && points < 70) {
        document.querySelector('.scoreText1').innerHTML = `Estude um pouco mais!`;
        document.querySelector('.scorePorcentagem').style.color = '#FFFF00';
    } else if (points >= 70) {
        document.querySelector('.scoreText1').innerHTML = `Parabéns!`;
        document.querySelector('.scorePorcentagem').style.color = '#0D630D';
    }

    document.querySelector('.scorePorcentagem').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`;

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = '100%';
}

// Função para resetar o quiz ao concluí-lo
function resetEvent() {
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}