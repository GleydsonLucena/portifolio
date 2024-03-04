
//  Mouse hover trocando as cores do icone

const html = document.getElementById("logo-html-hover");
const textHtml = document.getElementById("html");
const text = document.getElementById("text");

html.addEventListener('mouseover', msg=()=> {
    html.src='assets/image/html-cor.svg';
    text.style.display = 'none';
    textHtml.style.display = 'inline';
})

html.addEventListener('mouseout', msg2=()=> {
    html.src='assets/image/html-verde.svg';
    text.style.display = 'inline';
    textHtml.style.display = 'none';
})

const css = document.getElementById("logo-css-hover");
const textCss = document.getElementById("css")

css.addEventListener('mouseover', hover=()=> {
    css.src='assets/image/css-cor.svg';
    textCss.style.display = 'inline';
    text.style.display = 'none';
})

css.addEventListener('mouseout', hover2=()=> {
    css.src='assets/image/css-verde.svg';
    textCss.style.display = 'none';
    text.style.display = 'inline';
})

const js = document.getElementById("logo-js-hover");
const textjs = document.getElementById("js"); 

js.addEventListener('mouseover', hover3=()=> {
    js.src='assets/image/js-cor.svg';
    textjs.style.display = 'inline';
    text.style.display = 'none'
})

js.addEventListener('mouseout', hover4=()=> {
    js.src='assets/image/js-verde.svg';
    textjs.style.display = 'none'
    text.style.display = 'inline'
})

// Fazer aparecer as informações na div

