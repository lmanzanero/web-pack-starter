// Test import of a JavaScript module
import { Title } from '@/js/common'// Test import of styles
import '@/styles/index.scss' 
import { Card } from './js/components/Card';
import { getData } from './js/getData'

// Appending to the DOM
const heading = document.createElement('h1')
heading.textContent = Title();

const cards = document.createElement('div');
cards.innerHTML = getData();



 
const app = document.querySelector('#root')
app.append(heading, cards)

