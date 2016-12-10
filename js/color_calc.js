/*---LASER PRINT---*/
 var tonerResource5 = {
 	black: 29000,
 	yellow: 26000,
 	red: 26000,
 	blue: 26000
 },
 	tonerResource65 = {
 	black: 8923,
 	yellow: 8000,
 	red: 8000,
 	blue: 8000
 },
 	tonerPrice = {
 	black: 1500,
 	yellow: 2300,
 	red: 2300,
 	blue: 2300,
 },
 	transferBeltPrice = 8000,
 	fixingUnitPrice = 13200,
 	
 	developerResource = {
 	black: 570000,
 	yellow: 115000,
 	red: 115000,
 	blue: 115000
 },
 	developerPrice = {
 	black: 6300,
 	yellow: 9300,
 	red: 9300,
 	blue: 9300
 },
 	drumUnitResBlack = 70000,
 	drumUnitPriceBlack = 4000,
 	
 	drumUnitResColor = 55000,
 	drumUnitPriceColor = 9000;
 
 var paperPriceLaser = {
 	'70gm': 1,
 	'80gm': 2,
 	'80gmc': 3,
 	'g120gm': 4,
 	'120gmc': 5,
 	'140gm': 6,
 	'160gmc': 7,
 	'g210gm': 8,
 	'g280gm': 9,
 	'm280gm': 10,
 	'0': 0,
 };
 
 var amount = document.getElementById('input_quantity'),
 	quality = document.getElementsByName('radioCheck'),
 	sides = document.getElementById('sides_laser'),
 	blackPrint = document.getElementById('black_laser'),
 	type_paper = document.getElementById('paper_type_laser'),
 	format_paper = document.getElementById('paper_format_laser'),
 	discount = document.getElementById('laser_discount_input');
 
 
 
 var price_lazer = document.getElementById('laser_output_res'),
 	add_paper_laser = document.getElementById('add_paper_price_laser'),
 	add_print_laser = document.getElementById('add_print_price_laser'),
 	add_copy_laser = document.getElementById('add_print_copy_laser'),
 	add_discount_laser = document.getElementById('add_discount_laser');
 	massage_laser = document.getElementById('massage_laser');
 
 	massage_laser.style.display = 'none';
 
 function getCheckField () {
 	if (!amount.value || type_paper.value == 'false' || format_paper.value == 'false') {
 		
 		alertMassage();
 		if (!amount.value) {
 			amount.setAttribute('class', 'alert_laser');
 			amount.style.border = '1px solid red';
 		};
 		if (type_paper.value == 'false') { type_paper.setAttribute('class', 'alert_laser'); };
 		if (format_paper.value == 'false') { format_paper.setAttribute('class', 'alert_laser'); };
 	}
 	else { resultLaser (); }
 }
 function alertMassage () {
         function startTimer () {
 
             var alertTimer = setTimeout(function() {
                 massage_laser.style.display = 'none';
             },3800);
 
             massage_laser.style.display = 'block';
 			massage_laser.innerHTML = 'Незаповнені обов\'язкові поля для розрахунку';
         }
         startTimer();
     }
 function resultLaser () {
 
 	
 	var k;
 	for (var i = 0; i < quality.length; i++) {
 		var qualityCheck;
 		if (quality[i].checked == true) {
 			qualityCheck = quality[i].id;
 		}
 	}
 	function getQualityLaser () {
 		var qualityPrice;
 		if (qualityCheck == 'textCheck') {
 			qualityPrice = getPriceFivePercent();
 			
 		}
 		else if (qualityCheck == 'textPhotoCheck') {
 			qualityPrice = getPriceSixtyFivePercent();
 			if (blackPrint.checked == true) {
 				qualityPrice *= 0.9;
 			} else {
 				qualityPrice *= 0.76;
 				
 			}
 		}
 		else if (qualityCheck == 'photoCheck') {
 			qualityPrice = getPriceSixtyFivePercent();
 			
 		}
 		return qualityPrice.toFixed(2);
 	}
 	var priceLaser = +getQualityLaser();
 
 
 	if (amount.value > 0 && amount.value < 51) {
 		if (qualityCheck == 'textCheck') { (blackPrint.checked == true) ? k = 1.6 : k = 2.85; }
 		if (qualityCheck == 'textPhotoCheck') { (blackPrint.checked == true) ? k = 2.4 : k = 3.27; }
 		if (qualityCheck == 'photoCheck') { (blackPrint.checked == true) ? k = 3.3 : k = 3.545; }
 		priceLaser += (priceLaser * k);
 	}
 	else if (amount.value > 50 && amount.value < 201) {
 		if (qualityCheck == 'textCheck') { (blackPrint.checked == true) ? k = 1.24 : k = 2.01; }
 		if (qualityCheck == 'textPhotoCheck') { (blackPrint.checked == true) ? k = 1.86 : k = 2.42; }
 		if (qualityCheck == 'photoCheck') { (blackPrint.checked == true) ? k = 2.68 : k = 2.25; }
 		priceLaser += (priceLaser * k);
 	}
 	else if (amount.value > 200) {
 		if (qualityCheck == 'textCheck') { (blackPrint.checked == true) ? k = 0.78 : k = 1.65; }
 		if (qualityCheck == 'textPhotoCheck') { (blackPrint.checked == true) ? k = 1.3 : k = 1.99; }
 		if (qualityCheck == 'photoCheck') { (blackPrint.checked == true) ? k = 1.94 : k = 1.60; }
 		priceLaser += (priceLaser * k);
 	}
 	priceLaser = ((Math.ceil(priceLaser.toFixed(5) * 10)) / 10).toFixed(2);
 
 	if (sides.checked == true) {
 		priceLaser *= 2;
 	}
 	if (type_paper.value != 'false') {
 		var paperLaser = paperPriceLaser[type_paper.value];
 		console.log(paperLaser);
 	}
 	
 	priceLaser *= amount.value;
 	if (format_paper.value != false) {
 		if (format_paper.value == 'A3') { priceLaser *= 2; paperLaser *= 2; }
 		else if (format_paper.value == 'A4') { priceLaser *=1; paperLaser *= 1; }
 		else if (format_paper.value == 'A5') { priceLaser /= 2; paperLaser /= 2; }
 		else if (format_paper.value == 'A6') { priceLaser /= 4; paperLaser /= 4; }
 		else if (format_paper.value == 'A43') { priceLaser /= 3; paperLaser /= 3; }
 	}
 	
 
 
 	if (discount.value) {
 		var resLaser = ((Math.ceil(priceLaser.toFixed(5) * 10)) / 10 + paperLaser * amount.value).toFixed(2);
 		add_discount_laser.innerHTML = (resLaser - (resLaser * discount.value / 100)).toFixed(2);
 	}
 	else {add_discount_laser.innerHTML = '0.00';}
 
 	add_paper_laser.innerHTML = (paperLaser * amount.value).toFixed(2);
 	add_print_laser.innerHTML = ((Math.ceil(priceLaser.toFixed(5) * 10)) / 10).toFixed(2);
 	add_copy_laser.innerHTML = (((Math.ceil(priceLaser.toFixed(5) * 10)) / 10).toFixed(2) / amount.value + paperLaser).toFixed(2);
 	price_lazer.innerHTML = ((Math.ceil(priceLaser.toFixed(5) * 10)) / 10 + paperLaser * amount.value).toFixed(2) + "<span class='uah'> грн.</span>";
 }
 
 function getAddPrice () {
 	var rent = 800,
 		light = 350,
 		salary = 1600,
 		sheetsOnMonth = 1000;
 	return (rent + light + salary) / sheetsOnMonth;
 }
 var addPrice = getAddPrice();
 
 
 function getPriceFivePercent () {
 	var toner, developer;
 		if (blackPrint.checked == true) {
 			toner = (tonerPrice.black / tonerResource5.black);
 			
 		} else {
 			toner = (tonerPrice.black / tonerResource5.black) + (tonerPrice.yellow / tonerResource5.yellow) + (tonerPrice.red / tonerResource5.red) + (tonerPrice.blue / tonerResource5.blue);	
 			
 		}
 		developer = (developerPrice.black / developerResource.black) + (developerPrice.yellow / developerResource.yellow) + (developerPrice.red / developerResource.red) + (developerPrice.blue / developerResource.blue);
 
 	return toner + developer + (transferBeltPrice / 570000 + fixingUnitPrice / 570000) + drumUnitPriceBlack / drumUnitResBlack + drumUnitPriceColor / drumUnitResColor;
 	
 }
 
 function getPriceSixtyFivePercent () {
 	var toner, developer;
 		if (blackPrint.checked == true) {
 			toner = (tonerPrice.black / tonerResource65.black);	
 			
 		} else {
 			toner = (tonerPrice.black / tonerResource65.black) + (tonerPrice.yellow / tonerResource65.yellow) + (tonerPrice.red / tonerResource65.red) + (tonerPrice.blue / tonerResource65.blue);	
 			
 		}
 		
 		developer = (developerPrice.black / developerResource.black) + (developerPrice.yellow / developerResource.yellow) + (developerPrice.red / developerResource.red) + (developerPrice.blue / developerResource.blue);
 
 	return toner + developer + (transferBeltPrice / 570000 + fixingUnitPrice / 570000) + drumUnitPriceBlack / drumUnitResBlack + drumUnitPriceColor / drumUnitResColor;
 }
 

