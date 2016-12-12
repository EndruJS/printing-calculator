<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8"/>
    <title>Test_Project</title>
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/calculator_riso.css" />
    <link rel="stylesheet" href="css/color_calc.css">
    <link rel="stylesheet" href="css/offset.css">
    <link rel="stylesheet" href="css/large_format.css">
</head>
<body>
    <div id="wrapperBody">
    <div id="top">
        <div id="left_block">
            
            <div id="date_con">
                <div id="current_day"></div>
                <div id="date_m_date"></div>
                <div id='monthYear'>
                    <div id="date_month"></div>
                    <div id="date_year"></div>  
                </div>
            </div>

        </div>
        <div id="logo_cont">
            <span>CREATIVE <span style="color: #0981bd">DESIGN</span></span>
            <p class="under_logo">Оперативна поліграфія</p>
        </div>
        <div id="clock_date_cont">
            
            
            <div id="clock_con">
                <div id="cl_hours"></div>
                <div id="cl_minutes"></div>
                <div id="cl_seconds"></div>
            </div>
        </div>
    </div>
    <div id="middle">
    	
    	<div id="content">
        
            <div class="tabs">
            <input id="tab1" class="in_tabs" type="radio" name="tabs" checked>
            <label for="tab1" class="tabs" title="Вкладка 1">Тиражування (різографія)</label>
 
            <input id="tab2" class="in_tabs" type="radio" name="tabs">
            <label for="tab2" class="tabs" title="Вкладка 2">Кольоровий друк</label>
 
            <input id="tab3" class="in_tabs" type="radio" name="tabs">
            <label for="tab3" class="tabs" title="Вкладка 3">Офсетний друк</label>
 
            <input id="tab4" class="in_tabs" type="radio" name="tabs">
            <label for="tab4" class="tabs" title="Вкладка 4">Широкоформатний друк</label>
 
            <div id="content1">
                <?php include("blocks/calculator.php");?>
            </div> 
            <div id="content2">
                <?php include("blocks/color_calc.php");?>
            </div>  
            <div id="content3">
                <?php include("blocks/offset.php");?>
            </div>  
            <div id="content4">
                <?php include("blocks/large_format.php");?>
            </div>   
      
            </div>
        
        </div>
    </div>
    
    </div>
    <script type="text/javascript" src="js/script.js"></script>
    <script src="js/calculator_riso.js"></script>
    <script src="js/color_calc.js"></script>
    <script src="js/offset.js"></script>
    <script src="js/large_format.js"></script>
</body>
</html>