const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
    
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target; /* Тот элемент на котором произошло событие, куда кликнул пользователь */
            if (target && (target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) { /* Проверяем, что действительно кликнули в один из табов */
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
    });

};

export default tabs;