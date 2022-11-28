

/* localStorage del carrito */

let array = [];
const almacenar = (id) => {
  const local = () => array.push({id});
  local();
  localStorage.setItem("id",JSON.stringify( array));
  console.log( "set",localStorage);
};

/* localStorage de favoritos */


let arrayFavoritos = [];
const almacenarFavoritos = (id) => {
  const local = () => arrayFavoritos.push({id});
  local();
  localStorage.setItem("favoritos",JSON.stringify( arrayFavoritos));
  console.log( "set",localStorage);
};