
const API_URL = "http://localhost:3000" 
const API_PATHS = {
	productos: "/producto"
}

const handleError = (error) => {
	console.log("ha llegado un nuevo error");
	console.log(error);
}

const httpGET = async (path) => {
	try {

		console.log("haciendo una nueva petición GET");
		console.log("base api : ", API_URL);
		console.log("ruta api : ", path);

		let response = await fetch(API_URL + path)
		let data = await response.json() 

		return data
	} catch (error) {
		handleError(error);
	}
}

const httpPOST = async (path, newData) => {
	try {
		console.log("haciendo una nueva petición POST");
		console.log("base api : ", API_URL);
		console.log("ruta api : ", path);

		let response = await fetch(
			API_URL + path,
			{
				body: JSON.stringify(newData),
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		let data = await response.json()
		return data
	} catch (error) {
		handleError
	}
}

const httpPATCH = async (path, newProp, id) => {
	try {

		console.log("haciendo una nueva petición PATCH");
		console.log("base api : ", API_URL);
		console.log("ruta api : ", path);

		let response = await fetch(
			API_URL + path + `/${id}`, 
			{
				body: JSON.stringify(newProp),
				method: "PATCH",
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		let data = await response.json()
		return data
	} catch (error) {
		handleError(error)
	}
}


const httpDELETE = async (path, id) => {
	try {
		console.log("haciendo una nueva petición PATCH");
		console.log("base api : ", API_URL);
		console.log("ruta api : ", path);

		let response = await fetch(
			`${API_URL}${path}/${id}`, 
			{
				method: "DELETE",
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		let data = await response.json()
		return data

	} catch (error) {
		handleError(error)
	}
}



const getUsers = async () => await httpGET(API_PATHS.productos)
const createUser = async (product) => await httpPOST(API_PATHS.productos, product)
const updateUser = async (id, newProp) => await httpPATCH(API_PATHS.productos, newProp, id)
const eraseUser = async (id) => await httpDELETE(API_PATHS.productos, id)


