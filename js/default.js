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
            if (html.offsetWidth <= 864) {
                return 12;
            } else {
                return 16;
            }
        },
    }

/* -- / -- */



/* -- Function Calls */
    const callDefault = () => {
        
    }

/* -- / -- */