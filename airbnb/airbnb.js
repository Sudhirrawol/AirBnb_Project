let display;
let bar = document.getElementById("bar4");
console.log(bar);
let dropdown = document.getElementById("drop1");
console.log(dropdown);
bar.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();

  display = bar.classList.toggle("drop1");

  if (display === true) {
    dropdown.style.visibility = "visible";
  } else {
    dropdown.style.visibility = "hidden";
  }
});
let bdy = window;
console.log(bdy);
bdy.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  if (display) {
    dropdown.style.visibility = "hidden";
    bar.classList.remove("drop1");
  }
});

// let body = document.body;
// console.log(body);
// body.addEventListener("click", e => {
//   e.stopPropagation();
//   e.preventDefault();
//   if (display === true) {
//     dropdown.style.visibility = "hidden";
//   }
// });

// let animationbtn = document.getElementsByClassName("items");
// console.log(animationbtn);
// let animation1btn = document.getElementById("ani1");
// console.log(animation1btn);

// animationbtn.onclick = function () {
//   display1 = animation1btn.classList.toggle("ani1");
//   console.log(display1);
//   if (display1 === false) {
//     animation1btn.style.visibility = "hidden";
//   } else {
//     animation1btn.style.visibility = "visible";
//   }
// };

// let temp;
// let btn = document.getElementById("button-sec");
// let container = document.getElementById("drop-dw");
// btn.addEventListener("click", e => {
//   e.preventDefault();
//   e.stopPropagation();
//   temp = btn.classList.toggle("target");
//   if (temp) {
//     container.style.display = "block";
//     // temp = false;
//   } else {
//     container.style.display = "none";
//   }
// });

// let bdy = window;
// console.log(bdy);
// bdy.addEventListener("click", e => {
//   e.preventDefault();
//   e.stopPropagation();
//   console.log(temp);
//   if (temp) {
//     container.style.display = "none";
//     btn.classList.remove("target");
//   }
// });
let hide;
let block = document.getElementById("block2");
let hiddenblock = document.getElementById("block3");
let searchbar = document.getElementById("maginfy");
block.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  hide = block.classList.toggle("block3");
  if (hide === true) {
    e.preventDefault();
    e.stopPropagation();
    hiddenblock.style.display = "block";
    block.style.display = "none";
    hiddenblock.style.height = "130px";
    hiddenblock.style.width = "100%";
    hiddenblock.style.zIndex = "100";
    hide = false;
  } else {
    hiddenblock.style.display = "block";
  }
});
bdy.addEventListener("click", e => {
  e.stopPropagation();
  e.preventDefault();
  if (hide === false) {
    block.style.display = "flex";
    hiddenblock.style.display = "none";
    searchbar.style.display = "block";
    hiddenblock.classList.remove("block3");
  }
});
