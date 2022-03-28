<?php require_once("header.php");
if ($get = filter_input(INPUT_GET, "filename")) {
?>
    <!-- MAIN SECTION START -->
    <main>
        <div class="container my-3">
            <div class="row mb-3">
                <div class="col-3">
                    <a href="/" style="width:fit-content;" class="btn btn-warning px-3 fw-bold text-uppercase"><i class="fa-solid fa-backward"></i><span class="border-start border-dark ps-2 ms-2">Back</span></a>
                </div>
                <!-- div class="col-3 offset-6" style="text-align:right;">
                    <a class="btn btn-primary download px-3 fw-bold text-uppercase" data-filename="<?= $filename ?>"><i class="fa-solid fa-file-arrow-down"></i><span class="border-start ps-2 ms-2">Download - <?= strtoupper(substr($filename, 0, -5)); ?></span></a>
                </div-->
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="table-responsive">
                        <table class="table table-responsive table-striped table-hover align-middle" id="dataTables-edit">
                            <thead id="edit-form-thead">
                            </thead>
                            <tbody id="edit-form-tbody">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!-- MAIN SECTION END -->
    <script>
        $(document).ready(function() {
            UserInstance = UserInstance.getEditForm(UserInstance);
        });
    </script>
<?php
}
require_once("footer.php"); ?>