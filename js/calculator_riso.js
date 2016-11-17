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
/*---PRICES---*/
var currentCursDollar = 26.7;
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
        
        var costPrice = {
            deprec: deprec.toFixed(2),
            master_frame: master_frame.toFixed(2),
            black_ink: black_ink.toFixed(2),
            color_ink: color_ink.toFixed(2)
        }
        
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
            
            
            
            
            function getNewPrice (f) {
                var k;
                if (f == 'A4') {k=2;}
                else if (f == 'A5') {k=4;}
                else if (f == 'A6') {k=8;}
                else if (f == 'A43') {k=6;}
                else {k=1}
                
                for (var key in paper_price) {
                    var i = paper_price[key];
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
        
        currentOrder.circulation = input_value.value;
        currentOrder.format = paper_format.value;
        currentOrder.type = paper_type.value;
        currentOrder.discount = (!discount.value) ? 0 : discount.value;
        
        priceOrder.price_paper = currentOrder.circulation * (currentOrder.type_paper_price / 1000) + deprec;
        priceOrder.price_print = (currentOrder.black_ink + currentOrder.colors_ink) * master_frame + (((currentOrder.black_ink * black_ink) + (currentOrder.colors_ink * color_ink)) * currentOrder.circulation) + deprec;
        priceOrder.price_one_sample = (priceOrder.price_paper + priceOrder.price_print) / currentOrder.circulation;
        priceOrder.price = priceOrder.price_paper + priceOrder.price_print;
        priceOrder.price_discount = priceOrder.price - (priceOrder.price * discount.value / 100);         
        
        
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
        volume_edition_A4_3: '"Замалий розмір тиражу. Мінімальний об\'єм 150 екземплярів"',
        sides_colors: '"Забагато фарби, це призведе до неналежного вигляду продукції"'
    }
    /*--- check field on the void ---*/
    function emptyField () {
        var empty_fields = [];
        if (!input_value.value) {
            empty_fields.push(text_massage.empty_input_value);
            input_value.setAttribute('class','input_value');
        }
        if (paper_format.value == 'false') {
            empty_fields.push(text_massage.empty_paper_format);
            paper_format.setAttribute('class','input_value');
        }
        if (paper_type.value == 'false') {
            empty_fields.push(text_massage.empty_paper_type);
            paper_type.setAttribute('class','input_value');
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
        if (paper_format.value == 'A43' && input_value.value < 150) {
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
    for (var key in priceOrder) {
            console.log([key] + ": " + priceOrder[key]);
        }
    
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
/*---HIDDEN FIELD COAST WITH DISCOUNT if discount is false ---*/
var count_res_discount = document.getElementsByClassName('count_res_discount');
var discount = document.getElementById('discount');
    
count_res_discount[0].style.display = 'none';
/*-----------------------------------------*/
/*--- BOX-SHADOWS ACTIVE INPUT-SELECT FIELDS ---*/
    function onBlur (field_id) {
        var input = document.getElementById(field_id);
        input.onblur = function () {
            this.className = '';
        }
        input.onfocus = function () {
            this.className = 'focus_field';
        }
    }
    onBlur('input_value');
    onBlur('paper_type');
    onBlur('paper_format');
    onBlur('colors_1');
    onBlur('colors_2');
    onBlur('sides_1');
    onBlur('sides_2');
    onBlur('discount');
/*-----------------------------------------------*/










