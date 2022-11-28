let outputUsers = document.querySelector("#users-output")


const createCard = (productos) => { 
	outputUsers.innerHTML += `
	<div class="container-tarjetas">
		<div class="tarjeta-superior"><img src="${productos.img}" alt=""></div>
		<div class="tarjeta-inferior">
		<p>${productos.name}</p>
		<p>${productos.descripcion}</p>
		<p class="precio">${productos.precio} <del>${productos.descuento}</del> </p>
		<p class="estrella">⭐⭐⭐⭐<img src="../Articulos/estrella.png" alt=""> In stock <a href="#"  class="btn btn-danger" onclick="deleteUser(${productos.id})" >delete</a></p>
		
		</div>

	</div>

	`
}

const editUser= async (e) => {
	e.preventDefault()
	const key = e.target.data.value;
	const value = e.target.valor.value;
	
	const user = {};
	user[key] = value;
	await updateUser(e.target.id.value,user)
	await showUsers()
}

const createNewUser = async (e) => {
	e.preventDefault()
	await createUser(
		{
			id: e.target.id.value,
			name:e.target.name.value,
			img: e.target.img.value,
			descripcion: e.target.descripcion.value,
			precio: e.target.precio.value,
			descuento: e.target.descuento.value,
			categoria: e.target.categoria.value,
		}
		
	)

	e.target.id.value = ""
	e.target.name.value = ""
	e.target.age.value = ""
	await showUsers()

}



const showUsers = async () => {
	outputUsers.innerHTML = ""

	let data = await getUsers()

	data.forEach(productos => {
		createCard(productos)
	});
}

const deleteUser = async (id) => {
	await eraseUser(id)
	await showUsers()
}

const btnGetUsers = document.querySelector("#getUsers")
btnGetUsers.addEventListener("click", showUsers)

const formCreateUser = document.querySelector("#createUser")
formCreateUser.addEventListener("submit", createNewUser)

const formUpdateUser = document.querySelector("#updateUser")
formUpdateUser.addEventListener("submit", editUser)






