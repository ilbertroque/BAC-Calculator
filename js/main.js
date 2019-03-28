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

	alcoholDose = (beers + wine + cocktails + spirits) * 14;
	bodyCalc = weight * 454 * genderCoe;
	alcoholPerGram = alcoholDose / bodyCalc * 100;

	result = alcoholPerGram - time * 0.015;

	document.getElementById('result').innerHTML = result.toFixed(3);
}
