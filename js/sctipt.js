// const burger = document.querySelector('.burger');
// burger.addEventListener("click", ()=> {
//     navbar = document.getElementsByClassName('.element');
//     navbar.classlist.toggle('active');
// })

const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
  navigation.classList.toggle('active');
});




// here just for clients scrole and btn for next image

let scrollcontainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
    scrollcontainer.style.scrollBehavior = "auto";

});

backBtn.addEventListener("click", ()=> {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= 280;
});

nextBtn.addEventListener("click", ()=> {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += 280;
});


// form here hhhhhh