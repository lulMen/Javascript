const about = document.querySelector('.about');
const btns = about.querySelectorAll('.tab-btn');
const articles = about.querySelectorAll('.content');

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        // remove active from other buttons
        btns.forEach((btn) => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        // hide inactive articles
        articles.forEach((article) => {
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});