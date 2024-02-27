const html = document.getElementById("logo-html-hover");
const html1 = document.getElementById("logo-html-hover1");

const msg = () => {
    html.style.display = 'none'
    html1.style.display = 'inline'
}
const msg1 = () => {
    html1.style.display = 'none'
    html.style.display = 'inline'
}

html.addEventListener("mouseover", msg)
// html.addEventListener("mouseout", msg1)

