<?php
//phpinfo();
abstract class Input
{
    protected string $ClassName;
    protected string $Title;
    protected string $HelpText;
    protected string $Name;
    protected string $IdName;
    protected string $Type;
    protected string $Placeholder;
    protected bool $Required = false;
    protected bool $Autofocus = false;
    protected string|array $Value;
    protected string $Tooltip;
    protected string $DefaultValue;
    //private array $DataTags;

    abstract function generate();

    function __construct()
    {
        return $this;
    }
    function setDefaultValue(string $str)
    {
        $this->DefaultValue = $str;
        return $this;
    }
    function setTooltip(string $str)
    {
        $this->Tooltip = $str;
        return $this;
    }
    function setHelpText(string $str)
    {
        $this->HelpText = $str;
        return $this;
    }
    function setTitle(string $str)
    {
        $this->Title = $str;
        return $this;
    }
    function setName(string $str)
    {
        $this->Name = $str;
        return $this;
    }
    abstract function setValue(string|array $str);

    function setClassName(string $str)
    {
        $this->ClassName = $str;
        return $this;
    }
    function setIDname(string $str)
    {
        $this->IdName = $str;
        return $this;
    }
    function setType(string $str)
    {
        $this->Type = $str;
        return $this;
    }
    function setPlaceholder(string $str)
    {
        $this->Placeholder = $str;
        return $this;
    }
    function setRequired(bool $bool)
    {
        $this->Required = $bool;
        return $this;
    }
    function setAutofocus(bool $bool)
    {
        $this->Autofocus = $bool;
        return $this;
    }
}
class SObject extends Input
{
    protected string $Type = "text";
    private string $Pattern;
    function generate()
    {
        if (!isset($this->IdName)) {
            $this->IdName = uniqid();
        }
        $ret = "<div class=\"mb-3 pt-3 rounded shadow px-5 py-3 bg-white\">";
        if (isset($this->Title)) {
            $ret .= "<label for=\"" . $this->IdName . "\" class=\"form-label fw-bold mb-3\">" . $this->Title . "</label>";
        }
        foreach ($this->Value as $key => $value) {
            $ret .= "<div class=\"input-group mb-1\">";
            $ret .= "<input ";
            $ret .= !empty($this->ClassName) ? ('class="form-control ' . $this->ClassName . '" ') : "class=\"form-control\"";
            $ret .= !empty($this->Name) ? ('name="' . $this->Name . '.key" ') : "";
            $ret .= !empty($this->IdName) ? ('id="' . $this->IdName . '" ') : "";
            $ret .= !empty($this->Pattern) ? ('pattern="' . $this->Pattern . '"') : "";
            $ret .= !empty($key) ? ('value="' . $key . '"') : "";
            $ret .= !empty($this->Type) ? ('type="' . $this->Type . '" ') : "";
            $ret .= !empty($this->Placeholder) ? ('placeholder="' . $this->Placeholder . '" ') : "";
            $ret .= $this->Required ? "required " : "";
            $ret .= $this->Autofocus ? "autofocus " : "";
            $ret .= ">";
            $ret .= "  <span class=\"input-group-text\">:</span>";
            $ret .= "<input ";
            $ret .= !empty($this->ClassName) ? ('class="form-control ' . $this->ClassName . '" ') : "class=\"form-control\"";
            $ret .= !empty($this->Name) ? ('name="' . $this->Name . '.value" ') : "";
            $ret .= !empty($this->IdName) ? ('id="' . $this->IdName . '" ') : "";
            $ret .= !empty($this->Pattern) ? ('pattern="' . $this->Pattern . '"') : "";
            $ret .= !empty($value) ? ('value="' . $value . '"') : "";
            $ret .= !empty($this->Type) ? ('type="' . $this->Type . '" ') : "";
            $ret .= !empty($this->Placeholder) ? ('placeholder="' . $this->Placeholder . '" ') : "";
            $ret .= $this->Required ? "required " : "";
            $ret .= $this->Autofocus ? "autofocus " : "";
            $ret .= ">";
            if (isset($this->Tooltip)) {
                $ret .= "<button class=\"btn btn-outline-primary\" type=\"button\" data-ba-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"" . $this->Tooltip . "\"><i class=\"fa-solid fa-circle-info\"></i></button>";
            }
            $ret .= "<button class=\"btn btn-outline-warning reset\" type=\"button\" data-ba-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"Reset to default\"><i class=\"fa-solid fa-rotate\"></i></button>";
            $ret .= "<button class=\"btn btn-outline-danger delete\" type=\"button\" data-ba-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"Remove line\"><i class=\"fa-solid fa-trash\"></i></button>";

            $ret .= "</div>";
        }
        $ret .= "<div class=\"text-center mt-2 me-5\"><button class=\"btn btn-outline-primary me-5 text-center add-new\" type=\"button\"><i class=\"fa-solid fa-plus\"></i></button></div>";
        if (isset($this->HelpText)) {
            $ret .= "<div class=\"form-text\">" . $this->HelpText . "</div>";
        }
        $ret .= "</div>";
        return $ret;
    }
    function setPattern($str)
    {
        $this->Pattern = $str;
        return $this;
    }
    function setValue($str)
    {
        if (is_array($str)) {
            $this->Value = $str;
            return $this;
        } else {
            die("<b>ERROR:</b> Incompatible parameter in Text class");
        }
    }
}
class Text extends Input
{
    protected string $Type = "text";
    private string $Pattern;
    function generate()
    {
        if (!isset($this->IdName)) {
            $this->IdName = uniqid();
        }
        $ret = "<div class=\"mb-3 pt-3 rounded shadow px-5 py-3 bg-white\">";
        if (isset($this->Title)) {
            $ret .= "<label for=\"" . $this->IdName . "\" class=\"form-label fw-bold mb-3\">" . $this->Title . "</label>";
        }

        $ret .= "<div class=\"input-group\">";

        $ret .= "<input ";
        $ret .= !empty($this->ClassName) ? ('class="form-control ' . $this->ClassName . '" ') : "class=\"form-control\"";
        $ret .= !empty($this->Name) ? ('name="' . $this->Name . '" ') : "";
        $ret .= !empty($this->IdName) ? ('id="' . $this->IdName . '" ') : "";
        $ret .= !empty($this->Pattern) ? ('pattern="' . $this->Pattern . '"') : "";
        $ret .= !empty($this->Value) ? ('value="' . $this->Value . '"') : "";
        $ret .= !empty($this->Type) ? ('type="' . $this->Type . '" ') : "";
        $ret .= !empty($this->Placeholder) ? ('placeholder="' . $this->Placeholder . '" ') : "";
        $ret .= $this->Required ? "required " : "";
        $ret .= $this->Autofocus ? "autofocus " : "";
        $ret .= ">";
        if (isset($this->Tooltip)) {
            $ret .= "<button class=\"btn btn-outline-primary\" type=\"button\" data-ba-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"" . $this->Tooltip . "\"><i class=\"fa-solid fa-circle-info\"></i></button>";
        }
        $ret .= "<button class=\"btn btn-outline-warning reset\" type=\"button\" data-ba-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"Reset to default\"><i class=\"fa-solid fa-rotate\"></i></button>";
        $ret .= "</div>";
        if (isset($this->HelpText)) {
            $ret .= "<div class=\"form-text\">" . $this->HelpText . "</div>";
        }
        $ret .= "</div>";
        return $ret;
    }
    function setPattern($str)
    {
        $this->Pattern = $str;
        return $this;
    }
    function setValue($str)
    {
        if (!is_array($str)) {
            $this->Value = $str;
            return $this;
        } else {
            die("<b>ERROR:</b> Incompatible parameter in Text class");
        }
    }
}
class Radio extends Input
{
    protected string $Type = "radio";

