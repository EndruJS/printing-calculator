<div id="color_wrapper">

	<div id="laser_col">
		<div id="title_laser">МФУ ДРУК</div>
		<div id="quantity_laser">
			<label for="input_quantity">Введіть кількість</label>
			<input id="input_quantity" type="text" name="quantity" size="20" placeholder="Введіть кількість">
		</div>
		<div id="quality_laser">
			<div id="laser_text">
				<div id="textCheckImgLaser"></div>
				<input id="textCheck" type="radio" name="radioCheck" checked="">
				<label for="textCheck">Текст</label>
			</div>
			<div id="laser_pic">
				<div id="textPhotoCheckImgLaser"></div>
				<input id="textPhotoCheck" type="radio" name="radioCheck">
				<label for="textPhotoCheck">Текст + Фото</label>
			</div>
			<div id="laser_foto">
				<div id="photoCheckImgLaser"></div>
				<input id="photoCheck" type="radio" name="radioCheck">
				<label for="photoCheck">ФОТО</label>
			</div>
		</div>
		<div id="addLaserOption">
			<div id="print_sides_laser">
				<input id="sides_laser" type="checkbox" name="two_sides">
				<label for="sides_laser">Двухсторонній друк</label>
			</div>
			<div id="laserBlackPrint">
				<input id="black_laser" type="checkbox" name="blackColorLaser">
				<label for="black_laser">Чорно-білий друк</label>
			</div>
		</div>
		<div id="paper_select_type">
			<select id="paper_type_laser">
				<option value="false" disabled="" selected="">---Оберіть папір---</option>
				<option value="70gm">Офсет (70г/м)</option>
				<option value="80gm">Офісний (80г/м)</option>
				<option value="80gmc">Офісний кольоровий (80г/м)</option>
				<option value="g120gm">Глянець (120г/м)</option>
				<option value="120gmc">Картон кольоровий (120г/м)</option>
				<option value="140gm">Картон (140г/м)</option>
				<option value="160gm">Картон кольоровий (160г/м)</option>
				<option value="g210gm">Глянець (210г/м)</option>
				<option value="g280gm">Глянець (280г/м)</option>
				<option value="m280gm">Матова (280г/м)</option>
				<option value="0">Папір замовника</option>
			</select>
		</div>
		<div id="paper_format_select">
			<select id="paper_format_laser">
				<option value="false" disabled="" selected="">---Оберіть формат---</option>
				<option value="A3">A3 (420мм на 297мм)</option>
				<option value="A4">A4 (297мм на 210мм)</option>
				<option value="A5">A5 (210мм на 148мм)</option>
				<option value="A6">A6 (148мм на 105мм)</option>
				<option value="A43">A4/3 (210мм на 98мм)</option>
			</select>
		</div>
		<div id="laser_discount">
			<label for="laser_discount_input">Знижка</label>
			<input id="laser_discount_input" type="text" name="quantity" size="7" placeholder="0%">
		</div>
		<div id="add_inf_laser">
			<div id="addFields">

				<div class="addTextField">Вартість паперу: <span> грн.</span><span id="add_paper_price_laser">0.00</span></div>
				<div class="addTextField">Вартість друку: <span> грн.</span><span id="add_print_price_laser">0.00</span></div>
				<div class="addTextField">Вартість однієї копії: <span> грн.</span><span id="add_print_copy_laser">0.00</span></div>
				<div class="addTextField">Вартість зі знижкою: <span> грн.</span><span id="add_discount_laser">0.00</span></div>	
			</div>
			<div id="laser_output_res">0.00<span class="uah"> грн.</span></div>
		</div>
		

		<div id="button_laser">
			<button id="res_laser_button" onclick="getCheckField()">Розрахувати</button>
		</div>
		<div id="massage_laser"></div>
	</div>

	<!--INK-JET PRINT-->

	<div id="inkJet_col">
		<div id="titleIJ">СТРУМЕНЕВИЙ ДРУК</div>
		<div id="quantity_inkJet">
			<label for="input_inkjet">Введіть кількість</label>
			<input id="input_inkjet" type="text" name="quantity" size="20" placeholder="Введіть кількість">
		</div>
		<div id="quality_inkjet">
			<div id="inkjet_text">
				<div id="textCheckImgLaser"></div>
				<input id="IJTextCheck" type="radio" name="radioCheckIJ" checked="">
				<label for="IJTextCheck">Текст</label>
			</div>
			<div id="inkjet_pic">
				<div id="textPhotoCheckImgLaser"></div>
				<input id="IJTextPhotoCheck" type="radio" name="radioCheckIJ">
				<label for="IJTextPhotoCheck">Текст + Фото</label>
			</div>
			<div id="inkjet_foto">
				<div id="photoCheckImgLaser"></div>	
				<input id="IJPhotoCheck" type="radio" name="radioCheckIJ">
				<label for="IJPhotoCheck">ФОТО</label>
			</div>
		</div>
		<div id="paper_select_type_IJ">
			<select id="paper_type_IJ">
				<option value="false" disabled="" selected="">---Оберіть папір---</option>
				<option value="70gm">Офсет (70г/м)</option>
				<option value="80gm">Офісний (80г/м)</option>
				<option value="80gmc">Офісний кольоровий (80г/м)</option>
				<option value="g120gm">Глянець (140г/м)</option>
				<option value="g210gm">Глянець (210г/м)</option>
				<option value="0">Папір замовника</option>
			</select>
		</div>
		<div id="paper_format_select_IJ">
			<select id="paper_format_IJ">
				<option value="false" disabled="" selected="">---Оберіть формат---</option>
				<option value="A3">A3 (420мм на 297мм)</option>
				<option value="A4">A4 (297мм на 210мм)</option>
				<option value="A5">A5 (210мм на 148мм)</option>
				<option value="A6">A6 (148мм на 105мм)</option>
				<option value="A43">A4/3 (210мм на 98мм)</option>
			</select>
		</div>
		<div id="IJ_discount">
			<label for="IJ_discount_input">Знижка</label>
			<input id="IJ_discount_input" type="text" name="quantity" size="7" placeholder="0%">
		</div>
		<div id="addInfIJ">
			<div id="add_inf_IJ">
				<div class="addTextField">Вартість паперу: <span> грн.</span><span id="add_paper_price_IJ">0.00</span></div>
				<div class="addTextField">Вартість друку: <span> грн.</span><span id="add_print_price_IJ">0.00</span></div>
				<div class="addTextField">Вартість однієї копії: <span> грн.</span><span id="add_print_copy_IJ">0.00</span></div>
				<div class="addTextField">Вартість зі знижкою: <span> грн.</span><span id="add_discount_IJ">0.00</span></div>
			</div>
			<div id="inkjet_output_res">0.00<span class="uah"> грн.</span></div>
		</div>
		
		<div id="button_inkJet">
			<button id="res_inkjet_button" onclick="getCheckFieldIJ()">Розрахувати</button>
		</div>
		<div id="massage_IJ"></div>
	</div>
	
</div>