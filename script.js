// turn pages when click nxt or prev btn 
let pageTurnBn = document.querySelectorAll(".nextprev-btn");

pageTurnBn.forEach((el, index) => {
    el.onclick = () => {
        let pageTurnId = el.getAttribute('data-page');
        let pageTurn = document.getElementById(pageTurnId)
        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        }

        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
})

// contact me button when click 
let pages = document.querySelectorAll('.book-page.page-right')
let contactMebtn = document.querySelector('.btn.contact-me')

contactMebtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);

        }, (index + 1) * 200 + 2100);
    })
}
// create reverse index function 
let totalPages = pages.length;
let pageNumbr = 0;
function reverseIndex() {
    pageNumbr--;
    if (pageNumbr < 0) {
        pageNumbr = totalPages - 1;
    }
}

// back profile button when click 
let backProfileBtn = document.querySelector('.back-profile')
backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex()
            pages[pageNumbr].classList.remove('turn');
            setTimeout(() => {
                reverseIndex()
                pages[pageNumbr].style.zIndex = 10 + index;
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}

// opening animation 
let coverRight = document.querySelector('.cover.cover-right')
let pageLeft = document.querySelector('.book-page.page-left')

// opening animation cover right animation
setTimeout(()=>{
    coverRight.classList.add('turn');

}, 2100)

setTimeout(()=>{
    coverRight.style.zIndex= -1;

}, 2800)

// opening animation page left or profile animation
setTimeout(()=>{
    pageLeft.style.zIndex= 20;

}, 3200)

// opening animation all pages right animation

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex()
        pages[pageNumbr].classList.remove('turn');
        setTimeout(() => {
            reverseIndex()
            pages[pageNumbr].style.zIndex = 10 + index;
        }, 500)

    }, (index + 1) * 200 + 2100)
})