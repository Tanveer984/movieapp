// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let money = JSON.parse(localStorage.getItem("money"))
  
  //1. helper functions...
  function getId(id){
    return document.getElementById(id)
  }
  getId("wallet").innerText=money;

  function createItems(tagname){
    return document.createElement(tagname)
  }


 async function searchmovies(){
 try{
   const q = getId("search").value
   //console.log("quary:", q)            //for checking input 
   
   //const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${q}&key=AIzaSyB-en3_c_QvfxS7D5nPPsmh0osW9US9I0k`)

   const res = await fetch (`https://www.omdbapi.com/?s=${q}&apikey=3612724f`)

   let data = await res.json();
   const movies =data.Search;
   return movies;
 }
 catch(err){
   console.log("err:",err);
 }
}
 function appendMovies(movie){
   console.log("Movies:", movie)
   movie.forEach(element => {
     let box = document.createElement("div")
     box.style.border="0.5px solid purple"
     box.style.height="80%"
     box.innerHTML=null;

     let image =  createItems("img")
     image.setAttribute("class","size")
     image.src= element.Poster;

      let name =  createItems("p")
      name.innerText=element.Title;

      let price =createItems("p");
      price.innerText= 100;

      let button = createItems("button");
      button.innerText="BOOK NOW"
      button.setAttribute("class","btn")
      button.addEventListener("click",function(){
        bookshow(element);
      })

       
      box.append(image,name,price, button);
      getId("movies").append(box)
   });
   
 }

 async function main(){
    let data = await searchmovies();
    if(data===undefined){
        return false;
    }else{
        appendMovies(data)
    }
}
let id;
function debounce(func,delay){
    
    if(id){
        clearTimeout(id);
    }

     id = setTimeout(function(){
        func();
    },delay)
}

let show=[]
function bookshow(ele){
  console.log(ele)
  show.push(ele)
  localStorage.setItem("movies",JSON.stringify(show))
  location.href="checkout.html"
}