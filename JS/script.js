const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
	e.preventDefault ()
	alert ('Obrigada pelo seu cadastro!')
	let name = document.getElementById('name')
	let email = document.getElementById('email')
	let data = {
	    nome,
	    email,
	}

	let convertData = JSON.stringify (data)
	
	localStorage.setItem ('lead', convertData)
	
})