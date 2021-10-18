/* -- Functionality -- */
    setLeaderboardHeight = () => {
        main.style.height = `${(window.innerHeight / get.fontSize()) - 4.5}rem`;
        // "- 4.5" to accomodate for header
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
