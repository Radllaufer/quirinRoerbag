/* -- Functionality -- */
    setLeaderboardHeight = () => {
        const headerHeight = document.querySelector('header').offsetHeight;
        main.style.height = `${(window.innerHeight - headerHeight) / get.fontSize()}rem`;
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
