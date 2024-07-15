// details........لما اضغط علي الصوره هيجيب الموصفات بتاع كل صوره
let closeBtn=document.getElementById('closeBtn')
let details=document.getElementById('details')
const searchParams=location.search//id
const params= new URLSearchParams(searchParams)

console.log(params.get("id"))
let id =params.get("id");

let responsData={};

(async function(){

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ed09aa1030msh49473bcb12f753fp10d598jsn7d73cf19ec1b',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
    const getApi=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)

    const data=await getApi.json()
    responsData=data
console.log(data)
displayData()

})()

function displayData(){
    let cartona=`
    <div class="col-md-4">
              <img src="${responsData.thumbnail}" class="w-100" alt="img">
            </div>
            <div class="col-md-8">
              <h3 class="text-white">Title: ${responsData.title}</h3>
              <p class="text-white">
                Category: 
                <span class="badge text-bg-info"> ${responsData.genre}</span>
              </p>
              <p class="text-white">
                Platform: 
                <span class="badge text-bg-info"> ${responsData.platform}</span>
              </p>
              <p class="text-white">
                Status:
                <span class="badge text-bg-info">${responsData.status}</span>
              </p>
              <p class="small text-white">${responsData.description}</p>
              <a class="btn btn-outline-warning fw-bold" href="${responsData.game_url}">Show Game</a>
            </div>
    `
    document.getElementById('detailsContent').innerHTML=cartona
}
 

closeBtn.addEventListener('click',function(){
    details.classList.add('d-none')
    location.href=`./index.html`
  })
  
