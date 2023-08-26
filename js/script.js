;(() => {
	window.onload = () => {
		let header_burger = document.querySelector('.header_burger')
		let header_menu = document.querySelector('.header_menu')
		let body = document.querySelector('body')
		header_burger.addEventListener('click', e => {
			header_burger.classList.toggle('active')
			header_menu.classList.toggle('active')
			body.classList.toggle('lock')
		})
		let menu_list = document.querySelector('.menu_list')
		menu_list.addEventListener('click', e => {
			header_burger.classList.toggle('active')
			header_menu.classList.toggle('active')
			body.classList.toggle('lock')
		})
	}
})()

/* ------------------------ */

let slideIndex = 0
showSlides()

function showSlides() {
	let i
	let slides = document.getElementsByClassName('mySlides')
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'
	}
	slideIndex++
	if (slideIndex > slides.length) {
		slideIndex = 1
	}

	slides[slideIndex - 1].style.display = 'block'
	setTimeout(showSlides, 2000)
}

/* ------------------------ */

function myMap() {
	var mapOptions = {
		center: new google.maps.LatLng(51.5, -0.12),
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.HYBRID,
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions)
}
