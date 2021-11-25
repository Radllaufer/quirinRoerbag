/* -- Window sizing and responsiveness -- */
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const main = document.querySelector('main');

    const get = {
        htmlWidth() {
            return html.offsetWidth;
        },
        htmlHeight() {
            return html.offsetHeight;
        },
        fontSize() {
            const htmlStyle = window.getComputedStyle(html);

            switch (htmlStyle.getPropertyValue('font-size')) {
                case '16px':
                    return 16;
                case '12px':
                    return 12;
                case '10px':
                    return 10;
                default:
                    console.log('invalid font-size used');
                    break;
            }
        },
        orientation() {
            if (this.htmlWidth() < this.htmlHeight()) {
                return 'portrait';
            }

            if (this.htmlWidth() > this.htmlHeight()) {
                return 'landscape';
            }
        },
        isMobile() {
            if ((this.htmlWidth() <= 749 && this.htmlHeight() <= 999) || 
                (this.htmlWidth() <= 999 && this.htmlHeight() <= 749) ) {
                return true;
            }
            return false;
        },
    }

/* -- / -- */



/* -- Spotlight Slider -- */
    const slDev1 = document.getElementById('slDev1');
    const slDev2 = document.getElementById('slDev2');
    const slCycling1 = document.getElementById('slCycling1');
    const slCycling2 = document.getElementById('slCycling2');
    const elementsArray = [slDev1, slDev2, slCycling1, slCycling2];


    let positionsArray = ['front', 'right', 'left', 'back']; // arranged clockwise

    const getRandomPosition = (el, x) => {
        const randomNumber = Math.floor( Math.random() * x );
     
        el.classList.add( positionsArray[ randomNumber ] );
        positionsArray.splice( positionsArray.indexOf( positionsArray[ randomNumber ]), 1 );
    }

    const setInitialPositions = () => {
        for (let i = 0; i < elementsArray.length; i++) {
            getRandomPosition( elementsArray[i], positionsArray.length);
        }
    }
    

    const rotateSpotlightSlider = (e) => {
        const eventEl = e.target.parentElement;
        let oldPositions = [];
        let newPositions = [];

        for (let i = 0; i < elementsArray.length; i++) {
            oldPositions.push( { domId: elementsArray[i].id, class: elementsArray[i].classList[1] }, );
            elementsArray[i].classList.remove( elementsArray[i].classList[1] );
        }

        const eventElObject = oldPositions.find(el => el.domId === eventEl.id); 

        newPositions = oldPositions; // use lodash deepCopy

        if (eventElObject.class === 'right') {
            for (let i = 0; i < newPositions.length; i++) {
                switch (newPositions[i].class) { // arranged by change
                    case 'right':
                        newPositions[i].class = 'front';
                        break;
                
                    case 'front':
                        newPositions[i].class = 'left';
                        break;

                    case 'left':
                        newPositions[i].class = 'back';
                        break;

                    case 'back':
                        newPositions[i].class = 'right';
                        break;

                    default:
                        break;
                }
            }
        }

        // console.log(newPositions);

        if (eventElObject.class === 'left') {

        }
    }

    const defineSliderEventListeners = () => {
        const front = document.querySelector('.front');
        const right = document.querySelector('.right');
        const left = document.querySelector('.left');

        // front.addEventListener('click', );
        right.addEventListener('click', rotateSpotlightSlider);
        left.addEventListener('click', rotateSpotlightSlider);
    }

/* -- / -- */



/* -- Function Calls */
    const callDefault = () => {
        setInitialPositions();
        defineSliderEventListeners();
    }

/* -- / -- */



/* -- Test area -- */
/*
let countArray = [0, 0, 0, 0];
let x = 4;
const foo = (() => {
    const randomNumber = () => {
        return Math.floor(Math.random() * x);
    }

    while (x > 0) {
        for (let i = 0; i < 1000000; i++) {
            countArray[randomNumber()] += 1;
        }
        x--;
        console.log(countArray);
        countArray = [0, 0, 0, 0];
    }
})();
*/

/* -- / -- */