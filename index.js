let timer1 = 60;
let timer2 = 60;

function startGame() {
    generateQuestion(1);
    generateQuestion(2);
    updateTimers();
}

function generateQuestion(player) {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let question = `${a} + ${b} = ?`;
    document.getElementById(`question${player}`).textContent = question;
    document.getElementById(`answer${player}`).dataset.answer = a + b;
}

function submitAnswer(player) {
    let answer = document.getElementById(`answer${player}`).value;
    let correctAnswer = document.getElementById(`answer${player}`).dataset.answer;
    if (answer == correctAnswer) {
        if (player === 1) {
            timer1 += 5;
            timer2 -= 3;
        } else {
            timer2 += 5;
            timer1 -= 3;
        }
        generateQuestion(player);
    } else {
        // 不正解の場合、特にペナルティはなし
    }
    document.getElementById(`answer${player}`).value = ''; // 回答をクリア
    checkGameOver();
}

function updateTimers() {
    if (timer1 <= 0 || timer2 <= 0) {
        alert(`ゲーム終了！${timer1 <= 0 ? 'プレイヤー2の勝ちです！' : 'プレイヤー1の勝ちです！'}`);
        return;
    }
    document.getElementById('timer1').textContent = timer1;
    document.getElementById('timer2').textContent = timer2;
    setTimeout(updateTimers, 1000);
    timer1--;
    timer2--;
}

function checkGameOver() {
    if (timer1 <= 0 || timer2 <= 0) {
        let winner = timer1 <= 0 ? 'プレイヤー2' : 'プレイヤー1';
        alert(`${winner}の勝ちです！`);
        // ゲーム終了後、再開するためにはページをリロードするなどの処理が必要
    }
}

startGame();
