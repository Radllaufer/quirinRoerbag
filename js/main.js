const setLeaderboardTransitions = () => {
    const slideLeft = document.getElementById('slideLeft');
    const slideRight = document.getElementById('slideRight');

    slideRight.style.width = '50%';

    const moveRight = () => {

    }

    const moveLeft = () => {

    }

    slideLeft.addEventListener('mouseover', moveRight);
    slideRight.addEventListener('mouseover', moveLeft);
}



window.onload = () => {
    setLeaderboardTransitions();
}