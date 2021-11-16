import faker from 'faker';

const mount = (el) => {
    let cardText = `<div> You have ${faker.random.number()} items in your cart </div>`;

    el.innerHTML = cardText;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('.dev-card'); // Should be very uniq

    if (el) {
        mount(el);
    }
}

export { mount };