/*-------INK-JET PRINT-------*/
var inkInf = {
	sixColors: 390, /* 6 colors (100ml every one) */
	generalVolume: 600,
	costPrice: function () {
		return +(this.sixColors / this.generalVolume).toFixed(2);
	}
}
var paperPrice = {
	'70gm': 1,
 	'80gm': 2,
 	'80gmc': 3,
 	'g140gm': 9, /*3.80*/
 	'g210gm': 12, /*4.15*/
 	'0': 0
}
var depreciationIJ = 1.00;
var qualityIJ = document.getElementsByName('radioCheckIJ'),
	amountIJ = document.getElementById('input_inkjet'),
	paper_type_IJ = document.getElementById('paper_type_IJ'),
	paper_format_IJ = document.getElementById('paper_format_IJ'),
	discountIJ = document.getElementById('IJ_discount_input'),
	massageIJ = document.getElementById('massage_IJ'),
	add_paper_price_IJ = document.getElementById('add_paper_price_IJ'),
	add_print_price_IJ = document.getElementById('add_print_price_IJ'),
	add_print_copy_IJ = document.getElementById('add_print_copy_IJ'),
	add_discount_IJ = document.getElementById('add_discount_IJ'),
	inkjet_output_res = document.getElementById('inkjet_output_res');

	massageIJ.style.display = 'none';
		
 	
 	function getQualityIJ () {
 		for (var i = 0; i < qualityIJ.length; i++) {
 		var qualityCheckIJ;
 		if (qualityIJ[i].checked == true) {
 			qualityCheckIJ = qualityIJ[i].id;
 		}
 	}
 		
 		if (qualityCheckIJ == 'IJTextCheck') {
 			return inkInf.costPrice() + depreciationIJ * 0.8;
 		}
 		else if (qualityCheckIJ == 'IJTextPhotoCheck') {
 			return inkInf.costPrice() + depreciationIJ * 1.3;
 		}
 		else if (qualityCheckIJ == 'IJPhotoCheck') {
 			return inkInf.costPrice() + depreciationIJ * 1.8;
 		}
 	}
 	function alertMassageIJ () {
         function startTimer () {
 
             var alertTimer = setTimeout(function() {
                 massageIJ.style.display = 'none';
             },3800);
 
             massageIJ.style.display = 'block';
 			massageIJ.innerHTML = 'Незаповнені обов\'язкові поля для розрахунку';
         }
         startTimer();
     }
 	function getCheckFieldIJ() {
 		if (!amountIJ.value || paper_type_IJ.value == 'false' || paper_format_IJ.value == 'false') {
 		
 			alertMassageIJ();
 			if (!amountIJ.value) {
 				amountIJ.setAttribute('class', 'alert_laser');
 				amountIJ.style.border = '1px solid red';
 			};
 			if (paper_type_IJ.value == 'false') { paper_type_IJ.setAttribute('class', 'alert_laser'); };
 			if (paper_format_IJ.value == 'false') { paper_format_IJ.setAttribute('class', 'alert_laser') }; 
  		}
 		else { resultIJ (); }
 	}

 	function resultIJ () {
 		var printPrice = getQualityIJ (),
 			paperFormatPrice;
 			printPrice = ((Math.ceil(printPrice * 10)) / 10).toFixed(2);

 		if (paper_format_IJ.value == 'A3') {
 			printPrice *= 2;
 			paperFormatPrice = paperPrice[paper_type_IJ.value] * 2;
 		}
 		if (paper_format_IJ.value == 'A4') {
 			printPrice *= 1;
 			paperFormatPrice = paperPrice[paper_type_IJ.value] * 1;
 		}
 		if (paper_format_IJ.value == 'A5') {
 			printPrice /= 2;
 			paperFormatPrice = paperPrice[paper_type_IJ.value] / 2;
 		}
 		if (paper_format_IJ.value == 'A6') {
 			printPrice /= 4;
 			paperFormatPrice = paperPrice[paper_type_IJ.value] / 4;
 		}
 		if (paper_format_IJ.value == 'A43') {
 			printPrice /= 3;
 			paperFormatPrice = paperPrice[paper_type_IJ.value] / 3;
 		}

 			printPrice = +((Math.ceil(printPrice * 10)) / 10).toFixed(2);
 			paperFormatPrice = +((Math.ceil(paperFormatPrice * 10)) / 10).toFixed(2);

 			add_print_price_IJ.innerHTML = (printPrice * amountIJ.value).toFixed(2);
 			add_paper_price_IJ.innerHTML = (paperFormatPrice * amountIJ.value).toFixed(2);
 			add_print_copy_IJ.innerHTML = (printPrice + paperFormatPrice).toFixed(2);

 			if (discountIJ.value) {
 				var startPriceIJ = ((printPrice + paperFormatPrice) * amountIJ.value).toFixed(2);
 				add_discount_IJ.innerHTML = (startPriceIJ - (startPriceIJ * discountIJ.value / 100)).toFixed(2);
 			} else {
 				add_discount_IJ.innerHTML = '0.00';
 			}

 		inkjet_output_res.innerHTML = ((printPrice + paperFormatPrice) * amountIJ.value).toFixed(2) + "<span class='uah'> грн.</span>";
 	}