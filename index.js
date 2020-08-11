(() => {
    let init = false;
    let deg = 0;
    let roundRoundRoundRound;

    const youSpinMeRightRound = (event) => {
        const babyRightRound = () => {
            event.target.style.transform = `rotate(${deg}deg)`;
            deg += 1;
        };
        const likeARecordBaby = () => clearInterval(roundRoundRoundRound);
        if (init) {
            event.target.style.transform = 'rotate(0deg)';
            init = false;
            deg = 0;
            likeARecordBaby()
        } else {
            init = true;
            roundRoundRoundRound = setInterval(babyRightRound, 1000);
        }
    };

    const icons = document.getElementById('construction-gif');

    icons.onclick = youSpinMeRightRound;
})();
