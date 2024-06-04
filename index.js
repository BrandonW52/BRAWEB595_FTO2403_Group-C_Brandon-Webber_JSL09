fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=;hjksdf;kljsdfgl;kdsjfgljksdfglkjhsdfg")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        throw Error("I'm an error!")
        // document.body.style.backgroundImage = `url(${data.urls.regular})`
		// document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        console.log("Something went wrong! 😭")
        // This is where I can handle the error
        // Choose to use a default background image
    })

