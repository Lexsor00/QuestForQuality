let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let unAcceppClick;

function enableButtons() {
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        next.style.pointerEvents = 'auto';
        prev.style.pointerEvents = 'auto';
    }, 500)
}

next.addEventListener('click', function(){
    next.style.pointerEvents = 'none';
    prev.style.pointerEvents = 'none';
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
    enableButtons();
})

prev.addEventListener('click', function(){
    next.style.pointerEvents = 'none';
    prev.style.pointerEvents = 'none';
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
    enableButtons();
})