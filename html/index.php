<?php require_once("header.php"); ?>
<!-- Modal -->
<div class="modal fade" id="help" tabindex="-1" aria-labelledby="help" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="help">Help & FAQ</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <ul>
                    <li class="my-2"><span class="btn btn-secondary">CTRL</span><span class="btn fs-4 p-0">+</span><span class="btn btn-secondary">A</span> to select all checkbox</li>
                    <li class="my-2"><span class="btn btn-secondary">CTRL</span><span class="btn fs-4 p-0">+</span><span class="btn btn-secondary">D</span> to deselect all checkbox</li>
                    <li class="my-2"><span class="btn btn-secondary">CTRL</span><span class="btn fs-4 p-0">+</span><span class="btn btn-secondary">F</span> to focus search field</li>
                    <li class="my-2"><span class="btn btn-secondary">CTRL</span><span class="btn fs-4 p-0">+</span><span class="btn btn-secondary">S</span> to download selected languages</li>
                    <li class="my-2"><span class="btn btn-secondary">TAB</span> to focus next checkbox or text field</li>
                    <li class="my-2"><span class="btn btn-secondary">SPACE</span> to check focused checkbox</li>
                    <li class="my-2"><span class="btn btn-secondary">CTRL</span><span class="btn fs-4 p-0">+</span><span class="btn btn-secondary">E</span> to edit selected languages</li>
                    <li class="my-2"><span class="btn btn-secondary">ENTER</span> to focus bottom input field</li>
                    <li class="my-2"><span class="btn btn-secondary">↑</span> to move cursor to top input field</li>
                    <li class="my-2"><span class="btn btn-secondary">↓</span> to move cursor to bottom input field</li>
                    <li class="my-2"><span class="btn btn-secondary">CTRL</span><span class="btn fs-4 p-0">+</span><span class="btn btn-secondary">←</span> to go previous page</li>
                    <li class="my-2"><span class="btn btn-secondary">CTRL</span><span class="btn fs-4 p-0">+</span><span class="btn btn-secondary">→</span> to go next page</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="changebranch" tabindex="-1" aria-labelledby="changebranch" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="changebranch">Change branch</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <select class="form-select" id="set-branch"></select>
            </div>
        </div>
    </div>
</div>
<!-- MAIN SECTION START -->
<main>
    <div class="container my-3">
        <div class="row mb-3">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-ba-toggle="tooltip" data-bs-placement="bottom" title="Help & FAQ" data-bs-target="#help"><i class="fa-solid fa-2x fa-circle-question"></i></button>
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-ba-toggle="tooltip" data-bs-placement="bottom" title="Change branch" data-bs-target="#changebranch"><i class="fa-brands fa-2x fa-git"></i></button>
                <button class="btn btn-success compare text-uppercase" data-filename="<?= $filename ?>" data-ba-toggle="tooltip" data-bs-placement="bottom" title="Compare & edit selected languages"><i class="fa-solid fa-2x fa-code-compare"></i></button>
                <button class="btn btn-info download-selected fw-bold text-uppercase" data-filename="<?= $filename ?>" data-ba-toggle="tooltip" data-bs-placement="bottom" title="Download selected language files"><i class="fa-solid fa-2x fa-file-arrow-down"></i></button>
                <button button="button" class="btn btn-primary  download-all fw-bold text-uppercase" data-filename="<?= $filename ?>" data-ba-toggle="tooltip" data-bs-placement="bottom" title="Download all language files"><i class="fa-solid fa-2x fa-cloud-arrow-down"></i></button>
            </div>
        </div>

        <div class="row">
            <form class="col-12" id="download-selected">
                <div class="table-responsive">

                    <table class="table table-responsive table-striped table-hover align-middle" id="dataTables">
                        <thead>
                            <tr class="text-center">
                                <th class="px-0 checkbox disable-sort"><input type="checkbox" class="form-check-input check-all" name="lang[]" value="<?= null ?>" /></th>
                                <th>Translation filename</th>
                                <th>Language</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="translation-files-list"></tbody>
                    </table>
                </div>
            </form>
        </div>
    </div>
</main>
<!-- MAIN SECTION END -->
<script>
    $(document).ready(function() {
        UserInstance = UserInstance.getListOfLanguages(UserInstance);
    });
</script>
<?php require_once("footer.php"); ?>