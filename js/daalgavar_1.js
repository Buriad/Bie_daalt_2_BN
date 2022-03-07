// Daalgavar 1. 
//Use window.addEventListener("scroll",) Event listener.
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount

function scrollDetect(event) {
    let a = document.querySelector("nav");
    if(event.target.scrollingElement.scrollTop > 
        a.classList.add("fixed-top");
    a.style.backgroundColor = "white";
    } else {
    a.classList.remove("fixed-top"); 
        }

    }
scrollDetect(); 

document.querySelector(nav-biedaalt).addEventListener("scroll", scrollDetect) 

function scrollDetect() {
    if()
}