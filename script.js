const image =document.querySelector('#img');
const span =document.querySelector('span');
const logo = document.querySelector('#imglogo')
const napis = document.querySelector('.h1');
const sidebar =document.querySelector('.sidebar')
const content =document.querySelector('.content')
image.addEventListener('click',()=>{
image.classList.add('active');
logo.style.transform = 'rotate(1800deg)'
logo.style.transitionDuration= '2s'
napis.classList.add('active1');
sidebar.classList.add('active')   
content.classList.add('active1')
})