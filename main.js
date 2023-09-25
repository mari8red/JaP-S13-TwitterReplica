let tweet = document.getElementById("tweets");

const URL = "https://my-json-server.typicode.com/mari8red/json-datos/posts";

fetch(URL)
.then(response => response.json()) 
.then(data => console.log(data)) 
.catch(error => console.error("error fetchig data:", error));

