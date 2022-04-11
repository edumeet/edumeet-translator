<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

const EDUMEET_TRANSLATIONS = "app/src/intl/translations/";
const EDUMEET_REPOSITORY = "https://github.com/edumeet/edumeet.git";

$fullUrl = explode("?", $_SERVER['REQUEST_URI']);
$url = explode("/", $fullUrl[0]);

function abort($error)
{
    echo $error;
}
function execPrint($command)
{
    $result = array();
    exec($command, $result);
    $ret = [];
    foreach ($result as $line) {
        $ret[] = $line;
    }
    return json_encode($ret);
}
function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if (!$length) {
        return true;
    }
    return substr($haystack, -$length) === $needle;
}
function getData($id)
{
    $files = array_diff(scandir("/tmp/$id/" . EDUMEET_TRANSLATIONS), ['.', '..']);
    $translations = [];
    foreach ($files as $key => $filename) {
        if (endsWith($filename, ".json")) {
            $translations[$filename] = json_decode(file_get_contents("/tmp/$id/" . EDUMEET_TRANSLATIONS . $filename), true);
        }
    }
    return $translations;
}
function cloneRepo($userID, $branch = "master")
{
    if (!preg_match("[^A-Za-z0-9]", $userID)) {
        return execPrint("cd /tmp;git clone --depth 1 --branch=master --single-branch " . EDUMEET_REPOSITORY . " " . $userID . ";cd $userID;git sparse-checkout set app/src/intl/");
    }
}
function rmTmp($userID)
{
    if (!preg_match("[^A-Za-z0-9]", $userID)) {
        return execPrint("rm -rf /tmp/$userID");
    }
}
/* Controller START */
if (isset($_COOKIE["userID"])) {
    $userID = $_COOKIE["userID"];
} else {
    $userID = uniqid();
}
switch ($url[1]) {
    case '':
        require_once("index.php");
        break;
    case 'request':
        switch ($url[2]) {
            case 'get':
                switch ($url[3]) {
                    case 'create':
                        header('Content-Type: application/json; charset=utf-8');
                        cloneRepo($userID);
                        echo json_encode(["uniqid" => $userID, "branch" => "master", "data" => getData($userID), "locales" => file_get_contents("/tmp/$userID/app/src/intl/locales.ts")]);
                        rmTmp($userID);
                        break;
                    case 'branch':
                        header('Content-Type: application/json; charset=utf-8');
                        echo execPrint("cd /tmp/edumeet; git pull; git branch -a | grep remotes | grep -v HEAD");
                        break;
                    default:
                        abort(404);
                        break;
                }
                break;
            case 'set':
                switch ($url[3]) {
                    case 'branch':
                        if (!empty($branch = filter_input(INPUT_POST, "branch"))) {
                            header('Content-Type: application/json; charset=utf-8');
                            cloneRepo($userID, $branch);
                            echo json_encode(["uniqid" => $userID, "branch" => $branch, "data" => getData($userID), "locales" => file_get_contents("/tmp/$userID/app/src/intl/locales.ts")]);
                            rmTmp($userID);
                        } else {
                            abort(404);
                        }
                        break;
                    default:
                        abort(404);
                        break;
                }
                break;
            default:
                abort(404);
                break;
        }
        break;
    case 'edit':
        if ($filename = filter_input(INPUT_GET, "filename")) {
            require_once("edit.php");
        }
        break;
    case 'config':
        require_once("config-generator/config-gen.php");
        break;
    default:
        abort(404);
        break;
}
    /* Controller END */
