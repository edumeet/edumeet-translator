<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="dist/css/all.min.css">
    <link rel="stylesheet" href="dist/css/dataTables.min.css">
    <link rel="stylesheet" href="dist/css/main.css">

    <script src="/dist/js/jquery-3.6.0.min.js"></script>
    <script src="/dist/js/jquery-ui.min.js"></script>
<!--     <script src="/dist/js/jquery.indexeddb.js"></script> -->
    <script src="/dist/js/jquery.cookie.js"></script>
    <script src="/dist/js/all.min.js"></script>
    <script src="/dist/js/jszip.min.js"></script>
    <script src="/dist/js/FileSaver.min.js"></script>
    <script src="/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/dist/js/dataTables.min.js"></script>
    <script src="/dist/js/main.js"></script>
</head>

<body id="<?= empty(implode("", $url)) ? "index" : implode("", $url); ?>">
    <header>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="/dist/img/logo.edumeet.svg" alt="" width="140" height="30" class="d-inline-block align-text-top">
                    <span class="ms-3 fs-6 text-uppercase fw-bold">Translation editor</span>

                </a>
                <span>
                    <span class="text-white">UserID: <span class="fw-bold" id="userID"></span> | </span>
                    <span class="text-white">Branch: <span class="fw-bold" id="branch"></span></span>
                </span>
            </div>
        </nav>
    </header>
    <div class="loader">
        <div class="content text-center">
            <div class=""><img alt="Logo" src="dist/img/logo.edumeet.svg"></div>
            <div class="spinner my-3"><i class="fas fa-2x fa-spinner fa-pulse"></i></div>
            <div class="">Loading...</div>
        </div>

    </div>
    <!-- HEADER SECTION END -->