import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        products += `<div>${faker.commerce.productName()}</div>`
    }

    el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('.dev-products'); // Should be very uniq

    if (el) {
        mount(el);
    }
}

export { mount };