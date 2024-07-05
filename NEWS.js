let apikey = "4ef6f435b370464398131729b191f6db" 
    ,country = 'us' , category = "general" ;

let main = document.querySelector(".main");
let img = document.querySelector(".image");
let title = document.querySelector(".title");
let discription = document.querySelector(".discription");
let Read_btn = document.querySelector(".Read_btn");
let link = document.querySelector(".link");
let index = 9, data ;

async function getInfo(){
    let URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}` ;
    let response = await fetch(URL) ;
     data = await response.json() ;

    console.log(data) ;
    main.innerHTML = "" ; 
    for(i=0 ; i < data.articles.length; i++){
        main.innerHTML += `
         <div class="news">
         <div class="img" ><img src="${data.articles[i].urlToImage}" class="image" alt="no image"></div>
            <div class="info">
                <h3 class="title">${data.articles[i].title != null ? data.articles[i].title : "no title found"}</h3>
                <p class="discription"> ${data.articles[i].description != null ? data.articles[i].description : "there is no description"}</p>   
                <button class="Read_btn" ><a class="link" href="${data.articles[i].url}" target="_blank" >Read More</a></button>
            </div>
        </div>
        `;
    }
} 
getInfo();

document.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        category = `${e.target.textContent}`;
        getInfo();
        console.log(category);
    }
})