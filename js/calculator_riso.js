/*---READ DATE FROM INPUT, SELECT, CHECKED---*/
var input_value = document.getElementById('input_value');
var paper_format = document.getElementById('paper_format');
var paper_type = document.getElementById('paper_type');
var colors_1 = document.getElementById('colors_1');
var colors_2 = document.getElementById('colors_2');
var colors_sides_first = document.getElementById('colors_label_1');
var colors_sides_second = document.getElementById('colors_label_2');
var sides_1 = document.getElementById('sides_1');
var sides_2 = document.getElementById('sides_2');
var discount = document.getElementById('discount');
var bind = false;
/*---PRICES---*/
var currentCursDollar = 26.7;
var binding = {
    'bindChekbox-1 A4': 4,
    'bindChekbox-2 A4': 4,
    'bindChekbox-3 A4': 70,
    'bindChekbox-1 A3': 6,
    'bindChekbox-2 A3': 6,
    'bindChekbox-3 A3': 120
}
var paper_price = {
    '45g': 106,
    '60g': 187,
    '70g': 236,
    '80gw': 254,
    '80gc': 900,
    '160gw': 600,
    '160gc': 1450,
    '215g': 770 
}    
var ink_master_price = {
    masterFilm: 30,
    ink_black: 6,
    ink_color: 14
}
var dep_count = {
    count_tech: 3770,
    resource_tech: 5000000,
    master_film_frame: 200,
    ink_resource: 20000
}
var priceOrder = {
    price: '',
    price_discount: '',
    price_paper: '',
    price_print: '',
    price_one_sample: ''
}
function calculate () {
    function result () {
        var deprec = dep_count.count_tech / dep_count.resource_tech * currentCursDollar; /*--- depreciation risograph ---*/
        var master_frame = ink_master_price.masterFilm / dep_count.master_film_frame * currentCursDollar; /*--- the coust of one master film frame ---*/
        var black_ink = ink_master_price.ink_black / dep_count.ink_resource * currentCursDollar; /*--- the coust of 1 print paper of black ink ---*/
        var color_ink = ink_master_price.ink_color / dep_count.ink_resource * currentCursDollar; /*--- the coust of 1 print paper of color ink ---*/
        

        
        console.log(black_ink);
        console.log(color_ink);
        
        /*------initial data------*/
        /*var costPrice = {
            deprec: deprec.toFixed(2),
            master_frame: master_frame.toFixed(2),
            black_ink: black_ink.toFixed(2),
            color_ink: color_ink.toFixed(2)
        }*/
        
        var currentOrder = {
            circulation: '',
            format: '',
            type: '',
            sides: '',
            black_ink: '',
            colors_ink: '',
            discount: '',
            type_paper_price: '',
            price: '',
            price_discount: '',
            price_paper: '',
            price_print: '',
            price_one_sample: ''
        }
        
        var sides_print_colors = [];
        
        if (sides_1.checked == true || sides_2.checked == true) {
            currentOrder.sides = (sides_1.checked == true && sides_2.checked == true) ? 2 : 1;
            if(!sides_2.checked) {
                document.getElementById('color_checkbox_2_1').setAttribute('name','hidden_checkbox');
                document.getElementById('color_checkbox_2_2').setAttribute('name','hidden_checkbox');
                document.getElementById('color_checkbox_2_3').setAttribute('name','hidden_checkbox');
                document.getElementById('color_checkbox_2_4').setAttribute('name','hidden_checkbox');
            } else {
                document.getElementById('color_checkbox_2_1').setAttribute('name','sides_colors');
                document.getElementById('color_checkbox_2_2').setAttribute('name','sides_colors');
                document.getElementById('color_checkbox_2_3').setAttribute('name','sides_colors');
                document.getElementById('color_checkbox_2_4').setAttribute('name','sides_colors');
            }
            var checked_colors = document.getElementsByName('sides_colors');
                for (var i = 0; i < checked_colors.length; i++) {
                    if (checked_colors[i].checked) {
                        sides_print_colors.push(checked_colors[i].value);
                    }
                }
        }

        
        
        function getFormat(format) {
            var format = format;
            var formatPrice = {};
            var copyPricePaper = {}
            var indexPricePaper = {
                '45g': 0.6,
                '60g': 0.5,
                '70g': 0.6,
                '80gw': 0.6,
                '80gc': 0.5,
                '160gw': 0.5,
                '160gc': 0.3,
                '215g': 0.518 
            }
            for (var j in paper_price) {
                var indexPrice = paper_price[paper_type.value]+(paper_price[paper_type.value] * indexPricePaper[paper_type.value]);
                copyPricePaper[j] = indexPrice;
            }
            
            function getNewPrice (f) {
                var k;
                if (f == 'A4') {k=2;}
                else if (f == 'A5') {k=4;}
                else if (f == 'A6') {k=8;}
                else if (f == 'A43') {k=6;}
                else {k=1}
                
                for (var key in copyPricePaper) {
                    var i = copyPricePaper[key];
                    formatPrice[key] = i/k;
                }
                
            }
            getNewPrice(format);
            currentOrder.type_paper_price = formatPrice[paper_type.value];
            /*console.log('Формат: ' + format + "| материал: " + paper_type.value + "| цена: " + formatPrice[paper_type.value]);*/
        }
        getFormat(paper_format.value);
        
        function getColorSides () {
            var black = 0;
            var color = 0;
            for (var i=0; i<sides_print_colors.length; i++) {
                if (sides_print_colors[i] == 'black') {
                    black += 1;
                } else {
                    color += 1;
                }
            }
            currentOrder.black_ink = black;
            currentOrder.colors_ink = color;
            /*console.log("Чорний: " + black + "| Колір: " + color);*/
        }
        getColorSides();
        
        /*---------MARK-UP----------*/
        
        
        function getMarkUp (a, b) {
            var startPrice = a;
            var text = b;
            console.log(text);
            var range = ['50:100','100:200','200:300','300:400','400:500','500:600','600:700','700:800','800:900',
                         '900:1000','1000:1100','1100:1200','1200:1300','1300:1400','1400:1500','1500:1600','1600:1700',
                         '1700:1800','1800:1900','1900:2000'];
            var coefficientA3 = [82,51,51,48,44,42,40,36,32,30,27,26,25,25,24,23.5,23,22.5,22.2,22,21.5];
            var coefficientA4 = [39,24,24,23.5,22,20.7,19.7,17.5,16,14.5,13.2,12.8,12.5,12.3,11.9,11.7,11.4,11.2,11.35,10.75,10.6];
            var coefficientA5 = [0,15,12,12.5,12.5,12.5,12.3,11.5,11,10.5,10,9.7,9.4,9,8.5,8.25,8,7.7,7.3,7.1,6.8];
            var coefficientA6 = [0,0,6.5,6.1,6.3,6.3,6.3,6.4,6.4,6.4,6.4,6.3,6.1,6,5.8,5.7,5.55,5.5,5.3,5.2,5.15];
            var coefficientA43 = [0,0,8.2,8.1,8.2,8.5,8.5,8.5,8.2,8.1,7.9,7.7,7.5,7.3,7.1,6.9,6.7,6.6,6.4,6.3,6.1];
            var coefficientA3c = [52,27,28,27.7,26.2,25.1,24.4,22,20.15,18.3,16.7,16.3,15.95,15.6,15.3,15,14.7,14.4,14.1,13.9,13.6];
            var coefficientA4c = [19,12.6,13.5,13.55,12.9,12.4,12,10.9,9.9,9.05,8.25,8,7.83,7.7,7.6,7.43,7.28,7.145,7,6.88,6.75];
            var coefficientA5c = [0,8,7.1,7.4,7.5,7.54,7.5,7.2,6.95,6.61,6.35,6.1,5.9,5.65,5.45,5.25,5.08,4.87,4.68,4.49,4.281];
            var coefficientA6c = [0,0,4,3.62,3.9,3.9,4.05,4,3.98,3.99,4.05,3.95,3.85,3.78,3.7,3.63,3.57,3.5,3.43,3.37,3.3];
            var coefficientA43c = [0,0,4.8,4.85,5.1,5.28,5.3,5.21,5.1,5,4.95,4.83,4.7,4.6,4.49,4.38,4.29,4.19,4.08,4,3.9];

            var coefficient = [];

            function getCoefficient (coeff) {
                coefficient = coeff.slice();
            }
            if (paper_format.value == 'A3' && text == 0) {getCoefficient(coefficientA3);}
            else if (paper_format.value == 'A3' && text == 1) {getCoefficient(coefficientA3c);}
            if (paper_format.value == 'A4' && text == 0) {getCoefficient(coefficientA4);}
            else if (paper_format.value == 'A4' && text == 1) {getCoefficient(coefficientA4c);}
            if (paper_format.value == 'A5' && text == 0) {getCoefficient(coefficientA5);}
            else if (paper_format.value == 'A5' && text == 1) {getCoefficient(coefficientA5c);}
            if (paper_format.value == 'A6' && text == 0) {getCoefficient(coefficientA6);}
            else if (paper_format.value == 'A6' && text == 1) {getCoefficient(coefficientA6c);}
            if (paper_format.value == 'A43' && text == 0) {getCoefficient(coefficientA43);}
            else if (paper_format.value == 'A43' && text == 1) {getCoefficient(coefficientA43c);}

        function TestPrice (circulation) {
            var circulation = +circulation;
            if (circulation >= 2000) {
                this.price = (startPrice * coefficient[coefficient.length-1]) * circulation;
            }
            for (var i=0; i<range.length; i++) {
                var mass = range[i].split(':');
                if (circulation >= mass[0] && circulation <mass[1]) {
			
                    var step;
                    if (coefficient[i] == coefficientA3[0] || coefficient[i] == coefficientA4[0] || coefficient[i] == coefficientA3c[0] || coefficient[i] == coefficientA4c[0]) {
                        step = (coefficient[i] - coefficient[i+1]) / 49;
    				} else {
                        step = (coefficient[i] - coefficient[i+1]) / 99;
		      		}

			     	var k = (circulation - mass[0]) * step;

				    /*console.log(step.toFixed(5));*/

				    this.price = (startPrice * (coefficient[i] - k)) * circulation;
				    /*console.log('Price: ' + price.toFixed(2));*/
                }
            }
            return this.price;
        }
        var newInkPrice = new TestPrice(input_value.value);
        console.log(newInkPrice.price.toFixed(2));
        return newInkPrice.price.toFixed(2);
        
        }
        black_ink = getMarkUp(black_ink, 0);
        color_ink = getMarkUp(color_ink, 1);
        /*console.log(black_ink);
        console.log(color_ink);*/
        
        /*--------------------------*/
        
        /*----BINDING----*/
        var bindJournal = 0;
        if (bind && (paper_format.value == 'A3' || paper_format.value == 'A4')) {
            bindJournal = binding[bind + ' ' + paper_format.value];
        }
        /*---------------*/

        k = 1.00; /*---Коефициент тонкой настройки---*/
        
        currentOrder.circulation = input_value.value;
        currentOrder.format = paper_format.value;
        currentOrder.type = paper_type.value;
        currentOrder.discount = (!discount.value) ? 0 : discount.value;
        
        priceOrder.price_paper = currentOrder.circulation * (currentOrder.type_paper_price / 1000) + deprec;
        priceOrder.price_print = (currentOrder.black_ink + currentOrder.colors_ink) * master_frame + (((currentOrder.black_ink * black_ink) + (currentOrder.colors_ink * color_ink)) * k) + deprec;
        
        
        priceOrder.price_one_sample = (priceOrder.price_paper + priceOrder.price_print) / currentOrder.circulation;
        priceOrder.price = priceOrder.price_paper + priceOrder.price_print;
        priceOrder.price_discount = priceOrder.price - (priceOrder.price * discount.value / 100);
        
        priceOrder.price += bindJournal;
        priceOrder.price_discount += bindJournal;
        /*for (var key in costPrice) {
            console.log([key] + ": " + costPrice[key]);
        }*/
        /*for (var key in currentOrder) {
            console.log([key] + ": " + currentOrder[key]);
        }*/
    }
    
    /*---INSERT MASSAGE FIELD---*/
    
    function alertMassage (massage) {
        function startTimer () {
            var alertTimer = setTimeout(function() {
                div.parentNode.removeChild(div);
            },4200);
        }
        if(!document.getElementById('alert')) {
            var div = document.createElement('div');
            div.id = 'alert';
            div.innerHTML = massage;
            button_cont.insertBefore(div,button_cont.children[0]);
        } else {
            document.getElementById('alert').innerHTML = massage;
        }
        startTimer();
    }
    /*--- MASSAGES ---*/
    var text_massage = {
        empty_input_value: '"Тираж"',
        empty_paper_format: '"Формат паперу"',
        empty_paper_type: '"Щільність паперу"',
        empty_sides: '"Не обрана жодна сторона для друку"',
        volume_edition_A3: '"Замалий розмір тиражу. Мінімальний об\'єм 50 екземплярів"',
        volume_edition_A4: '"Замалий розмір тиражу. Мінімальний об\'єм 50 екземплярів"',
        volume_edition_A5: '"Замалий розмір тиражу. Мінімальний об\'єм 100 екземплярів"',
        volume_edition_A6: '"Замалий розмір тиражу. Мінімальний об\'єм 200 екземплярів"',
        volume_edition_A4_3: '"Замалий розмір тиражу. Мінімальний об\'єм 200 екземплярів"',
        sides_colors: '"Забагато фарби, це призведе до неналежного вигляду продукції"'
    }
    /*--- check field on the void ---*/
    function emptyField () {
        var empty_fields = [];
        if (!input_value.value) {
            empty_fields.push(text_massage.empty_input_value);
            input_value.setAttribute('class','input_value');
            input_value.style.border = '1px solid red';
        }
        if (paper_format.value == 'false') {
            empty_fields.push(text_massage.empty_paper_format);
            paper_format.setAttribute('class','input_value');
            paper_format.style.border = '1px solid red';
        }
        if (paper_type.value == 'false') {
            empty_fields.push(text_massage.empty_paper_type);
            paper_type.setAttribute('class','input_value');
            paper_type.style.border = '1px solid red';
        }
        if (sides_1.checked == "" && sides_2.checked == "") {
            empty_fields.push(text_massage.empty_sides);
            colors_sides_first.setAttribute('class','input_value');
            colors_sides_second.setAttribute('class','input_value');
        }
        if (empty_fields.length) {
            if (empty_fields.length == 1) {
                alertMassage("Незаповнене поле: " + empty_fields[0]);
            } else {
                alertMassage("Незаповнені поля: " + empty_fields.join("; "));
            }
        }
        if (paper_format.value == 'A3' && input_value.value < 50) {
            alertMassage(text_massage.volume_edition_A3);
        }
        if (paper_format.value == 'A4' && input_value.value < 50) {
            alertMassage(text_massage.volume_edition_A4);
        }
        if (paper_format.value == 'A5' && input_value.value < 100) {
            alertMassage(text_massage.volume_edition_A5);
        }
        if (paper_format.value == 'A6' && input_value.value < 200) {
            alertMassage(text_massage.volume_edition_A6);
        }
        if (paper_format.value == 'A43' && input_value.value < 200) {
            alertMassage(text_massage.volume_edition_A4_3);
        }
    }
    emptyField();

    
    /*---OUTPUT FIELDS AND CALCULATIONS RESULT---*/
    if(!document.getElementById('alert')){
        result();
        var count_res_add_price = document.getElementsByClassName('count_res_add_price');
            count_res_add_price[0].innerHTML = priceOrder.price_paper.toFixed(2) + ' <span class="uah_m">грн.</span>';      /*---Coast of paper---*/
            count_res_add_price[1].innerHTML = priceOrder.price_print.toFixed(2) + ' <span class="uah_m">грн.</span>';      /*---Coast of print---*/
            count_res_add_price[2].innerHTML = priceOrder.price_one_sample.toFixed(2) + ' <span class="uah_m">грн.</span>';      /*---Coast of one copy ---*/
        var count_result_price = document.getElementsByClassName('count_result_price');
            count_result_price[0].innerHTML = priceOrder.price.toFixed(2) + ' <span class="uah">грн.</span>';       /*---Coast all order---*/
            count_result_price[1].innerHTML = priceOrder.price_discount.toFixed(2) + ' <span class="uah">грн.</span>';       /*---Coast all order with discount---*/
        if (discount.value && input_value && paper_type && paper_format) {
            count_res_discount[0].style.display = 'block';
        } else {
            count_res_discount[0].style.display = 'none';
        }
    }
    /*for (var key in priceOrder) {
            console.log([key] + ": " + priceOrder[key]);
        }*/
        
    
}
function checkedSides (){
        if (true) {
            colors_sides_first.removeAttribute('class');
            colors_sides_second.removeAttribute('class');
        }
    } 
