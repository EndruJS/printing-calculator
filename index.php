<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8"/>
    <title>Test_Project</title>
    <link rel="stylesheet" href="css/style.css" />
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
        
        
        
        </div>
    </div>
    <div id="bottom"></div>
<script type="text/javascript" src="js/script.js"></script>
</body>
</html>