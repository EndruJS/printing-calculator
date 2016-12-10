<div class="top_wrapper">
    <div class="circulation">
        <label for="input_value" class="text_calc">Тираж: </label>
        <input id="input_value" type="number" size="20" placeholder="Введіть тираж" />
    </div>
    <div class="print_sides">
        <div class="printSidesTitle">Сторони та колір задруковування</div>
        <div class="colors_wrapper">

            <div class="first_side">
                <input type="checkbox" id="sides_1" name="sides_1" value="1" onclick="getSides()"/>
                <label id="colors_label_1" for="sides_1" onclick="checkedSides()">Одностронній</label>
                <div id="colors_1">
                    <div class="left_color">
                        <p>    
                            <input name="sides_colors" id="color_checkbox_1_1" value="black" type="checkbox" checked="" />
                            <label for="color_checkbox_1_1">Чорний</label>
                        </p>
                        <p>
                            <input name="sides_colors" id="color_checkbox_1_2" value="color" type="checkbox" />
                            <label for="color_checkbox_1_2">Червоний</label>
                        </p>
                    </div>
                    <div class="right_color">
                        <p>
                            <input name="sides_colors" id="color_checkbox_1_3" value="color" type="checkbox" />
                            <label for="color_checkbox_1_3">Синій</label>
                        </p>
                        <p>
                            <input name="sides_colors" id="color_checkbox_1_4" value="color" type="checkbox" />
                            <label for="color_checkbox_1_4">Зелений</label>
                        </p>
                    </div>
                </div>
            </div>
            <div class="second_side">
                <input type="checkbox" id="sides_2" name="sides_2" value="2" onclick="getSides()" />
                <label id="colors_label_2" for="sides_2" onclick="checkedSides()">Двухсторонній</label>
                <div id="colors_2">
                    <div class="left_color">
                        <p>    
                            <input name="sides_colors" id="color_checkbox_2_1" value="black" type="checkbox"/>
                            <label for="color_checkbox_2_1">Чорний</label>
                        </p>
                        <p>
                            <input name="sides_colors" id="color_checkbox_2_2" value="color" type="checkbox" />
                            <label for="color_checkbox_2_2">Червоний</label>
                        </p>
                    </div>
                    <div class="right_color">
                        <p>
                            <input name="sides_colors" id="color_checkbox_2_3" value="color" type="checkbox" />
                            <label for="color_checkbox_2_3">Синій</label>
                        </p>
                        <p>
                            <input name="sides_colors" id="color_checkbox_2_4" value="color" type="checkbox" />
                            <label for="color_checkbox_2_4">Зелений</label>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
<div class="middle_wrapper">
    <div class="paper_tp">
        <label for="paper_type" class="text_calc">Щільність паперу: </label>
        <select id="paper_type">
            <option value="false" selected="" disabled=""> --- Оберіть папір ---</option>
            <option value="45g">Газетний (45г/м)</option>
            <option value="60g">Офсетний (60г/м)</option>
            <option value="70g">Офсетний (70г/м)</option>
            <option value="80gw">Офісний білий (80г/м)</option>
            <option value="80gc">Офісний кольоровий (80г/м)</option>
            <option value="160gw">Картон білий (160г/м)</option>
            <option value="160gc">Картон кольоровий (160г/м)</option>
            <option value="215g">Хромерзат (215г/м)</option>
        </select>
    </div>
    <div class="paper_form">
        <label for="paper_format" class="text_calc">Формат паперу: </label>
        <select id="paper_format">
            <option value="false" selected="" disabled=""> --- Оберіть формат ---</option>
            <option value="A3">А3 (420мм на 297мм)</option>
            <option value="A4">А4 (297мм на 210мм)</option>
            <option value="A5">А5 (210мм на 148мм)</option>
            <option value="A6">А6 (148мм на 105мм)</option>
            <option value="A43">А4/3 (210мм на 98мм)</option>
            <option value="Other" disabled="">Інший</option>
        </select>
    </div>
    
</div>
<div id="binding">
    <div id="bindText">Тип обгортки (для журналів): </div>
    <div id="bindBox">
        <span class="img" id="img-1"></span>
        <input class="bindChekbox" id="bindChekbox-1" type="checkbox" name="binding" onclick="getBinding(this)">
        <label for="bindChekbox-1">Скрепка</label>

    </div>
    <div id="bindBox">
        <span class="img" id="img-2"></span>
        <input class="bindChekbox" id="bindChekbox-2" type="checkbox" name="binding" onclick="getBinding(this)">
        <label for="bindChekbox-2">Скрепка та клейка стрічка</label>    
    </div>
    <div id="bindBox">
        <span class="img" id="img-3"></span>
        <input class="bindChekbox" id="bindChekbox-3" type="checkbox" name="binding" onclick="getBinding(this)">
        <label for="bindChekbox-3">Тверда обгортка</label>
    </div>
</div>
<div id="discountFieldRiso">
    <label for="discount" class="text_calc">Знижка: </label>
    <input type="number" id="discount" size="20" placeholder="0%" value="" />
</div>
<div class="counting_results">
    <div class="count_res_add">
        <div class="count_cont"><span class="count_res_add_text">Вартість паперу: </span><span class="count_res_add_price">0.00 <span class="uah_m">грн.</span></span></div>
        <div class="count_cont"><span class="count_res_add_text">Вартість друку: </span><span class="count_res_add_price">0.00 <span class="uah_m">грн.</span></span></div>
        <div class="count_cont"><span class="count_res_add_text">Вартість одного екземпляру: </span><span class="count_res_add_price">0.00 <span class="uah_m">грн.</span></span></div>
    </div>
    <div class="count_res_price">
        <div class="count_res"><span class="count_res_text">Загальна вартість замовлення: </span><span class="count_result_price">0.00 <span class="uah">грн.</span></span></div>
        <div class="count_res_discount"><span class="count_res_text">Вартість замовлення зі знижкою: </span><span class="count_result_price">10.00 <span class="uah">грн.</span></span></div>
    </div>
</div>
<div id="button_cont">
    <button class="res_button" onclick="calculate ()">Виконати розрахунок</button>
</div>