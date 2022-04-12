<?= (new SObject())
    ->setName("app.supportedBrowsers")
    ->setValue([
        "microsoft edge" => ">18",
        "safari" => ">12",
        "firefox" => ">=60",
        "chrome" => ">=74",
        "chromium" => ">=74",
        "opera" => ">=62",
        "samsung internet for android" => ">=11.1.1.52"
    ])
    ->setTitle("Supported Browsers")
    ->setClassName("browser")
    ->setTooltip("Supported browsers version in bowser satisfy format.")
    ->setHelpText("Format: <b>key : value</b>")
    ->generate();
?>