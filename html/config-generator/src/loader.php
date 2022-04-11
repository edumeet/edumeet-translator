<?php
$path    = __DIR__.'/app/';
$files = scandir($path);
$files = array_diff(scandir($path), array('.', '..'));
foreach($files as $file){
    if(str_contains($file,"schema.php") && is_file($path.$file) && is_readable($path.$file)){
        require_once($path.$file);
    }
}
