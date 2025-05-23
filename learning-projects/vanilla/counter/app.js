// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        switch (true) {
            case count > 0:
                value.style.color = "green";
                break;
            case count < 0:
                value.style.color = "red";
                break;
            case count === 0:
                value.style.color = "black";
                break;
            default:
                break;
        }
        value.textContent = count;
    });
});