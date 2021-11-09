// Test import of a JavaScript module
import { Title } from '@/js/common'// Test import of styles
import '@/styles/index.scss' 
import { Card } from './js/components/Card';
import { getData } from './js/getData'
import 'regenerator-runtime/runtime';

// Appending to the DOM
const heading = document.createElement('h1')
heading.textContent = Title();

const button = document.createElement('button');
button.innerText = "Get Cards";

const cards = document.createElement('div');
cards.innerHTML = Card();


button.addEventListener('click', async () => {
  console.log("hello");
  const data = await getData();
  console.log(data);
  return data
}); 
 
 

const app = document.querySelector('#root')
app.append(heading, cards, button)
