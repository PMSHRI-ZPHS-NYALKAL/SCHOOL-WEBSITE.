
function openLightbox(src){document.getElementById('lightbox-img').src=src;document.getElementById('lightbox').classList.add('show')}
function closeLightbox(e){if(e)e.stopPropagation();document.getElementById('lightbox').classList.remove('show')}
