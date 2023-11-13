const updateFun = ()=>{
	const name = document.getElementById("name").value
	const year = document.getElementById("year").value
	const url = document.getElementById("url")
	url.innerText  = `https://localhost:8080/?${name ? "name=" : "" }${name ? name : "" }${(name && year) ? "&" : "" }${year ? "year=" : "" }${year ? year : "" }`

}