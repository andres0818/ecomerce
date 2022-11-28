const API_URL="http://localhost:3000/producto"

const main4 = document.getElementById("main-articulos");
const search = document.getElementById("search");


//Consulta de api con la url de la variable

const getCharacter = (character) => {
  const peticion = fetch(character);
  peticion
    .then((resp) => resp.json())
    .then((data) => showCharacter(data))
    .catch((error) => {
      console.log(error);
      console.log("Busqueda no encontrada");
    });
};

getCharacter(API_URL);

const showCharacter = (characters) => {
  if (characters.length == 0) {
    
    console.log("Busqueda no encontrada");
  } else {
    main4.innerHTML = ``;
    characters.forEach((element) => {
      const {
        id,img,descripcion,precio,descuento,name} = element;
      const divCharacter = document.createElement("div4");
      divCharacter.innerHTML = `
      
        
            <div class="container-tarjetas">
                    <div class="tarjeta-superior"><img src="${img}" alt=""></div>
                <div class="tarjeta-inferior">
                    <p>${name}</p>
                    <p>${descripcion}</p>                    
                    <p class="precio">$${precio} <del>$${descuento}</del> </p>
                    <p class="estrella">⭐⭐⭐⭐<img src="Articulos/estrella.png" alt=""> In stock</p>
                    <div class="btnes-fav-car">
                    <button onclick="almacenar(${id})">Add to car</button>
                    <button onclick="almacenarFavoritos(${id})" class="btn-favoritos"><img src="svg-navbar/me-gusta.png" alt=""></button>
                    </div>
                </div>
            </div>
      
        `;


      main4.appendChild(divCharacter);
    });
    
  }
};



const listaCategorias=document.getElementById("tipo")


const cargarCategorias = async (API) => {
  const respuesta = await fetch(API);
  const datos = await respuesta.json();
  
  try {
	  listaCategorias.innerHTML = ``;
	  datos.forEach((element) => {
		  const { categoria } = element;
		  const div = document.createElement("li");		  
      div.innerHTML = `
      <li class="li" onclick="categoria('${categoria}')" value="id">${categoria}</li>
			`;
      listaCategorias.appendChild(div)
    });
  } catch (error) {
    console.log(error);
  }
};



cargarCategorias(API_URL)


function categoria(tipo){
    getCharacter(API_URL+"/?q="+tipo);
}
