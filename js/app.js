const app_div = document.getElementById('app');
let p = document.createElement("p")
app_div.appendChild(p)
fetch ('http://api.quotable.io/random').then((response)=>{
    console.log(response);
    return response.json();  
}).then((data)=>{
    console.log(data.content);
   p.textContent= data.content
}).catch()
