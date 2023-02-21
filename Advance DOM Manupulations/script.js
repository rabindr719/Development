'use strict';

///////////////////////////////////////
// Modal window
/*
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




///Start The Advance DOM Manupulations 

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const allSections=document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons=document.getElementsByTagName('buttton');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Craeting and Inserting Elements

 const messsage=document.createElement('div');
 messsage.classList.add('cookie-message');

 message.innerHTML=
 'We use for imporved browsing experience on the internet.<button class="btn btn--close-cookie">Go it! </button>';

 //header.prepend(meassage);
 headers.append(message);
 //header.before(message);
 //header.after(message);

 //Delete elemets

// Navigation Creating 
//  section1.scrollIntoView({behavior:'smooth'});

 document.querySelector('.btn--close-cookie').
 addEventListener('click',function(){
  // message.remove();

  message.parentElement.removeChild(message);

 });


 document.querySelector('.nav__links').addEventListener('click', function(e){
  console.log(e.target);

  //Matching Startergy

  if(e.target.classList.contains('nav__link'))
  {
    console.log('LINK');
  }
 });


 //Styles

 message.style.backgroundColor='#37383d';
 message.style.width='120%';


 console.log(message.style.color);
 console.log(message.style.backgroundColor);

 console.log(getComputedStyle(message).color);
 console.log(getComputedStyle(message).height);

 message.style.height=
 Number.parseFloat(getComputedStyle(message).height,10)+30+'px';

 document.documentElement.style.setProperty('--color-primary','orangered');


 //Attributes

 const logo=document.querySelector('.nav__logo');
 console.log(logo.alt);
 console.log(logo.src);
 console.log(logo.className);

 //Non-Standard

 console.log(logo.designer);
 console.log(logo.getAttribute('designer'));
 logo.setAttribute('company', 'BankList');
//  logo.getAttribute('company', 'BankList');

console.log(logo.src)
console.log(logo.getAttribute('src'));

const link =document.querySelector('.nav__link--btn');

console.log(link.href);
console.log(link.getAttribute('href'));

//Data Attributs

console.log(logo.data.versionNumber);

//Classes

logo.classListadd('c', 'j');
logo.classList.remove('c','j');
logo.classList.toggle('c');
logo.classList.contains('c');

//LECTURE Changed 188

const btnScrollTo=document.querySelector
('.btn--scroll-to');
const section1=document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){

  const s1coords=section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current Scroll (X/Y)', 
  window.pageXOffset, window.pageYOffset);
  console.log('height/width viewpoint',
  document.documentElement.clientHeight,
  document.documentElement.clientWidth);


  //Scrollong
  //window.scroll


  window.scrollTo({
    left: s1coords.left+window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behaviour: 'smooth',
     
  });

    section1.scrollIntoView({behavior:'smooth'});

});

const h1=document.querySelector('h1');
const alert1=function(e){
  alert('addEventListener: Great! You are Reading the Heading :D');

  h1.removeEventListener('mouseenter', alert1);
};



h1.addEventListener('mouseenter', alert1);

setTimeout(()=>h1.removeEventListener('mouseenter',alert1), 3000);

*/


const h1=document.querySelector('h1');
console.log(h2.querySelector('.highlight'));
console.log(h1.childNodes);

console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color='white';
h1.lastElementChild.style.color='oragered';

//Going upward : parents

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background='var(--gradient-secondary)';
h1.closest('.h1').style.background='var(--gradient-primary)';

//Going sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSiibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el){
  if(el!==h1) el.style.transform='scale(0.5)';
});