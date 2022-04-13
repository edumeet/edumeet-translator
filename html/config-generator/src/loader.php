<?php
$path    = __DIR__ . '/app/';
$files = scandir($path);
$files = array_diff(scandir($path), array('.', '..'));
$instances = [];
foreach ($files as $file) {
    if (str_contains($file, "schema.php") && is_file($path . $file) && is_readable($path . $file)) {
        require_once($path . $file);
    }
}
createInstance($instances);
