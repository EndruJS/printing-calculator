<div id="largeFormatWrapper">
	<div id="input_fields">
		<div id="input_W">
			<label for="input_weight">Ширина: </label>
			<input id="input_weight" type="number" name="" placeholder="ширина (мм)">
			<label for="input_weight">мм.</label>
		</div>
		<div id="input_H">
			<label for="input_height">Висота: </label>
			<input id="input_height" type="number" name="" placeholder="висота (мм)">
			<label for="input_height">мм.</label>
		</div>
		<div id="paper">
			<select id="type_papers">
				<option value="false" disabled="" selected="">---Оберіть папір---</option>
				<option value="80gm">Папір 80г/м</option>
				<option value="140gm">Папір (сіті-лайт)</option>
				<option value="150gm">Папір (Ватман)</option>
				<option value="Matte-SA">Матова самоклеюча</option>
				<option value="Oracal">Глянцева самоклеюча (Oracal)</option>
				<option value="Canvas350">Холст 350г/м</option>
				<option value="Canvas180">Холст 180г/м</option>
				<option value="Banner">Банер</option>
				<option value="PVHOracal">ПВХ з Oracal</option>
			</select>
		</div>
	</div>
	<div id="add_option">
		<div id="eyelets">
			<label for="eyelets_amount">Люверсы: </label>
			<input id="eyelets_amount" type="number" name="" placeholder="0">
			<label for="eyelets_amount"> шт.</label>
		</div>
		<div id="sticking">
			<label for="sticking_price">Додаткові послуги: </label>
			<input id="sticking_price" type="number" name="" placeholder="0">
			<label for="sticking_price">грн.</label>
		</div>
		<div id="discount_LF">
			<label for="discount_amount">Знижка: </label>
			<input id="discount_amount" type="number" name="" placeholder="0">
			<label for="discount_amount">%</label>
		</div>
	</div>
	
	<div id="res_inf">
		<div id="resInfText">Ціна: <span class="uahLF"> грн.</span><span id="result">0.00</span></div>
		<div id="resInfText">Ціна з люверсами: <span class="uahLF"> грн.</span><span id="result_eyelets">0.00</span></div>
		<div id="resInfText">Ціна зі знижкою: <span class="uahLF"> грн.</span><span id="result_discount">0.00</span></div>
	</div>
	<div id="button_res">
		<button id="res_button" onclick="checkFields ()">Виконати розрахунок</button>
	</div>
	<div id="massage_LF">
		
	</div>
</div>