<?= (new Text())
    ->setName("app.serverHostname")
    ->setTitle("Server hostname")
    ->setTooltip("If the server component runs on a different host than the app you can specify the host name.")
    ->setHelpText("Format: <b>string</b>")
    ->generate();
?>