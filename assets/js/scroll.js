const html = document.getElementById("logo-html-hover");

html.addEventListener('mouseover', msg=()=> {
    html.src='assets/image/html-cor.svg';
})

html.addEventListener('mouseout', msg2=()=> {
    html.src='assets/image/html-verde.svg';
})

const css = document.getElementById("logo-css-hover");

css.addEventListener('mouseover', msg=()=> {
    css.src='assets/image/css-cor.svg';
})

css.addEventListener('mouseout', msg2=()=> {
    css.src='assets/image/css-verde.svg';
})

const js = document.getElementById("logo-js-hover");

js.addEventListener('mouseover', msg=()=> {
    js.src='assets/image/js-cor.svg';
})

js.addEventListener('mouseout', msg2=()=> {
    js.src='assets/image/js-verde.svg';
})