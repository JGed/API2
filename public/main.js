let baseURL = "https://images-api.nasa.gov/search?";
const apiKey = "JRRdWsGr38G2srRNPTYeeyPqeKwJ3h6yrkWEu2pG";
const btn = document.getElementById("search-button");
btn.addEventListener("click", search)
btn.addEventListener("click", clearDisplayArea);

async function search(e) {
    e.preventDefault();
    let searchBox = document.getElementById("search-box");
    let fullURL = baseURL + (searchBox.value ? `q=${encodeURIComponent(searchBox.value)}` : `year_start=${new Date().getFullYear()}`);
   //********** */ let fullURL = baseURL + `album=${encodeURIComponent("apollo")}`;
    console.log(fullURL);
    let displayArea = document.getElementById("my-container");
    let obj = await fetch(fullURL)
                    .then(response => response.json()); 
    console.log(obj);
    if(obj.status === 400) {
        displayArea.appendChild(document.createElement("h1").innerText = "No Results");
        return;
    }
    let items = obj.collection.items;
    console.log(items);
    for(item of items) {
        if(item.data[0].media_type == "image"){
            let card = createCard(item);
            displayArea.appendChild(card);
        }
    } 
}
function clearDisplayArea(e) {
    let displayArea = document.getElementById("my-container");
    while(displayArea.firstChild) {
        displayArea.removeChild(displayArea.firstChild);
    }
}
function createCard(item) {
    let card = document.createElement("div");
    card.classList.add("my-card");

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("my-image-container");

    let image = document.createElement("img");

    let titleContainer = document.createElement("div");
    titleContainer.classList.add("my-title-container");

    let title = document.createElement("p");

    image.src = item.links[0].href;
    title.innerHTML = `<strong>${item.data[0].title}</strong>`;

    imageContainer.appendChild(image);

    titleContainer.appendChild(title);

    card.appendChild(imageContainer);
    card.appendChild(titleContainer);

    image.addEventListener("click", showLightbox);

    return card;
}

let lightbox = document.createElement("div");
lightbox.id = "my-lightbox";
let img = document.createElement("img");

lightbox.appendChild(img);

document.body.appendChild(lightbox);
function showLightbox(event) {
    lightbox.classList.add("is-active");
    img.src = this.src;
}

function hide(event) {
    if(event.target === this){
        lightbox.classList.remove("is-active");
    }
}
lightbox.addEventListener("click", hide);