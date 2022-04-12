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
    ->setTitle("Network Priorities")
    ->setClassName("browser")
    ->setTooltip("Supported browsers version in bowser satisfy format.")
    ->setHelpText("Format: <b>key : value</b>")
    ->generate();
?>