    function generate()
    {
        $ret = "<div class=\"mb-3 rounded shadow px-5 py-3 bg-white\">";
        if (isset($this->Title)) {
            $ret .= "<div class=\"form-label fw-bold mb-3\">" . $this->Title . "</div>";
        }
        $ret .= "<div class=\"d-flex align-items-center justify-content-between\"><div>";
        foreach ($this->Value as $key => $value) {
            if (!isset($this->IdName)) {
                $this->IdName = uniqid();
            }
            $ret .= "<div class=\"form-check\">";


            $ret .= "<input ";
            $ret .= !empty($this->ClassName) ? ('class="form-check-input ' . $this->ClassName . '" ') : "class=\"form-check-input\"";
            $ret .= !empty($this->Name) ? ('name="' . $this->Name . '" ') : "";
            $ret .= !empty($this->IdName) ? ('id="' . $this->IdName . $key . '" ') : "";
            $ret .= !empty($value) ? ('value="' . $value . '"') : "";
            $ret .= !empty($this->Type) ? ('type="' . $this->Type . '" ') : "";
            $ret .= !empty($this->Placeholder) ? ('placeholder="' . $this->Placeholder . '" ') : "";
            $ret .= $this->Required ? "required " : "";
            $ret .= $this->Autofocus ? "autofocus " : "";
            if ($this->DefaultValue == $key) {
                $ret .= "checked ";
            }
            $ret .= ">";
            $ret .= "<label for=\"" . $this->IdName . $key . "\" class=\"form-check-label\">" . $value . "</label>";
            $ret .= "</div>";
        }
        $ret .= "</div>";
        $ret .= "<div class=\"btn-group ms-5\">";
        if (isset($this->Tooltip)) {
            $ret .= "<button class=\"btn btn-outline-primary\" type=\"button\" data-ba-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"" . $this->Tooltip . "\"><i class=\"fa-solid fa-circle-info\"></i></button>";
        }
        $ret .= "<button class=\"btn btn-outline-warning reset\" type=\"button\" data-ba-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"Reset to default\"><i class=\"fa-solid fa-rotate\"></i></button>";
        $ret .= "</div></div>";
        if (isset($this->HelpText)) {
            $ret .= "<div class=\"form-text\">" . $this->HelpText . "</div>";
        }

        $ret .= "</div>";
        return $ret;
    }
    function setValue($arr)
    {
        if (is_array($arr)) {
            foreach ($arr as $key => $value) {
                $this->Value[$key] = $value;
            }
            return $this;
        } else {
            die("<b>ERROR:</b> Incompatible parameter in Radio class");
        }
    }
}
class Select extends Input
{
    protected string $Type = "select";

