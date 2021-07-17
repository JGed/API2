let lightbox = document.createElement("div");
lightbox.id = "my-lightbox";
let img = document.createElement("img");

lightbox.appendChild(img);

document.body.appendChild(lightbox);

let planets = document.querySelectorAll(".planet");
planets.forEach(planet => {
    planet.firstElementChild.firstElementChild.addEventListener("click", showLightbox);
    });


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