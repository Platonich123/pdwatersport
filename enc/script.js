document.querySelectorAll('.button-item').forEach(item => {
    item.addEventListener('click', function () {
        const link = this.dataset.link; 
        if (link) {
            window.location.href = link; 
        }
    });
});