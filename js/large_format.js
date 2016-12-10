var input_weight = document.getElementById('input_weight'),
	input_height = document.getElementById('input_height'),
	type_papers = document.getElementById('type_papers'),
	eyelets = document.getElementById('eyelets_amount'),
	sticking = document.getElementById('sticking_price'),
	discount_amount = document.getElementById('discount_amount'),
	result = document.getElementById('result'),
	result_eyelets = document.getElementById('result_eyelets'),
	result_discount = document.getElementById('result_discount'),
	massage_LF = document.getElementById('massage_LF'),
	eyelets_price = 4,
	paper = {
		'80gm': 80,
		'140gm': 180,
		'150gm': 180,
		'Matte-SA': 240,
		'Oracal': 280,
		'Canvas350': 700,
		'Canvas180': 290,
		'Banner': 280,
		'PVH': 230,
		'PVHOracal': function () {
			return this.PVH + this.Oracal;
		}
	}
	massage_LF.style.display = 'none';

function checkFields () {
	if (!input_height.value || !input_weight.value || type_papers.value == 'false') {
		alertMassageLF();
 		if (!input_height.value) {
 			input_height.setAttribute('class', 'alert_LF');
 			input_height.style.border = '1px solid red';
 		};
 		if (!input_weight.value) {
 			input_weight.setAttribute('class', 'alert_LF');
 			input_weight.style.border = '1px solid red';
 		};
 		if (type_papers.value == 'false') { type_papers.setAttribute('class', 'alert_LF'); };
	}
	else {
		getResult();
	}
}
function alertMassageLF () {
         function startTimer () {
 
            var alertTimer = setTimeout(function() {
                massage_LF.style.display = 'none';
            },3800);
 
            massage_LF.style.display = 'block';
 			massage_LF.innerHTML = 'Незаповнені обов\'язкові поля для розрахунку';
         }
         startTimer();
     }

function getResult () {
	var weight = input_weight.value,
		height = input_height.value;

		
	var square = (Math.ceil((weight * height * 0.000001) * 100)) / 100,
		price,
		paper_price;

		(type_papers.value == 'PVHOracal') ? paper_price = paper.PVHOracal() : paper_price = paper[type_papers.value];

		price = square * paper_price;
		
		if (type_papers.value == 'Banner') {
			if (!eyelets.value) {
				eyelets.value = (Math.ceil(weight / 300) * 2) + (Math.ceil(height / 300) * 2);	
			}
			var priceEyelets = (eyelets.value * eyelets_price + price).toFixed(2);
			result_eyelets.innerHTML = priceEyelets;
		} else {
			eyelets.value = '';
			result_eyelets.innerHTML = '0.00';
		}

		if (sticking.value && type_papers.value != 'Banner') {
			price += +sticking.value;
		}

		if (discount_amount.value) {
			var priceDiscount;
			if (type_papers.value == 'Banner') {
				priceDiscount = priceEyelets - (priceEyelets * discount_amount.value / 100);
			} else {
				priceDiscount = price - (price * discount_amount.value / 100);
			}
			 	
				result_discount.innerHTML = priceDiscount.toFixed(2);
		} else {
			result_discount.innerHTML = '0.00';
		}

		result.innerHTML = price.toFixed(2);
		
}