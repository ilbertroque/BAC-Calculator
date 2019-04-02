//Calculate BAC

function bacCalc() {
	var genderCoe;
	var gender = document.getElementById('gender').value;
	var weight = parseFloat(document.getElementById('weight').value);
	var time = parseInt(document.getElementById('time').value);
	var beers = parseInt(document.getElementById('beers').value);
	var wine = parseInt(document.getElementById('wine').value);
	var cocktails = parseInt(document.getElementById('cocktails').value);
	var spirits = parseInt(document.getElementById('spirits').value);
	var bodyCalc;
	var alcoholDose;
	var alcoholPerGram;
	var result;

	if (gender == 'male') {
		genderCoe = 0.68;
	} else if (gender == 'female') {
		genderCoe = 0.55;
	}

	//Equations

	alcoholDose = (beers + wine + cocktails + spirits) * 14;
	bodyCalc = weight * 454 * genderCoe;
	alcoholPerGram = alcoholDose / bodyCalc * 100;

	result = alcoholPerGram - time * 0.015;

	document.getElementById('result').innerHTML = result.toFixed(3);
}

//Change nav bar on scroll

let scrollpos = window.scrollY;
const header = document.querySelector('#navbar');
const header_height = header.offsetHeight;
const add_class_on_scroll = () => header.classList.add('nav-alt');
const remove_class_on_scroll = () => header.classList.remove('nav-alt');

window.addEventListener('scroll', function() {
	scrollpos = window.scrollY;
	if (scrollpos >= header_height) {
		add_class_on_scroll();
	} else {
		remove_class_on_scroll();
	}
	console.log(scrollpos);
});

window.smoothScroll = function(target) {
	var scrollContainer = target;
	do {
		//find scroll container
		scrollContainer = scrollContainer.parentNode;
		if (!scrollContainer) return;
		scrollContainer.scrollTop += 1;
	} while (scrollContainer.scrollTop == 0);

	var targetY = 0;
	do {
		//find the top of target relatively to the container
		if (target == scrollContainer) break;
		targetY += target.offsetTop;
	} while ((target = target.offsetParent));

	scroll = function(c, a, b, i) {
		i++;
		if (i > 30) return;
		c.scrollTop = a + (b - a) / 30 * i;
		setTimeout(function() {
			scroll(c, a, b, i);
		}, 10);
	};
	// start scrolling
	scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

function validate(evt) {
	var theEvent = evt || window.event;

	// Handle paste
	if (theEvent.type === 'paste') {
		key = event.clipboardData.getData('text/plain');
	} else {
		// Handle key press
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode(key);
	}
	var regex = /[0-9]|\./;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
}
