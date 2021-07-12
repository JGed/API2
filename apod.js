fetch("https://api.nasa.gov/planetary/apod?api_key=JRRdWsGr38G2srRNPTYeeyPqeKwJ3h6yrkWEu2pG")
.then(response => response.json())
.then(json =>  {
    document.getElementById("apod-image").src = json.hdurl;
});