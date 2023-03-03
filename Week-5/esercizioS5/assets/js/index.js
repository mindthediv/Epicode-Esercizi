let rootEl = document.querySelector(':root');

document.addEventListener('scroll', () => {
    let scrollPosY = window.scrollY;
        if (scrollPosY > 320) {
        rootEl.style.setProperty('--bg_color','white');
    }
    else {
        rootEl.style.setProperty('--bg_color','#ffc017');
    }
});