// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let money = JSON.parse(localStorage.getItem("money"))
//1. helper functions...
function getId(id){
    return document.getElementById(id)
  }
  getId("wallet").innerText=money;

let movies = JSON.parse(localStorage.getItem("movies"))
console.log("movies:",movies)

movies.forEach(element => {
    let box = document.createElement("div")
    box.style.border="0.5px solid"

    let image= document.createElement("img");
    image.src=element.Poster

    let name = document.createElement("h4")
    name.innerText = element.Title;
    
    box.append(image,name)
    getId("movie").append(box)
});

function confirm(){
    let seat =getId("number_of-seats").value;
let total = seat*100;
if(total>money){
    alert("insufficient fund")
    return false;
}
else{
    alert("confirmed")
}
let remain = money-total;
localStorage.setItem("money",JSON.stringify(remain))
location.href="index.html"
}

