const almacenamiento=localStorage.getItem("id")
const respParse=JSON.parse(almacenamiento)

const historialCompras=localStorage.getItem("historial")
const respHistorial=JSON.parse(historialCompras)

console.log(respHistorial);

const API_URL="http://localhost:3000/producto"
const cards= document.getElementById("cards")

const cardsCarrito= async (API)=>{
    const respuestaApi= await fetch(API)
    const datos= await respuestaApi.json();
    
    try { 
        cards.innerHTML+=``
        datos.forEach((e)=>{
            
            let ahorro= e.descuento-e.precio        
            const tar=document.createElement("div")
            tar.setAttribute("class","container-cards")
            tar.innerHTML+=`
            <div><img src="${e.img}" alt=""></div>
        <div class="columna-uno">
            <p>${e.name}</p>
            <p  class="p-uno">sold by: <span>Fresno</span></p>
            <p>Quanatity: <span>250g</span></p>
        </div>
        <div>
            <span>price</span>
            <p class="p-uno">$${e.precio} <del>$${e.descuento}<del></p>
            <p class="green">you sabe:$${ahorro} </p>
        </div>
        <div class="container-btn">
            <p>Qty</p>
            <div class="suma-resta"><button class="btn" onclick="restar(${e.id},${e.precio})">-</button> <span class="cantidad-comprada${e.id}"></span> <button class="btn" onclick="sumar (${e.id},${e.precio})">+</button></div>
        </div>
        <div >
            <p class="total">total</p>
            <p class="resultado${e.id}"></p>
        </div>
        <div class="acciones">
            <p class="action">Action</p>
            <a class="green" href="">Save for later</a>
            <a onclick="deleteCarrito(${e.id})" class="red" href="">Remove</a>
        </div>`;
                        
            cards.appendChild(tar)
        })
        
        
    } catch (error) {
        console.log(error);
    }
    
}
respParse.forEach( e => {    
    cardsCarrito(API_URL+"/?id="+ e.id)
});






const histo=()=>{
    console.log("historial");
    respHistorial.forEach( e => {    
        cardsCarrito(API_URL+"/?id="+ e.id)
})
}    


let num=0

function sumar (data,data2){
    let id= parseInt(data)
    let span=document.querySelector(`.cantidad-comprada${id}`)
    
     num+=1
     span.innerHTML=``
     span.innerHTML+=`${num}`
     console.log("suma",num);
     resultado(id,num,data2)
}
function restar(data,data2){ 
    let id= parseInt(data)
    console.log("resta",num+id);
    num<=0? num=0:num-=1
    let span=document.querySelector(`.cantidad-comprada${id}`)
    span.innerHTML=``
    span.innerHTML+=`${num}`
    resultado(id,num,data2)
    
}
    

function resultado(id,params,precio) {
    let resultado=params*precio
    let total=document.querySelector(`.resultado${id}`)
    total.innerHTML=`${resultado}`

}


function deleteCarrito(id){
    
let newArray=respParse.filter(e=>e.id!=id)
localStorage.setItem("id",JSON.stringify(newArray))/* 
document.location.reload() */

}


/* btn comprar */

function comprar() {

let targetas=document.querySelector("#cards")
    targetas.setAttribute("style","display:none;")
let btnComprar=document.querySelector(".comprar")
    btnComprar.setAttribute("style","display:none ;")
let ventaForm=document.querySelector(".container-venta")
    ventaForm.setAttribute("style","display:flex ;")
let formDatosVenta=document.querySelector(".form-datos")
    formDatosVenta.setAttribute("style","display:none ;")
 
}


function returnShoping() {

    let targetas=document.querySelector("#cards")
        targetas.setAttribute("style","display:flex;")
    let btnComprar=document.querySelector(".comprar")
        btnComprar.setAttribute("style","display:flex ;")
    let ventaForm=document.querySelector(".container-venta")
        ventaForm.setAttribute("style","display:none ;")   
    let formDatosVenta=document.querySelector(".form-datos")
        formDatosVenta.setAttribute("style","display:none ;")
}


function processCheckout(){
    let targetas=document.querySelector("#cards")
        targetas.setAttribute("style","display:none;")
    let btnComprar=document.querySelector(".comprar")
        btnComprar.setAttribute("style","display:none ;")
    let ventaForm=document.querySelector(".container-venta")
        ventaForm.setAttribute("style","display:none ;")  
    let formDatosVenta=document.querySelector(".form-datos")
        formDatosVenta.setAttribute("style","display:flex ;")
}

function buyNow(){
    let targetas=document.querySelector("#cards")
        targetas.setAttribute("style","display:flex;")
    let btnComprar=document.querySelector(".comprar")
        btnComprar.setAttribute("style","display:flex ;")
    let ventaForm=document.querySelector(".container-venta")
        ventaForm.setAttribute("style","display:none ;")   
    let formDatosVenta=document.querySelector(".form-datos")
        formDatosVenta.setAttribute("style","display:none ;")

    HistorialCompras()

    swal({
        icon:"success",
        title: "Transaccion exitosa",
        text:"Vuelva pronto",
        button:false
})
}




function HistorialCompras() {
    let arrayCompras = [];
    
    respParse.forEach((e)=>{arrayCompras.push(e)
    
    localStorage.setItem("historial",JSON.stringify(arrayCompras))
        
    }
    )
}




