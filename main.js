let TimingFunction = setInterval( (e) => {
	let randomNumber1 = Math.floor(Math.random() * 255)
	let randomNumber2 = Math.floor(Math.random() * 255)
	let randomNumber3 = Math.floor(Math.random() * 255)
	document.body.style.background = "rgb(" + randomNumber1 + ", " + randomNumber2 + ", " + randomNumber3 + ")"
}, 500)
