<?= (new Radio())->setName("app.loginEnabled")->setTitle("Login enabled:")->setHelpText("If the login is enabled<br>Format: Boolean | Default: FALSE")->setValue(["true" => "true", "false" => "false"])->setRequired(true)->generate(); ?>