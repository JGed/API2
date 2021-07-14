fetch("https://api.nasa.gov/planetary/apod?api_key=JRRdWsGr38G2srRNPTYeeyPqeKwJ3h6yrkWEu2pG")
.then(response => response.json())
.then(json =>  {
    let container = document.getElementById("apod-container");
    let element;
    
    if(json.media_type === "image"){
        element = document.createElement("img");
        element.src = json.url;
    }
    else {
        element = document.createElement("iframe");
        element.src = json.url;
        element.style.height = "85%";
        element.style.width = "85%";
        element.style.frameborder = "0";
    }
    container.appendChild(element);
})
.catch(error => {
    console.log("Unfulfilled promise.");
})
