const API_DEPARTAMENTOS= "http://localhost:3000/"


const opciones=document.querySelector(".opciones")




const ubicacion= async (API)=>{
    const respuestaApi= await fetch(API)
    const datos= await respuestaApi.json();
    
    try { 
        opciones.innerHTML+=``
        datos.forEach((e)=>{
                    
            const tar=document.createElement("option")
            tar.setAttribute("value",`${e.departamento}`)
            tar.innerHTML+=`${e.departamento}`;
                        
            opciones.appendChild(tar)
        })
        
    } catch (error) {
        
    }
    
}

ubicacion(API_DEPARTAMENTOS+"departamentos")
let buscador=document.getElementById("buscador")
buscador.setAttribute("disabled","disable")






const ciudadHabilitarSelector= ()=>document.querySelector(".ciudad").disabled=false


const opcionesCiudad=document.querySelector(".ciudad")


const ciudad= async (API)=>{
    const respuesta= await fetch(API)
    const dato= await respuesta.json();
    
    try { 
        opcionesCiudad.innerHTML=``
        dato.forEach((e)=>{
                    
            const tar2=document.createElement("option")
            tar2.setAttribute("value",`${e.ciudad}`)
            tar2.innerHTML+=`${e.cuidad}`;
                        
            opcionesCiudad.appendChild(tar2)
        })
        
    } catch (error) {
        
    }
    
} 







let form = document.forms['form'];

form.onsubmit = function(e){
    e.preventDefault();
    let select = document.form.departamento.value;
    ciudad(API_DEPARTAMENTOS+select);
}


