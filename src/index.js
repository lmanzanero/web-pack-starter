// Test import of a JavaScript module
import { Title } from '@/js/common'// Test import of styles
import '@/styles/index.scss' 
import { Card } from './js/components/Card';
import { getData } from './js/getData'
import 'regenerator-runtime/runtime';
import { Header } from './js/components/Header';
 
// Appending to the DOM
const heading = document.createElement('h1')
heading.innerHTML = Header();

const button = document.createElement('button');
button.innerText = "Get Cards";

const cards = document.createElement('div'); 
cards.classList.add("cards");


button.addEventListener('click', async () => { 
  button.innerText = "Get Cards..."; 
  const data = await getData(); 
  data.forEach(card => { 
    cards.insertAdjacentHTML('beforeend', Card(card.title));
  }); 
  button.innerText = "Get Cards";
}); 
 
 

const app = document.querySelector('#root')
app.append(heading, button, cards)
