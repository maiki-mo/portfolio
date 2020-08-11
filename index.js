(() => {
    let init = false;
    let deg = 0;
    let likeARecordBaby;

    const youSpinMeRightRound = (event) => {
        const babyRightRound = () => {
            event.target.style.transform = `rotate(${deg}deg)`;
            deg += 1;
        };
        const roundRoundRoundRound = () => clearInterval(likeARecordBaby);
        if (init) {
            event.target.style.transform = 'rotate(0deg)';
            init = false;
            deg = 0;
            roundRoundRoundRound()
        } else {
            init = true;
            likeARecordBaby = setInterval(babyRightRound, 1000);
        }
    };

    const icons = document.getElementById('construction-gif');

    icons.onclick = youSpinMeRightRound;
})();
