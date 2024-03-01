const html = document.getElementById("logo-html-hover");

html.addEventListener('mouseover', msg=()=> {
    html.src='assets/image/html-cor.svg';
})

html.addEventListener('mouseout', msg2=()=> {
    html.src='assets/image/html-verde.svg';
})

const css = document.getElementById("logo-html-css");

css.addEventListener('mouseover', msg=()=> {
    css.src='assets/image/css-cor.svg';
})

css.addEventListener('mouseout', msg2=()=> {
    css.src='assets/image/css-verde.svg';
})