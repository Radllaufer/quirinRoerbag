/* -- Main -- */
    const lb = document.getElementById('lb');
    const lbWindow = document.getElementById('lbWindow');
    const lbFilter = document.getElementById('lbFilter');
    const bgOverlayDev = document.getElementById('bgOverlayDev');
    const bgOverlayCycling = document.getElementById('bgOverlayCycling');

    const setLbHeight = () => {
        const headerHeight = document.querySelector('header').offsetHeight;
        main.style.height = `${(window.innerHeight - headerHeight) / get.fontSize()}rem`;
    }

    const setLbWidths = (pos) => {
        let valueArray = [50, 50, 90.909091, 90.909091];

        if (pos === 'left') {
            valueArray = [55, 45, 100, 81.818181 /* 90.9 - 9.09 */];
        }
        
        if (pos === 'right') {
            valueArray = [45, 55, 81.818181, 100];
        }

        if (pos === 'portrait') {
            valueArray = [100, 100, 100, 100];
        }

        lbWindow.style.width = `${ valueArray[0] }%`;
        lbFilter.style.width = `${ valueArray[1] }%`;
        bgOverlayDev.style.width = `${ valueArray[2] }%`;
        bgOverlayCycling.style.width = `${ valueArray[3] }%`;

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

    const defineEventListeners = (addEL, portrait) => {
        if (addEL) {
            lb.addEventListener('mouseover', checkSide);
            lb.addEventListener('mouseleave', setLbWidths);
            setLbWidths();
            return;
        }

        if (!addEL) {
            lb.removeEventListener('mouseover', checkSide);
            lb.removeEventListener('mouseleave', setLbWidths);
            
            if (portrait) {
                setLbWidths('portrait');
            }

            if (!portrait) {
                setLbWidths();
            }
            return;
        }
    }



    const removeTransitionsOnOrientationChange = (toggle) => {
        console.log(get.htmlWidth());
        console.log(get.htmlHeight());

        if (toggle === 'disable') {
            lbWindow.style.transition = 'none';
            lbFilter.style.transition = 'none';
            bgOverlayDev.style.transition = 'none';
            bgOverlayCycling.style.transition = 'none';
            return;
        }

        if (toggle === 'enable') {
            lbWindow.style.transition = 'all 700ms 50ms';
            lbFilter.style.transition = 'all 700ms 50ms';
            bgOverlayDev.style.transition = 'all 700ms 50ms';
            bgOverlayCycling.style.transition = 'all 700ms 50ms';
            return;
        }
    }

    const rTOC = (toggle) => {
        removeTransitionsOnOrientationChange(toggle);
    }

/* -- / -- */



/* -- Function Calls -- */
    window.onload = () => {
        setLbHeight();

        ( () => {
            if (get.orientation() === 'landscape' && get.isMobile() === false) {
                defineEventListeners(true);
                return;
            }

            if (get.orientation() === 'portrait') {
                defineEventListeners(false, true);
                return;
            }

            if (get.orientation() === 'landscape' && get.isMobile() === true) {
                defineEventListeners(false);
                return;
            }
        } )();
    }

    window.onresize = () => {
        setLbHeight();

        rTOC('disable');

        ( () => {
            if (get.orientation() === 'landscape' && get.isMobile() === false) {
                defineEventListeners(true);
                return;
            }

            if (get.orientation() === 'portrait') {
                defineEventListeners(false, true);
                return;
            }

            if (get.orientation() === 'landscape' && get.isMobile() === true) {
                defineEventListeners(false);
                return;
            }
        } )();
        
        rTOC('enable');
    }
    
/* -- / -- */
