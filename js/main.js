/* -- Main -- */
    setLeaderboardHeight = () => {
        const headerHeight = document.querySelector('header').offsetHeight;
        main.style.height = `${(window.innerHeight - headerHeight) / get.fontSize()}rem`;
    }

    const leaderboardHover = () => {
        const lb = document.getElementById('lb');
        const window = document.getElementById('window');
        const filter = document.getElementById('filter');
        const bgOverlayDev = document.getElementById('bgOverlayDev');
        const bgOverlayCycling = document.getElementById('bgOverlayCycling');

        const setLbWidths = (pos) => {
            let valueArray = [50, 50, 90.909091, 90.909091];

            if (pos === 'left') {
                valueArray = [55, 45, 100, 81.818181];
            }

            if (pos === 'right') {
                valueArray = [45, 55, 81.818181, 100];
            }

            window.style.width = `${valueArray[0]}%`;
            filter.style.width = `${valueArray[1]}%`;
            bgOverlayDev.style.width = `${valueArray[2]}%`;
            bgOverlayCycling.style.width = `${valueArray[3]}%`;

            return valueArray[0];
        }

        const checkSide = (e) => {
            let middle = lb.offsetWidth * (setLbWidths() / 100);

            if (e.clientX < middle) {
                setLbWidths('left');
                middle = lb.offsetWidth * (setLbWidths('left') / 100);
                return;
            }

            if (e.clientX >= middle) {
                setLbWidths('right');
                middle = lb.offsetWidth * (setLbWidths('right') / 100);
                return;
            }
        }

        lb.addEventListener('mouseover', checkSide);
        lb.addEventListener('mouseleave', setLbWidths);

        /* removeEventListener */
        
    }

/* -- / -- */



/* -- Function Calls -- */
    window.onload = () => {
        setLeaderboardHeight();
        leaderboardHover();
    }

    window.onresize = () => {
        setLeaderboardHeight();
        leaderboardHover();
    }
    
/* -- / -- */
