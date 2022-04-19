<?php
$instances[] = [
    "type" => "SObject",
    "class" => "browser",
    "name" => "app.aspestRatios",
    "title" => "Aspect Ratios",
    "tooltip" => "The selectable aspect ratios in the user settings.",
    "helptext" => "Format: <b>key {subkey : value}</b>",
    "value" => [
        [
            "value" => "1.333",
            "label" => "4:3"
        ],
        [
            "value" => "1.777",
            "label" => "16:9"
        ]
    ]
];
$instances[]=[
    "type" => "Text",
    "name" => "app.aspectRatio",
    "title" => "Aspect Ratio",
    "value"=>"1.777",
    "tooltip" => "The aspect ratio of the videos as shown on the screen.
    This value must match exactly one of the values defined in aspectRatios.",
    "helptext" => "Format: <b>float</b>"
];
