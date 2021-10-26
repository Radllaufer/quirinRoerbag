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
    }

/* -- / -- */



/* -- Function Calls */
    const callDefault = () => {
    
    }

/* -- / -- */