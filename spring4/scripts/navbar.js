const almacenamientoLocalStorage = localStorage.getItem("id");
const respParseLocalStorage = JSON.parse(almacenamientoLocalStorage);


const almacenamientoFavoritos =localStorage.getItem("favoritos")
const parseFavoritos=JSON.parse(almacenamientoFavoritos)


const API_popover = "http://localhost:3000/producto";
const main = document.getElementById("main");
let totalCarrito = 0;



main.innerHTML = ``;
const div = document.createElement("div");
div.setAttribute("class", "container-nav");
div.innerHTML = `
<nav class="nav-superior">
        <div class="sup-izquierdo">
          <h4>something you love is on sale! <strong>Buy Now</strong></h4>
        </div>
        <div class="sup-derecho">
          <div class="divisor">
            <img class="img-nav" src="svg-navbar/red-global.png" alt="" />
            <form class="ubicacion">
              <select name="" id="">
                <option value="">Colombia</option>
                <option value="">EE.UU</option>
              </select>
            </form>
          </div>
          <div>
            <img class="img-nav" src="svg-navbar/mano.png" alt="" />
            <form class="ubicacion">
              <select name="" id="">
                <option value="">Peso</option>
                <option value="">Dolar</option>
              </select>
            </form>
          </div>
        </div>
      </nav>
      <div class="container-menuSalchicha">
      <div class="logo-salchicha"><a href="index.html"><img src="svg-navbar/logo.png" alt="" /></a> </div>
      <img class="menu-salchicha" src="svg-navbar/more.png">
      </div>//container-menuSalchicha 


      <nav class="nav-inferior">
        <div class="logo"> 
          <a href="index.html"><img src="svg-navbar/logo.png" alt="" /></a> 
        </div>
        <div class="navegador"><div class="container-forms"><img src="svg-navbar/btn-ubicacion.png" alt="" />
        <div class="sub-container">
          <div class="contenedor-localizacion">
          <p>Selecione el departamento</p>
        <form name="form">
          <select name="departamento"  class="opciones" id="opciones">
            
          </select>
            <button onclick="ciudadHabilitarSelector()" type = "submit">Selecionar</button>
          </form>
        <p>Selecione la ciudad</p>
        <form name="formCiudad">
          <select disabled="enable" name="ciudad"  class="ciudad" >
            
          </select>
          </form>
          </div>
        </div>
      </div>
          
        </div>
        <div class="buscador">
          <input type="text" id="buscador" name="buscador" placeholder=" Buscar por clases o tipos..."/>
          <img src="svg-navbar/buscar.png" alt="">
        </div>
        <div class="servicios">
            <div><a href="#footer"><img src="svg-navbar/llamada-telefonica.png" alt=""></a> <div class="telefono"></div></div>
            <div  class="corazon"> <div class="cantidad-articulos" id="cantidad-articulos-favoritos" ></div><a href="favoritos.html"><img src="svg-navbar/me-gusta.png" alt=""></a> <div class="cora"></div></div>
            <div>
            <div class="card-box"> <div class="cantidad-articulos " id="cantidad-articulos-carrito"></div><a  href="carrito.html"><img src="svg-navbar/carro-de-la-carretilla.png" alt=""></a><div class="carrito"></div>
            <div class="card-popup">
            <div class="container-popCarrito">
            <div class="img-text" id="popover">
            
            </div>
               <hr />        
             <div class="footer-popCarrito">
               <div class="total-popCarrito">
                   <div class="total1">Total:</div>
                   <p>$<span id="total-sumaPopover">0</span></p>
                 </div>
                 <div class="botones-popCarrito">
                   <a href="carrito.html">View Cart</a>
                   <button href="carrito.html" >Checkout</button>
                 </div>
               </div>
             </div>
            </div>
            </div>
            </div>
            <div class="Admin"><a href="admin.html"><img src="svg-navbar/usuario.png" alt=""></a></div>
      </nav>  
`;
main.appendChild(div);

const popover = document.getElementById("popover");

const cardsPopover = async (API) => {
  const respuestaApi = await fetch(API);
  const datos4 = await respuestaApi.json();

  try {
    popover.innerHTML += ``;
    datos4.forEach((e) => {
      popover.innerHTML += `
                  <div class="columna">
                  <img src="${e.img}"alt=""/>
                  <div class="content-pop">
                    <h3>${e.descripcion}</h3>
                    <p>1x$${e.precio}</p>
                  </div>
                  </div>`;
    });
  } catch (error) {
    console.log(error);
  }
};
respParseLocalStorage.forEach((e) => {
  cardsPopover(API_popover + "/?id=" + e.id);
});




const totalPopover= document.getElementById("total-sumaPopover")
const contadorPopover = async (API) => {
  let acomuladorApi = await fetch(API);
  let acomuladorResp = await acomuladorApi.json();
  try {
    acomuladorResp.forEach((e) => {
      let precio = e.precio;
      totalCarrito += precio;
      totalPopover.innerHTML=`${totalCarrito}`
      
    });
  } catch (error) {
    console.log(error);
  }
  
};
respParseLocalStorage.forEach((e) => {
  contadorPopover(API_popover + "/?id=" + e.id);
});



document.getElementById("cantidad-articulos-carrito").innerHTML=`${respParseLocalStorage.length}`
document.getElementById("cantidad-articulos-favoritos").innerHTML=`${parseFavoritos.length}`








/* <div class="container-popCarrito">
      <div class="img-text">
        <img src="https://ih1.redbubble.net/image.1237562518.2459/st,small,507x507-pad,600x600,f8f8f8.jpg"alt=""/>
        <div class="content-pop">
          <h3>nombre</h3>
          <p>1x$precio</p>
        </div>
      </div>
      <hr />        
      <div class="footer-popCarrito">
        <div class="total-popCarrito">
          <div class="total1">Total:</div>
          <p>$106.58</p>
        </div>
        <div class="botones-popCarrito">
          <a href="carrito.html">View Cart</a>
          <button>Checkout</button>
        </div>
      </div>
    </div> */