    function generate()
    {
        if (!isset($this->IdName)) {
            $this->IdName = uniqid();
        }
        $ret = "<div class=\"mb-3\">";
        if (isset($this->Title)) {
            $ret .= "<label for=\"" . $this->IdName . "\" class=\"form-label\">" . $this->Title . "</label>";
        }
        $ret .= "<select ";
        $ret .= !empty($this->ClassName) ? ('class="form-select ' . $this->ClassName . '" ') : "class=\"form-select\"";
        $ret .= !empty($this->Name) ? ('name="' . $this->Name . '" ') : "";
        $ret .= !empty($this->IdName) ? ('id="' . $this->IdName . '" ') : "";
        $ret .= !empty($this->Placeholder) ? ('placeholder="' . $this->Placeholder . '" ') : "";
        $ret .= $this->Required ? "required " : "";
        $ret .= $this->Autofocus ? "autofocus " : "";
        $ret .= ">";
        $ret .= "<option value=\"none\" selected disabled hidden>Select an option</option>";

        foreach ($this->Value as $key => $value) {
            $ret .= "<option value=\"" . $key . "\">" . $value . "</option>";
        }
        $ret .= "</select>";
        if (isset($this->HelpText)) {
            $ret .= "<div class=\"form-text\">" . $this->HelpText . "</div>";
        }
        $ret .= "</div>";
        return $ret;
    }
    function setValue($arr)
    {
        if (is_array($arr)) {
            foreach ($arr as $key => $value) {
                $this->Value[$key] = $value;
            }
            return $this;
        } else {
            die("<b>ERROR:</b> Incompatible parameter in Select class");
        }
    }
}
