let title = document.querySelector("h1");
let Univers = document.querySelector("Univers salon");
let scandinave = document.querySelector ("#paragraph");
let list = document.querySelector ("ul")


document.querySelector (".title").addEventListener("mouseover", function() {
    console.log("Mon event Listener a fonctionné !");
  //ajouter une class à notre title
  document.querySelector(".title").classList.toggle("modified-title"); 
});

document.querySelector (".title").addEventListener("mouseout", function() {
document.querySelector(".title").classList.toggle("modified-title"); 
});


document.querySelector (".red").addEventListener("click", function() {
document.querySelector(".red").classList.toggle("modified-red"); 
});


function name() { 
			let name = document.getElementsByClassName("name").value; 
			alert(name); 
}

document.querySelector("#mySubmit").addEventListener("click", function(){
  console.log(document.querySelector("#myInput").value);
});


document.querySelector (".list").addEventListener("click", function() {
  document.querySelector(".list").classList.toggle("modified-list"); 
});

document.querySelector ("#cache").addEventListener("click", function() {
  document.querySelector(".hide-my-p").classList.toggle("hidden");
});

document.querySelector ("").addEventListener("click", function (){
  document.querySelector(".en-rouge").classList.toggle("hiddenbody-modified");
})