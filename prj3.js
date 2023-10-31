const menu = document.querySelector('.nav');
const navOpen = document.querySelector('.menu-ic');


navOpen.addEventListener('click', function()
{
    menu.classList.toggle('showmenu')
})