import { mount } from 'products/ProductsIndex';
import { mount as cartMount } from 'card/CardShow';

mount(document.querySelector('.container-products'));
cartMount(document.querySelector('.container-card'));
console.log('Container');