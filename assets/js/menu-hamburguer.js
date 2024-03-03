const navbar = document.getElementById('navbar-mobile-ul');
const menu = document.getElementById('menu-hamburguer');
const sec = document.getElementsByTagName('div')

menu.addEventListener('click', openMenu=()=> {
    if(navbar.style.display == 'none') {
        navbar.style.display = 'flex'
    } else {
        navbar.style.display = 'none'
    };
})

sec.addEventListener('click' clicou=()=> {
    alert('opa')
})

// else if (navbar.style.display == 'flex') {
//     navbar.style.display = 'none'
