let userScore = 0;
let compScore = 0;

const likes = document.querySelectorAll(".like");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const genCompLike = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game Was Draw. Play again.!!";
};

const showWinner = (userWin, userLike, compLike) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ...! Your ${userLike} beats ${compLike}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compLike} beats your ${userLike}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userLike) => {
    const compLike = genCompLike();

    if (userLike === compLike) {
        drawGame();
    } else {
        let userWin = true;
        if (userLike === "rock") {
            userWin = compLike === "paper" ? false : true;
        } else if (userLike === "paper") {
            userWin = compLike === "scissor" ? false : true;
        } else {
            userWin = compLike === "rock" ? false : true;
        }
        showWinner(userWin, userLike, compLike);
    }
};

likes.forEach((like) => {
    like.addEventListener("click", () => {
        const userLike = like.getAttribute("id");
        playGame(userLike);
    });
});
