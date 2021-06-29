import calcScroll from './calcScroll';

const images = () => {

    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img'),
          scrollHide = calcScroll();

    imgPopup.classList.add('popup_img');
    workSection.appendChild(imgPopup);

    imgPopup.style.cssText = `
        justify-content: center;
        align-items: center;
        display: none;
    `;

    imgPopup.appendChild(bigImage);


    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) { /* Есть ли событие клик и есть класс превью */
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            const path = target.parentNode.getAttribute('href'); /* У элемента на котором произошло событие(img) обращаемся к его родителю и получаем нужный атрибут */
            bigImage.setAttribute('src', path); /* К изображению добавляем ссылку */
            bigImage.style.maxHeight = '90%';
            document.body.style.marginRight = `${scrollHide}px`;
        }

        if (target && target.matches('div.popup_img')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;

        }
    });

};

export default images;