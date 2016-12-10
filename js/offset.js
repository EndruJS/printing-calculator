/*---HORIZONTAL ON MOUSE---*/
function onMouse (data) {
	var parentElement = data.parentNode;
		for (var i = 0; i<parentElement.children.length; i++) {
			parentElement.children[i].style.backgroundColor = '#0981bd';
			parentElement.children[i].style.color = '#fff';
		}
}
/*---HORIZONTAL GET MOUSE---*/
function getMouse (data) {
	var parentElement = data.parentNode;
	for (var i = 0; i<parentElement.children.length; i++) {
			parentElement.children[i].style.backgroundColor = '';
			parentElement.children[i].style.color = '';
		}
}
/*---VERTICAL ON MOUSE---*/
function onMouseCol (data) {
	var parentElement = data.parentNode.id;
		
	var elem = data.id;
		data.style.color = '#fff';
	var vertElements = document.querySelectorAll('div');
		for (var i = 0; i < vertElements.length; i++) {
			if (vertElements[i].id == elem && vertElements[i].parentNode.id != parentElement) {
				vertElements[i].style.color = '#fff';
			}
		}

	var getAllElem = document.querySelectorAll('div');

	for (var i = 0; i<getAllElem.length; i++) {
		if (getAllElem[i].id == elem) {
			getAllElem[i].style.backgroundColor = '#0981bd';
			
		}

	}
}
/*---VERTICAL GET MOUSE---*/
function getMouseCol (data) {
	var parentElement = data.parentNode.id;

	var elem = data.id;
		data.style.color = '';
	var vertElements = document.querySelectorAll('div');
		for (var i = 0; i < vertElements.length; i++) {
			if (vertElements[i].id == elem && vertElements[i].parentNode.id != parentElement) {
				vertElements[i].style.color = '';
			}
		}
	
	var getAllElem = document.querySelectorAll('div');

	for (var i = 0; i<getAllElem.length; i++) {
		if (getAllElem[i].id == elem) {
			getAllElem[i].style.backgroundColor = '';

		}
	}
}
/*---CELL ON MOUSE---*/
function onMouseCell (data) {
	onMouse(data);
	onMouseCol(data);
	var parentElement = data.parentNode;
		data.parentNode.style.color = '#fff';
	var childrenElem = parentElement.children[data.id];
		childrenElem.style.backgroundColor = '#fff';
		childrenElem.style.border = '1px solid #0981bd';
		childrenElem.style.color = '#0981bd';
	var classList = childrenElem.classList;
		classList.add('cellHover');
		
}
/*---CELL GET MOUSE---*/
function getMouseCell (data) {
	getMouse(data);
	getMouseCol(data);
	var parentElement = data.parentNode;
	var childrenElem = parentElement.children[data.id];
		childrenElem.style.backgroundColor = '';
		childrenElem.style.border = '1px solid silver';
		childrenElem.style.color = '';
	var classList = childrenElem.classList;
		classList.remove('cellHover');
}


