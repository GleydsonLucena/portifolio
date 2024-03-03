const navbar = document.getElementById('navbar-mobile-ul');
const menu = document.getElementById('menu-hamburguer');

menu.addEventListener('click', openMenu=()=> {
    if(navbar.style.display == 'none') {
        navbar.style.display = 'flex'
    } else {
        navbar.style.display = 'none'
    };
})
