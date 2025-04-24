//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () => {

        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    });
});

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//         // console.log(event.currentTarget.parentElement.parentElement);

//         const question = event.currentTarget.parentElement.parentElement;

//         question.classList.toggle('show-text');
//     });
// });