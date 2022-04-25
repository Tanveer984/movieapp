// Store the wallet amount to your local storage with key "amount"

//1. helper function... 
function getId(id){
    return document.getElementById(id);
  }

  let total=JSON.parse(localStorage.getItem("money"))||[0];
function sum(a){
    total[0] +=  +(a);
    console.log(total[0])
  return total;
}

let money = JSON.parse(localStorage.getItem("money"));
function addmoney(){
  let a = getId("amount").value;
  let amount = sum(a)
  console.log("amount:", amount)
  localStorage.setItem("money",JSON.stringify(amount));
  location.reload();
}
;
console.log("money:", money)
getId("wallet").innerText = money; 

function movies(){
  window.location.href="movies.html"
}
