/* -- Functionality -- */
    setLeaderboardHeight = () => {
        if (get.fontSize() === 16) {
            main.style.height = `${(window.innerHeight / get.fontSize()) - 4.5}rem`;
            // "- 4.5" to accomodate for header
            return;
        }
        main.style.height = `${(window.innerHeight / get.fontSize()) - 6}rem`;
        // "6" for mobile styling
    }

/* -- / -- */



/* -- Function Calls -- */
    window.onload = () => {
        setLeaderboardHeight();
    }

    window.onresize = () => {
        setLeaderboardHeight();
    }
    
/* -- / -- */
