<?= (new Text())
    ->setName("app.productionPort")
    ->setTitle("Production port")
    ->setPattern("^(6553[0-5]|655[0-2]\d|65[0-4]\d\d|6[0-4]\d{3}|[1-5]\d{4}|[1-9]\d{0,3}|0)$")
    ->setTooltip("The production server listening port.")
    ->setHelpText("Format: <b>integer</b> | Min. val.: <b>0</b> | Max. val.: <b>65536</b>")
    ->setValue("443")
    ->setRequired(true)
    ->generate();
?>