

let loding=document.querySelector(".loding")
let details=document.querySelector(".details")
// ==================links==================
document.querySelectorAll(".menu a").forEach(function(link){
link.addEventListener("click",function(){
    document.querySelector(".menu .active").classList.remove("active")
    link.classList.add("active")
    const category= link.getAttribute('data-category')
    getGames(category)
})
})

// ==================function==================
getGames('mmorpg')

async function getGames(categoryName){
loding.classList.remove("d-none")
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ed09aa1030msh49473bcb12f753fp10d598jsn7d73cf19ec1b',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

    const getApi= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`,options)
    const data= await getApi.json()
    console.log(data)
    displayData(data)
    loding.classList.add("d-none")
}
// ==================displayData==================
function displayData(gemesData){
    let getBox=``
    for( i = 0 ; i < gemesData.length ;i++){
        getBox +=`
        <div class="col">
              <div id="card" onclick="showDetails(${gemesData[i].id})" class="card h-100 bg-transparent">
                <div class="card-body">
                  <img class="card-img-top object-fit-cover h-100" src="${gemesData[i].thumbnail}" alt="img">
                </div>
                <figcaption>
                  <div class="card-desc d-flex justify-content-between px-2">
                    <h3 class="text-white fs-6">${gemesData[i].title}</h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                  </div>
                  <p class="card-tex small text-center text-white-50 opacity-50 p-2">${gemesData[i].short_description}</p>
                </figcaption>
                <footer class="card-footer small hstack justify-content-between">
                  <span class="badge badge-color bg-dark">${gemesData[i].genre}</span>
                  <span class="badge badge-color bg-dark">PC ${gemesData[i].platform}</span>
                </footer>
              </div>
            </div>
        `
    }
    document.getElementById('gameData').innerHTML=getBox
}


function showDetails(id){
  location.href=`./details.html?id=${id}`
}
