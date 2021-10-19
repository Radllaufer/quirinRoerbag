/* -- Functionality -- */
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
            if (html.offsetWidth <= 864) { /* check if mobile */
                return 12;
            } 
            return 16;
        },
    }

/* -- / -- */



/* -- Function Calls */
    const callDefault = () => {
        
    }

/* -- / -- */