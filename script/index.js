document.getElementById("toggle").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("-left-full");
  document.getElementById("nav").classList.toggle("left");
});
console.log("hello");

const currentscollposition = 0;
const scrollAmout = 320;
const scont = document.getElementById("scrollbar");
const container = document.getElementById("container");

const maxscroll = -scont.offsetWidth + container.offsetWidth;

function scrollhorizontal(val) {
  currentscollposition += val * scrollAmout;
  scont.style.left = currentscollposition + "px";
}
