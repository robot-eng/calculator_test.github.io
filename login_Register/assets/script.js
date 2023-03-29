const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const exitmenu = document.querySelector('.exit');
const menu = document.querySelector('#check:checked ~ ul');
registerLink.addEventListener('click', () =>{
    logregBox.classList.add('active')
});

loginLink.addEventListener('click', () =>{
    logregBox.classList.remove('active')
});
exitmenu.addEventListener('click', () =>{
    menu.classList.remove('active')
});