let rootEl = document.querySelector(':root');

document.addEventListener('scroll', () => {
    let scrollPosY = window.scrollY;
        if (scrollPosY > 320) {
        rootEl.style.setProperty('--bg_color','white');
        rootEl.style.setProperty('--btn_color','#1a8917');
    }
    else {
        rootEl.style.setProperty('--bg_color','#ffc017');
        rootEl.style.setProperty('--btn_color','#191919');
    }
});