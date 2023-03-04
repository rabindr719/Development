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

btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click', closeModal);

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log?(documnet.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const allSections=document.querySelector('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons=document.getElementsByTagName('button');
console.log(allButtons);

console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

const message=document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML='We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// headers.prepend(message);
header.append(message);

  // message.remove();

  message.parentElement.removeChild(message);
});



message.style.backgroundColor='#37383d';

message.style.width='120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).height, 10)+30+px;

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes

const logo=document.querySelector('.nav__logo');

console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
// console.log(logo.designer);

logo.alt='Beautiful minimalist logo';

//Non-Standard

console.log(logo.designer);
console.log(logo.getAttribute('designer'));
console.log('company', 'BankList');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link =document.querySelector('.nav__link--btn');

console.log(link.href);
console.log(link.getAttribute('href'));

console.log(logo.dataset.versionNumber);

logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// Dont Use
// logo.className='Jonas'

const btnScrollTo=document.querySelector('.btn--scrooll-to');
const section1=document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e)
{
  const s1coords=section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Currrent scroll (X/Y)' , window.pageXOffset, pageYOffset);

  console.log(
    'height/width viewpoint',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth

  );

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behaviour : 'smooth',

  });

  section1.scrollIntoView({behavior: 'smooth'});

});


const h1= document.querySelector('h1');

const alertH1=function(e){
  alert('addEventListener Graet You are reading the Heading : D');

}
h1.addEventListener('mouseenter', alertH1);


setTimeout(()=>h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter= function(e){
//   alert('addEventListener Graet You are reading the Heading : D');

// };

