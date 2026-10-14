const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";

container.appendChild(para);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style", "border-style: solid; border-color: black;");
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const divP = document.createElement("p");
divP.textContent = "ME TOO!";
div.appendChild(divP);

container.appendChild(div);

const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click", () => {
//   alert("Hello World");
// });

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
  console.log(e.eventPhase);
});
