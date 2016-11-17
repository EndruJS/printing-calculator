<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8"/>
    <title>Test_Project</title>
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/calculator_riso.css" />
</head>
<body>

<div id="top">
    <div id="logo_cont">
        <span>CREATIVE <span style="color: red">DESIGN</span></span>
        <p class="under_logo">Оперативна поліграфія</p>
    </div>
        <?php include("blocks/date.php"); ?>
    <div id="top_menu">
        <?php include("blocks/top_menu.php"); ?>
    </div>
</div>
<div id="middle">
    <div id="left_menu">
        <?php include("blocks/left_menu.php"); ?>
    </div>
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
                222
            </div>  
            <div id="content3">
                333
            </div>  
            <div id="content4">
                444
            </div>   
      
        </div>
    </div>
</div>
<div id="bottom"></div>
<script type="text/javascript" src="js/script.js"></script>
<script src="js/calculator_riso.js"></script>
</body>
</html>