<?php require_once("header.php");

require_once(__DIR__ . "/src/input.generator.php");
?>
<!-- Modal -->
<div class="modal fade" id="help" tabindex="-1" aria-labelledby="help" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="help">Help & FAQ</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!--ul>
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
                </ul-->
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
                <div class="text-center">
                    <div class="text-muted text-start mb-3">Change branch:</div>
                    <select class="form-select" id="set-branch"></select>
                </div>
                <div class="text-center mt-5 pt-2 border-top">
                    <div class="text-muted text-start mb-3">Drop all modification and get data from repository</div>
                    <button class="btn btn-danger" id="reset-branch">Reset data</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- MAIN SECTION START -->
<main>
    <div class="container my-3">
        <div class="row mb-3">
            <!--div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-ba-toggle="tooltip" data-bs-placement="bottom" title="Help & FAQ" data-bs-target="#help"><i class="fa-solid fa-2x fa-circle-question"></i></button>
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-ba-toggle="tooltip" data-bs-placement="bottom" title="Change branch" data-bs-target="#changebranch"><i class="fa-brands fa-2x fa-git"></i></button>
                <button class="btn btn-success compare text-uppercase" data-filename="<?= $filename ?>" data-ba-toggle="tooltip" data-bs-placement="bottom" title="Compare & edit selected languages"><i class="fa-solid fa-2x fa-code-compare"></i></button>
                <button class="btn btn-info download-selected fw-bold text-uppercase" data-filename="<?= $filename ?>" data-ba-toggle="tooltip" data-bs-placement="bottom" title="Download selected language files"><i class="fa-solid fa-2x fa-file-arrow-down"></i></button>
                <button button="button" class="btn btn-primary  download-all fw-bold text-uppercase" data-filename="<?= $filename ?>" data-ba-toggle="tooltip" data-bs-placement="bottom" title="Download all language files"><i class="fa-solid fa-2x fa-cloud-arrow-down"></i></button>
            </div -->
        </div>

        <div class="row">
            <form class="col-12" id="download-selected" method="post">
                <!--div class="table-responsive">

                    <table class="table table-responsive table-striped table-hover align-middle" id="dataTables">
                        <thead>
                            <tr class="text-center">
                                <th class="px-0 checkbox disable-sort"><input type="checkbox" class="form-check-input check-all" name="lang[]" value="<?= null ?>" /></th>
                                <th>Translation filename</th>
                                <th>Language</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody ></tbody>
                    </table>
                </div-->
                <?php require_once(__DIR__ . "/src/loader.php"); ?>
                <button type="submit" id="selector" name="submit">Generate</button>
            </form>
        </div>
    </div>
</main>
<!-- MAIN SECTION END -->
<script>
    function MynodeCallBack(node) {
        if ($(node).attr("name") != null) {
            if ($(node).attr("name").indexOf(".key") >= 0) {
                if ($(node).parent().parent().hasClass("sub-object")) {
                    var pval = $(node).parent().parent().parent().find("input").first().val();
                    return {
                        name: $(node).attr("name").replace("key", pval + "." + $(node).val()),
                        value: $(node).siblings("input").val()
                    }
                } else if ($(node).parent().find(".sub-object").children().length == 0) {
                    return {
                        name: $(node).attr("name").replace("key", $(node).val()),
                        value: $(node).siblings("input").val()
                    };
                } else {
                    return {
                        name: "null",
                        value: "null"
                    };
                }
            } else if ($(node).attr("name").indexOf(".value") >= 0) {
                if ($(node).parent().parent().hasClass("sub-object")) {
                    var pval = $(node).parent().parent().parent().find("input").first().val();
                    return {
                        name: $(node).siblings("input").attr("name").replace("key", pval + "." + $(node).siblings("input").val()),
                        value: $(node).siblings("input").val()
                    }
                } else if ($(node).parent().find(".sub-object").children().length == 0) {
                    return {
                        name: $(node).siblings("input").attr("name").replace("key", $(node).siblings("input").val()),
                        value: $(node).val()
                    };
                } else {
                    return {
                        name: "null",
                        value: "null"
                    };
                }
            }
        }
        return false;
    }
    $(document).ready(function() {
        $(document).on("click", ".textObject", function() {
            var sub = $(this).parent().parent().parent().find(".sub-object").first();
            console.log(sub);
            sub.attr("style","");
            sub.text("");
            console.log($(this).parent().parent().parent().children("input").last().removeAttr("disabled"));

        });
        $(document).on("click", ".setSObject", function() {
            var sub = $(this).parent().parent().parent().find(".sub-object").first();

            if (sub.children().length == 0) {
                sub.attr("style", "width:100%;margin-left:20px;");
                var added = $(this).parent().parent().parent().clone().appendTo(sub);
                console.log(added);
                $(this).parent().parent().parent().children("input").last().attr("disabled", "disabled").val("");
                $(added[0]).find("input").val("");
                $(added[0]).find(".dropdown-toggle").hide();
            }

        });
        $("form").submit(function(e) {
            var selector = $(this),
                formDataFirst = $(selector).toObject({
                    mode: 'first',
                    nodeCallback: MynodeCallBack
                });
            console.log(formDataFirst);
            return false;
        });
    });
</script>
<?php require_once("footer.php"); ?>