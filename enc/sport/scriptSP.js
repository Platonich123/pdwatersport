document.querySelectorAll('[data-link]').forEach(item => {
    item.addEventListener('click', function () {
        const link = this.dataset.link;
        if (link === 'back') {
            window.history.back(); // Возвращаемся назад
        } else {
            window.location.href = link; // Переходим по ссылке
        }
    });
});