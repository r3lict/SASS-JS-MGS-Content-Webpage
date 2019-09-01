const frame = document.querySelector(".frame");

TweenMax.from(frame, 5, {
    opacity: 0
});
const title = document.querySelector(".title");
const logo = document.querySelector(".logo");
TweenMax.set(logo, {
    visibility: "visible"
});

TweenMax.from(logo, 2, {
    y: -100,
    color: "#000",
    opacity: 0,

    fontSize: 96,
    delay: 1



});

TweenMax.from(frame, 3, {
    delay: 2.5

});

TweenMax.to(title, 1, {

    fontSize: "6rem"



});