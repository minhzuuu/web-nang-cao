const menu = document.querySelector('.nav');
const navOpen = document.querySelector('.menu-ic');
const menuopen = document.querySelector('.menu-bar');
const open = document.querySelector('.sb');
const hello = document.querySelector('.menu-bar-link')
const hello1 = document.querySelector('.menu-bar-link2')
const hello2 = document.querySelector('.menu-bar-link3')
const hello3 = document.querySelector('.menu-bar-link4')

navOpen.addEventListener('click', function()
{
    menu.classList.toggle('showmenu')
})
navOpen.addEventListener('click', function()
{
    menuopen.classList.remove('showmenu')
})
open.addEventListener('click', function()
{
    menuopen.classList.toggle('showmenu')
})

hello.addEventListener('click', function()
{
    menuopen.classList.remove('showmenu')
})
hello2.addEventListener('click', function()
{
    menuopen.classList.remove('showmenu')
})
hello3.addEventListener('click', function()
{
    menuopen.classList.remove('showmenu')
})
hello1.addEventListener('click', function()
{
    menuopen.classList.remove('showmenu')
})
