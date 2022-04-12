<?= (new Radio())
    ->setName("app.loginEnabled")
    ->setTitle("Login enabled:")
    ->setTooltip("If the login is enabled")
    ->setHelpText("Format: <b>Boolean</b>")
    ->setDefaultValue("false")
    ->setValue(["true" => "true", "false" => "false"])
    ->setRequired(true)->generate();
?>