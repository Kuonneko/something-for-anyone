

<?php
header("Content-Type:text/html; charset=utf-8");

$link=mysql_connect("localhost","root","6126691");
 

if(!$link) 
    {
    echo "ser!" ;
    }
else 
    {
    echo "成功!" ;
    }
 


?>