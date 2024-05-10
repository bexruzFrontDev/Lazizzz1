let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
let light = document.querySelector(".light");

let modal = document.querySelector(".animate-modal");

function openModal() {
  modal.classList.toggle("open-modal");
}

sun.onclick = function () {
    light.classList.add("light");
    light.classList.remove("dark");
};

moon.onclick = function () {
    light.classList.add("dark");
    light.classList.remove("light");
}



let menu = document.querySelector('.n-center')
let scroll1 = document.querySelector('.light')
function openMenu() {
    menu.classList.toggle('menu')
    scroll1.classList.toggle('hidden')
}

let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let h1 = document.querySelector(".h1");

btn.onclick = function () {
  console.log(inp.value);
  h1.innerHTML = inp.value;
  document.body.style.backgroundColor = colorInp.value;
};


let colorInp = document.querySelector(".colorInp");
let colorBtn = document.querySelector(".colorBtn");
let colorH1 = document.querySelector(".colorH1");

colorBtn.onclick = function () {
  console.log(colorInp.value);
  colorH1.innerHTML = colorInp.value;
  document.body.style.backgroundColor = colorInp.value;
};