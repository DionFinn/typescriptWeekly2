import './style.css';
import { Colours } from './Models/EnumColour';
import { SprinkleCookie } from './Models/SprinkleCookie';
import { Cookie } from './Models/Cookie';

let cookies: Cookie[] = [];
const colourList: Colours[] = [
  Colours.Black,
  Colours.Blue,
  Colours.Brown,
  Colours.Pink,
  Colours.White
];
let cookieSelector : HTMLSelectElement = document.getElementById('cookieSelector') as HTMLSelectElement;
const cookieSelect: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('cookieSelector')
  );
  const colourSelect: HTMLSelectElement = <HTMLSelectElement>(
    document.getElementById('colourSelector')
  );
function init() {
  
  cookies.push(new Cookie('Chocolate'));
  cookies.push(new Cookie('Vanilla'));
  cookies.push(new Cookie("SprinkleCookie", Colours.Pink))
  
  
  let count = 0;
  
  for (let a = 0; a < cookies.length; a++){
    let newOption: HTMLOptionElement = document.createElement('option');
      newOption.innerHTML = cookies[a].name;
      newOption.value = a.toString();
      cookieSelector.add(newOption);
  }
  for (let a = 0; a < colourList.length; a++){
    let newOption: HTMLOptionElement = document.createElement('option');
      newOption.innerHTML = colourList[a];
      newOption.value = a.toString();
      colourSelect.add(newOption);
  }
  updateDisplay();
}

function drawCookies() {
  let cookiesDiv: HTMLElement = document.getElementById('cookiesDiv');

  cookiesDiv.innerHTML = "";
  

  for(let cookie of cookies) {
    let newCookieDiv: HTMLElement = document.createElement('div');
    newCookieDiv.className = 'cookie';
    newCookieDiv.style.backgroundColor = cookie.colour;
    newCookieDiv.innerHTML = cookie.chocolateChipNum.toString();

    cookiesDiv.append(newCookieDiv);
  }

}


const buttondiv: HTMLElement = document.getElementById('buttonDiv');
const changeColourBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById('changeColour-btn')
);
changeColourBtn.addEventListener('click', () => changeColour());



  function changeColour() {
      let cookievalue = cookieSelector.value
      let colourValue = colourSelect.value
    
      cookies[cookievalue].colour = colourList[colourValue]
      
    
    
      updateDisplay();
    }

    const addChocChipBtn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('addChocolateChip-btn')
    addChocChipBtn.addEventListener('click', () => addChocolateChip() )
    function addChocolateChip() {
      let selectedcookie: Cookie;
      selectedcookie = cookies[cookieSelector.selectedIndex]
      selectedcookie.chocolateChipNum++
      
      updateDisplay();
    }

function updateDisplay() {
  drawCookies();
}

init();