/*----INSPECTION CHECKBOX SIDES COLORS----*/

function getSides () {
    var sides_1 = document.getElementById('sides_1');
    var colors_1 = document.getElementById('colors_1');
        colors_1.style.display = 'none';
    var sides_2 = document.getElementById('sides_2');
    var colors_2 = document.getElementById('colors_2');
        colors_2.style.display = 'none';
        sides_1.setAttribute('checked','');
        
    if(sides_1.checked == true) {
            colors_1.style.display = 'block';
        }
    if (sides_2.checked) {
        if (!sides_1.checked) {
            sides_1.checked = 'true';
            colors_1.style.display = 'block';
        }
        sides_2.setAttribute('checked','');
        colors_2.style.display = 'block';
    }
    else {
        sides_2.removeAttribute('checked');
    }
    
    /*console.log("Side 1: " + sides_1.checked + " Side 2:" + sides_2.checked);*/
}
getSides();


function getBinding (bindId) {
    var bindingElements = document.getElementsByName('binding');
    
    for (var i = 0; i<bindingElements.length; i++) {
        if (bindingElements[i].id == bindId.id) {
            bindingElements[i].value = 'check';
            if (bindingElements[i].checked == true) {
                bind = bindId.id;    
            }
            else {
                bind = false;
            }
        } else {
            bindingElements[i].value = 'notCheck';

        }
        if (bindingElements[i].value != 'check') {
            bindingElements[i].checked = false;    
        }
    }
}


/*---HIDDEN FIELD COAST WITH DISCOUNT if discount is false ---*/
var count_res_discount = document.getElementsByClassName('count_res_discount');
var discount = document.getElementById('discount');
    
count_res_discount[0].style.display = 'none';
/*-----------------------------------------*/










