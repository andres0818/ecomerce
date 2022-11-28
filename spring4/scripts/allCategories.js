const main2 = document.getElementById("categories");

main2.innerHTML = ``;
const div2 = document.createElement("div");
div2.setAttribute("class", "container-All");
div2.innerHTML = `
    <div class="izquierda">
        <button onclick="categoria('')" >All Categories</button>
    </div>
    <div class="derecha">

    <div><img class="home" src="All-categorias/barraHome.png" alt=""></div>
    <div class="rayo"><img  src="All-categorias/rayo.png" alt=""></div>
    </div>   
    `;
main2.appendChild(div2);


document.addEventListener("keypress", (e) => {
    e.target.matches("#buscador");
    let palabra = e.target.value;
    console.log(palabra);
    if (palabra == "") {
      getCharacter(API_URL);
    } else {
      let buscar = "?q=" + palabra;
      getCharacter(API_URL + buscar);
    }
  });