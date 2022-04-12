<?= (new SObject())
    ->setName("app.networkPriorities")
    ->setValue(
        [
            "audio" => "high",
            "mainVideo" => "high",
            "additionalVideos" => "medium",
            "screenShare" => "medium"
        ]
    )
    ->setTitle("networkPriorities")
    ->setClassName("browser")
    ->setTooltip("Supported browsers version in bowser satisfy format.")
    ->setHelpText("Format: <b>key : value</b>")
    ->generate();
?>