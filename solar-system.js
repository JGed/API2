let children = document.getElementById("initial-display").children
for(let i = 0; i < children.length; i++) {
    children[i].addEventListener("click", createBigCard);
}


function createBigCard(event) {
    console.log(this.children);
    console.log(this.firstChild);
    console.log(this.firstChild.firstChild);
    document.getElementById("overlay").style.display = "initial";
    let displayArea = document.getElementById("initial-display");
    let wrapper = document.createElement("div");
    wrapper.classList.add("big-card");
    
    let image = document.createElement("img");
    image.src = this.firstElementChild.firstElementChild.src;
    wrapper.appendChild(image);

    displayArea.appendChild(wrapper);

    wrapper.addEventListener("click", hide);
}

function hide(event) {
    let displayArea = document.getElementById("initial-display");
    document.getElementById("overlay").style.display = "none";
    displayArea.removeChild(this);
}