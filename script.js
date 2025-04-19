// DOM MANIPULATION AND INSERTION 

let a = document.querySelector(".container");
console.log(a);
console.log(a.innerHTML);
console.log(a.outerHTML);
console.log(a.innerText);
console.log(a.outerText);

let b = document.getElementById("HI");
console.log(b.tagName);

let c = document.querySelector(".box_1");
console.log(c.hasAttribute("id"));
console.log(`BEFORE REMOVING STYLE = ${c.hasAttribute("style")}`);
console.log(c.dataset);
c.innerHTML = "HELLO! I AM ADITYA";
c.removeAttribute("style");
console.log(`AFTER REMOVING STYLE = ${c.hasAttribute("style")}`);

let div = document.createElement('div');
div.setAttribute("class", "box_4");
div.setAttribute("id", "ADI");
div.innerHTML = "I HAVE BEEN INSERTED BY <b> JAVASCRIPT </b>";
document.querySelector(".container").append(div);
console.log(document.querySelector(".box_4").hasAttribute("id"));


let replace = document.createElement('div');
replace.setAttribute("class", "name");
replace.innerHTML = "MY NAME IS <b>ADITYA KUMAR SRIVASTAVA </b>";
document.querySelector(".box_1").replaceWith(replace);

document.querySelector(".box_4").insertAdjacentHTML("afterbegin", "<b>HEY THERE HOW ARE YOU?</b>");

let insert = document.createElement('div');
insert.setAttribute("class", "box_4_1");
insert.innerHTML = "I AM SUB-PART OF 4(4_1)";
document.querySelector(".box_4").prepend(insert);

console.log(document.querySelector(".box_4").innerHTML);

document.querySelector(".box_4_1").remove();

console.log(document.querySelector(".container").classList);
console.log(`THE MAIN CLASS IS ${document.querySelector(".container").className}`);

document.querySelector(".container").classList.add("red");
document.querySelector(".container").classList.remove("red");

let button = document.getElementById("btn");

let x = document.createElement('div');
x.setAttribute("class", "container_1");
x.innerHTML = "I AM A CONTAINER";
document.querySelector(".container").after(x);

let y = document.createElement('div');
y.setAttribute("class", "child_container_1");
y.innerHTML = "I AM A CHILD CONTAINER";
document.querySelector(".container_1").append(y);

let z = document.createElement('div');
z.setAttribute("class", "child");
z.innerHTML = "I AM A CHILD";
document.querySelector(".child_container_1").append(z);

// EVENTS 

button.addEventListener("click", () => {
    alert("THE BUTTON WAS CLICKED");
});

document.addEventListener("keypress", (e) => {
    alert("A KEY WAS PRESSED");
    console.log(e, e.key, e.code);
    document.querySelector(".box_2").innerHTML = "<b>I STUDY AT RCET</b>";
});

document.addEventListener("contextmenu", () => {
    alert("INSPECT MENU WILL OPEN");
});

document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation();
    alert("CHILD WAS CLICKED");
});

document.querySelector(".child_container_1").addEventListener("click", (e) => {
    e.stopPropagation();
    alert("CHILD CONTAINER WAS CLICKED");
});

document.querySelector(".container_1").addEventListener("click", () => {
    alert("CONTAINER IS CLICKED");
});

function random_color_container_1 (){
    let val_1 = Math.floor(Math.random()*256);
    let val_2 = Math.floor(Math.random()*256);
    let val_3 = Math.floor(Math.random()*256);
    return `rgb(${val_1}, ${val_2}, ${val_3})`;
};

function random_color_child_container_1 (){
    let val_1 = Math.floor(Math.random()*256);
    let val_2 = Math.floor(Math.random()*256);
    let val_3 = Math.floor(Math.random()*256);
    return `rgb(${val_1}, ${val_2}, ${val_3})`;
};

function random_color_child (){
    let val_1 = Math.floor(Math.random()*256);
    let val_2 = Math.floor(Math.random()*256);
    let val_3 = Math.floor(Math.random()*256);
    return `rgb(${val_1}, ${val_2}, ${val_3})`;
};

setInterval(() => {
    document.querySelector(".container_1").style.backgroundColor = random_color_container_1();
    document.querySelector(".child_container_1").style.backgroundColor = random_color_child_container_1();
    document.querySelector(".child").style.backgroundColor = random_color_child();  
}, 1000);

// setTimeout(() => {
//     document.querySelector(".container_1").style.backgroundColor = random_color_container_1();
//     document.querySelector(".child_container_1").style.backgroundColor = random_color_child_container_1();
//     document.querySelector(".child").style.backgroundColor = random_color_child();
// }, 1);