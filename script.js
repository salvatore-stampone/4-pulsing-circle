const body = document.querySelector('body');
const firstCircle = document.querySelector('.first-circle');
const firstIcon = document.querySelector('.first-icon');
const secondCircle = document.querySelector('.second-circle');
const secondIcon = document.querySelector('.second-icon')

firstCircle.addEventListener('click', () => {
    body.classList.add('color--light');
    firstCircle.classList.remove('animation--pulse');
    firstCircle.classList.remove('animation--inner-pulse');
    secondCircle.classList.remove('animation--reverse-pulse');
    secondCircle.classList.remove('display--none');
    firstCircle.classList.add('animation--reverse-pulse');
    secondCircle.classList.add('animation--inner-pulse');
    setTimeout(() => {
        firstCircle.classList.add('display--none');
    }, '2150');
    setTimeout(() => {
        secondCircle.classList.add('animation--pulse');
    }, '2150');
})

secondCircle.addEventListener('click', () => {
    body.classList.remove('color--light');
    secondCircle.classList.remove('animation--pulse');
    secondCircle.classList.remove('animation--inner-pulse');
    firstCircle.classList.remove('animation--reverse-pulse');
    firstCircle.classList.remove('display--none');
    secondCircle.classList.add('animation--reverse-pulse');
    firstCircle.classList.add('animation--inner-pulse');
    setTimeout(() => {
        secondCircle.classList.add('display--none');
    }, '2150');
    setTimeout(() => {
        firstCircle.classList.add('animation--pulse');
    }, '2150');
})