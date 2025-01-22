function handleActiveClass(parentSelector, itemSelector, activeClass) {
    const parent = document.querySelector(parentSelector);

    if (!parent) return;

    parent.addEventListener('click', (event) => {
        const target = event.target.closest(itemSelector);
        if (!target) return;

        parent.querySelectorAll(itemSelector).forEach((el) => {
            el.classList.remove(activeClass);
        });

        target.classList.add(activeClass);
    });
}

handleActiveClass('.menu', '.menu__item', 'menu__item--active');
handleActiveClass('.sidebar', '.sidebar__item', 'sidebar__item--highlighted');
handleActiveClass('.sidebar', '.sidebar__lang', 'sidebar__lang--active');

function toggleSidebar(openButtonSelector, closeButtonSelector, sidebarSelector, hiddenClass) {
    const openBtn = document.querySelector(openButtonSelector);
    const closeBtn = document.querySelector(closeButtonSelector);
    const sidebar = document.querySelector(sidebarSelector);

    if (!openBtn || !closeBtn || !sidebar) return;

    openBtn.addEventListener('click', () => {
        sidebar.classList.remove(hiddenClass);
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.add(hiddenClass);
    });
}

toggleSidebar('.burger-menu', '.burger-close', '.sidebar', 'sidebar--hidden');

function toggleClassOnClick(buttonSelector, targetSelector, toggleClass) {
    const button = document.querySelector(buttonSelector);
    const target = document.querySelector(targetSelector);

    if (!button || !target) return;

    button.addEventListener('click', () => {
        target.classList.toggle(toggleClass);
        button.textContent = target.classList.contains(toggleClass) ? 'Скрыть' : 'Показать все';
    });
}

toggleClassOnClick('.brands__expand-button', '.brands-wrapper', 'brands-wrapper--expanded');

