fetch("https://api.nasa.gov/planetary/apod?api_key=JRRdWsGr38G2srRNPTYeeyPqeKwJ3h6yrkWEu2pG")
.then(response => response.json())
.then(json =>  {
    console.log(json);
    let container = document.getElementById("apod-container");
    if(json.media_type === "image"){
        let image = document.createElement("img");
        image.src = json.url;
        container.appendChild(image);
    }
    else {
        let iframe = document.createElement("iframe");
        iframe.src = json.url;
        console.log(iframe.src);
        iframe.style.width = "100%";
        iframe.style.frameborder = "0";
        container.appendChild(iframe);
    }

})
.catch(error => {
    console.log("Unfulfilled promise.");
})
