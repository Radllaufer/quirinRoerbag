const setLeaderboardTransitions = () => {
    const slideLeft = document.getElementById('slideLeft');
    const slideRight = document.getElementById('slideRight');

    slideRight.style.width = '50%';

    const moveRight = () => {
        slideRight.style.width = '45%';
    }

    const moveLeft = () => {
        slideRight.style.width = '55%';
    }

    slideLeft.addEventListener('mouseover', moveRight);
    slideRight.addEventListener('mouseover', moveLeft);
}



window.onload = () => {
    setLeaderboardTransitions();
}