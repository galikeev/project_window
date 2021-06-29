const calcScroll = () => {

    let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth; /* от блока с полной шириной отнимаем блок с отступами и контентом и получим размер скролла */
        div.remove();

        return scrollWidth;

};

export default calcScroll;