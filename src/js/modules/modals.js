import calcScroll from './calcScroll';

const modals = () => {
    
    const scrollHide = calcScroll();
    /* Функция отвечает за привязку модального окна к определенному тригеру */
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
        
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                hideModal(windows);
                openModal(modal);
                document.body.style.marginRight = `${scrollHide}px`;
            });
        });

        close.addEventListener('click', () => {
            hideModal(windows);
            closeModal(modal);
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                hideModal(windows);
                closeModal(modal);
                document.body.style.marginRight = `0px`;
            }
        });

    }

    function openModal(item) {
        item.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(showModalByTime);
    }

    function closeModal(item) {
        item.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    function hideModal(item) {
        item.forEach(elem => {
            elem.style.display = 'none';
        });
    }

    const showModalByTime = setTimeout(() => {
        document.querySelector('.popup').style.display = 'block';
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scrollHide}px`;
    }, 60000);

    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, 'block');
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, 'block');
};

export default modals;