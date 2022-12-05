var icon = document.querySelector(".dark-container");
var konteynır = document.querySelector(".container");
var bodi = document.querySelector("body");
var button = document.querySelector(".fa-solid");
icon.addEventListener("click", function(){
    icon.classList.toggle("dark");
    console.log(icon);
    if(icon.classList.contains("dark")){
        bodi.style = `background-color: #222831; , color: #fdfdfd`;
        icon.style.backgroundColor = "#fdfdfd";
        button.style.color = "#222831";

    }else{
        bodi.style = `background-color: #fdfdfd ; , color: #222831`;
        icon.style.backgroundColor = "#222831";
   
    }
   
})