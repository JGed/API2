import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/loaders/GLTFLoader.js';

fetch("https://api.nasa.gov/planetary/apod?api_key=JRRdWsGr38G2srRNPTYeeyPqeKwJ3h6yrkWEu2pG")
.then(response => response.json())
.then(json =>  {
    let container = document.getElementById("apod-container");
    let element = document.createElement("embed");
    
    /*
    if(json.media_type === "image"){
        element = document.createElement("img");
        element.src = json.url;
    }
    else {
        element = document.createElement("video");
        let source = document.createElement("source");
        source.src = json.url;
        element.style.height = "500px";
        element.style.width = "500px";
        element.style.frameborder = "0";
        element.appendChild(source);
    }
    */
    container.appendChild(element);
})
.catch(error => {
    console.log("Unfulfilled promise.");
})
