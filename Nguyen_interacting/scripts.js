// Interactivity demo 2


// Zoom in and out of the moon
var trigger = document.querySelector('.trigger')
var body = document.querySelector('body')

trigger.addEventListener('click', zoom)

function zoom() {
	console.log('it works')

	if (body.id != 'zoom') {
		body.id = 'zoom'
	} else {
		body.id = ''
	}

}


// Partial heart on hover
var heart = document.querySelector('.heart')

heart.addEventListener('mouseenter', showShadow)
heart.addEventListener('mouseleave', hideShadow)

function showShadow() {
	heart.classList.add('red')
}

function hideShadow() {
	heart.classList.remove('red')



}
var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
  alert ("Forest heart!")
}