var visit_card = {
		title: 'ВІЗИТКА</br><span class=\'titleText\'>(90х50мм) 350 г/м2, 4+4, УФ-лак</span>',
		idTitle: 'visit_card',
		first_col: '270.00',
		second_col: '450.00',
		third_col: 'N/A',
		forth_col: '610.00',
		fifth_col: '750.00',
		six_col: '870.00',
		seven_col: '1570.00'
	},
	calendar = {
		title: 'КАЛЕНДАРИК (Кишеньковий)</br><span class=\'titleText\'>(70х100мм) 350 г/м2, 4+4, УФ-лак</span>',
		idTitle: 'calendar',
		first_col: '450.00',
		second_col: '750.00',
		third_col: 'N/A',
		forth_col: '1030.00',
		fifth_col: 'N/A',
		six_col: '1350.00',
		seven_col: '2470.00'
	},
	euro_flaer = {
		title: 'Єврофлаєр</br><span class=\'titleText\'>(210х100мм) 130 г/м2, 4+4</span>',
		idTitle: 'euro_flaer',
		first_col: '470.00',
		second_col: 'N/A',
		third_col: '670.00',
		forth_col: 'N/A',
		fifth_col: 'N/A',
		six_col: '1030.00',
		seven_col: '1630.00'
	},
	henger = {
		title: 'Хенгер</br><span class=\'titleText\'>(210х100мм) 130 г/м2, 4+4, высечка</span>',
		idTitle: 'henger',
		first_col: '870.00',
		second_col: 'N/A',
		third_col: '1470.00',
		forth_col: 'N/A',
		fifth_col: 'N/A',
		six_col: '1970.00',
		seven_col: '2570.00'
	},
	A6 = {
		title: 'Листівка А6</br><span class=\'titleText\'>(105х148мм) 130 г/м2, 4+4</span>',
		idTitle: 'A6',
		first_col: '430.00',
		second_col: 'N/A',
		third_col: '590.00',
		forth_col: 'N/A',
		fifth_col: 'N/A',
		six_col: '870.00',
		seven_col: '1370.00'
	},
	A5 = {
		title: 'Листівка А5</br><span class=\'titleText\'>(148х210мм) 130 г/м2, 4+4</span>',
		idTitle: 'A5',
		first_col: '670.00',
		second_col: 'N/A',
		third_col: '1070.00',
		forth_col: 'N/A',
		fifth_col: 'N/A',
		six_col: '1620.00',
		seven_col: '2570.00'
	},
	A4 = {
		title: 'Буклет А4</br><span class=\'titleText\'>(210х297мм) 130 г/м2, 4+4</span>',
		idTitle: 'A4',
		first_col: '1120.00',
		second_col: 'N/A',
		third_col: '1770.00',
		forth_col: 'N/A',
		fifth_col: 'N/A',
		six_col: '2670.00',
		seven_col: '4370.00'
	},
	A40 = {
		title: 'Листівка А4</br><span class=\'titleText\'>(210х297мм) 115 г/м2, 4+0</span>',
		idTitle: 'A40',
		first_col: '1070.00',
		second_col: '1370.00',
		third_col: '1670.00',
		forth_col: '1770.00',
		fifth_col: '2070.00',
		six_col: '2470.00',
		seven_col: '3870.00'
	},
	A3 = {
		title: 'Плакат А3</br><span class=\'titleText\'>(297х420мм) 115 г/м2, 4+0</span>',
		idTitle: 'A3',
		first_col: '1320.00',
		second_col: '2020.00',
		third_col: '2420.00',
		forth_col: '2670.00',
		fifth_col: '3270.00',
		six_col: '3770.00',
		seven_col: '6570.00'
	},
	A2 = {
		title: 'Плакат А2</br><span class=\'titleText\'>(420х594мм) 115 г/м2, 4+0</span>',
		idTitle: 'A2',
		first_col: '2370.00',
		second_col: '3570.00',
		third_col: '4220.00',
		forth_col: '4770.00',
		fifth_col: '5120.00',
		six_col: '6970.00',
		seven_col: '12070.00'
	}


var offsetPrice = [visit_card,calendar,euro_flaer,henger,A6,A5,A4,A40,A3,A2];


function createTable () {
	/*offsetPrice.length*/
	for (var i = 0; i<offsetPrice.length; i++) {
		var div = document.createElement('div'), title, first, second, third, forth, fifth, six, seven;
			title = "<div id='title_offset' onmouseover='onMouse(this)' onmouseout='getMouse(this)'>" + offsetPrice[i].title + "</div>"
			div.id = offsetPrice[i].idTitle;
			first = "<div id='first_col' onmouseover='onMouseCell(this)' onmouseout='getMouseCell(this)'>" + offsetPrice[i].first_col + "</div>";
			second = "<div id='second_col' onmouseover='onMouseCell(this)' onmouseout='getMouseCell(this)'>" + offsetPrice[i].second_col + "</div>";
			third = "<div id='third_col' onmouseover='onMouseCell(this)' onmouseout='getMouseCell(this)'>" + offsetPrice[i].third_col + "</div>";
			forth = "<div id='forth_col' onmouseover='onMouseCell(this)' onmouseout='getMouseCell(this)'>" + offsetPrice[i].forth_col + "</div>";
			fifth = "<div id='fifth_col' onmouseover='onMouseCell(this)' onmouseout='getMouseCell(this)'>" + offsetPrice[i].fifth_col + "</div>";
			six = "<div id='six_col' onmouseover='onMouseCell(this)' onmouseout='getMouseCell(this)'>" + offsetPrice[i].six_col + "</div>";
			seven = "<div id='seven_col' onmouseover='onMouseCell(this)' onmouseout='getMouseCell(this)'>" + offsetPrice[i].seven_col + "</div>";
			wrapper_offset.appendChild(div);
		var elem = document.getElementById(offsetPrice[i].idTitle);
			elem.insertAdjacentHTML('beforeEnd',title);
			elem.insertAdjacentHTML('beforeEnd',first);
			elem.insertAdjacentHTML('beforeEnd',second);
			elem.insertAdjacentHTML('beforeEnd',third);
			elem.insertAdjacentHTML('beforeEnd',forth);
			elem.insertAdjacentHTML('beforeEnd',fifth);
			elem.insertAdjacentHTML('beforeEnd',six);
			elem.insertAdjacentHTML('beforeEnd',seven);
	}
}
createTable();