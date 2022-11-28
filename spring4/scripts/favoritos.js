const almacenamiento=localStorage.getItem("favoritos")
const respParse=JSON.parse(almacenamiento)


const API_URL="http://localhost:3000/producto"
const cards= document.getElementById("cards")

const cardsFavoritos= async (API)=>{
    const respuestaApi= await fetch(API)
    const datos= await respuestaApi.json();
    
    try { 
        cards.innerHTML+=``
        datos.forEach((e)=>{
            console.log( datos[0].id);        
            const tar=document.createElement("div")
            tar.setAttribute("class","card-favoritos")
            tar.innerHTML+=` 
            <div class="imagen"><button onclick="deleteCarrito(${e.id})">x</button><img src="${e.img}" alt=""></div>
            <div>
              <div class="fav-titulo">${e.name}</div>
              <br>
              <div>${e.descripcion}</div>
              <br>
              <div>250ml</div>
              <div>$${e.precio} $${e.descuento}</div>
              <br>
              <div class="boton-cart"> <button onclick="almacenar(${e.id})">Add to car</button><div>
            </div>`;
                        
            cards.appendChild(tar)
        })
        
        
    } catch (error) {
        
    }
    
}

respParse.forEach( e => {    
    cardsFavoritos(API_URL+"/?id="+ e.id)
});



function deleteCarrito(id){
    
    let newArray=respParse.filter(e=>e.id!=id)
    localStorage.setItem("favoritos",JSON.stringify(newArray))
    document.location.reload() 
    
}