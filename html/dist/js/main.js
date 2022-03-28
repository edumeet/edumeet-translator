var App = {
  userID: null,
  tables: null,
  languageNames: new Intl.DisplayNames(['en'], {
    type: 'language'
  }),

  create: function () {
    var u = Object.create(this);
    if (localStorage.getItem("userID") == undefined || localStorage.getItem("userID") == null) {
      localStorage.clear();
      $.when(
        $.ajax({
          method: "POST",
          url: "/request/get/create",
          dataType: 'json',
          async: false,
          success: function (data) {
            localStorage.setItem("userID", data.uniqid);
            localStorage.setItem("currentBranch", data.branch);
            localStorage.setItem("locales", data.locales);

            localStorage.setItem(data.branch, JSON.stringify(data.data));
          },
          errors: function (data) {
            //Error Handling
          }
        })
      );
    }
    $.when(
      $.ajax({
        method: "POST",
        url: "/request/get/branch",
        dataType: 'json',
        async: false,
        success: function (data) {
          $.each(data, function (k, v) {
            if (v.replace("  remotes/origin/", "") == localStorage.getItem("currentBranch")) {
              $("#set-branch").append("<option selected=\"selected\">" + v.replace("  remotes/origin/", "") + "</option>");
            } else {
              $("#set-branch").append("<option>" + v.replace("  remotes/origin/", "") + "</option>");
            }
          });
        },
        errors: function (data) {
          //Error Handling
        }
      })
    );
    $.cookie("userID", localStorage.getItem("userID"));

    u.userID = localStorage.getItem("userID");
    u.currentBranch = localStorage.getItem("currentBranch");
    u.data = localStorage.getItem(null);
    return u;
  },
  changeBranch(self, input) {
    $.ajax({
      method: "POST",
      url: "/request/set/branch",
      data: { branch: $(input).find(":selected").text() },
      dataType: 'json',
      success: function (data) {
        if (data.data.length != 0) {
          localStorage.setItem("currentBranch", data.branch);
          localStorage.setItem(data.branch, JSON.stringify(data.data));
          self = self.getListOfLanguages(self);
          $("#branch").text(localStorage.getItem("currentBranch"));
          $(".loader").hide();
          msg("alert-info", "<strong>Info:</strong> You changed branch to <strong>" + data.branch + "</strong>");
        } else {
          $(".loader").hide();
          msg("alert-danger", "<strong>Error:</strong> This branch is not compatible with this translator!");
        }
      },
      errors: function (data) {
        //Error Handling
      }
    });
    return self;
  },
  getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
    return false;
  },
  getListOfLanguages: function (self) {
    $('#dataTables').dataTable().fnDestroy();
    $("#translation-files-list").text("");
    $.each(JSON.parse(localStorage.getItem(localStorage.getItem("currentBranch"))), function (lang, content) {
      var str = "<tr branch=\"" + localStorage.getItem("currentBranch") + "\" class=\"text-center align-middle checkbox\">";
      str += "<td class=\"input\" style=\"width:25px;\"><input type=\"checkbox\" class=\"form-check-input\" name=\"lang[]\" value=" + lang + " /></td>";
      str += "<td>" + lang + "</td>";
      str += "<td>" + self.languageNames.of(lang.replace(".json", "")) + "</td>";
      str += "<td class=\"d-flex\"><a href=\"edit?filename=" + lang + "\" data-ba-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"Edit " + lang + "\" class=\"btn btn-warning edit me-3\"><i class=\"fa-solid fa-pen-to-square\"></i></a>";
      str += "<a class=\"btn btn-primary download\" data-ba-toggle=\"tooltip\" data-bs-placement=\"bottom\" title=\"Download " + lang + " as " + lang + "\" data-filename=\"" + lang + "\"><i class=\"fa-solid fa-file-arrow-down\"></i></a></td>";
      str += "</tr>";
      $("#translation-files-list").append(str);
    });
    if ($("#dataTables").length > 0) {
      self.tables =
        $("#dataTables").DataTable({
          pageLength: 10,
          lengthMenu: [
            [5, 10, 20, -1],
            [5, 10, 20, 'All']
          ],
          "columnDefs": [{
            "targets": 0,
            "orderable": false
          },
          {
            "targets": 3,
            "orderable": false
          }
          ]
        });
    }
    return self;
  },
  getListOfKeywords(self) {
    var files = JSON.parse(localStorage.getItem(self.currentBranch));
    var listOfKeywords = [];
    $.each(files, function (filename, content) {
      $.each(content, function (keyword, val) {
        listOfKeywords.push(keyword);
      });
    });
    return listOfKeywords.filter(function (itm, i, a) {
      return i == a.indexOf(itm);
    });
  },
  getEditForm(self) {
    langs = $.grep(self.getUrlParameter("filename").split(";"), function (n, i) {
      return (n !== "" && n != null);
    });
    var files = JSON.parse(localStorage.getItem(self.currentBranch));
    var thead = "<tr class=\"text-center\">";
    thead += "<th>Keyword</th>";

    $.each(files, function (filename, content) {
      if (langs.some(v => filename.includes(v))) {
        thead += "<th>Translation - " + filename.replace(".json", "") + "</th>"
      }
    });
    thead += "</tr>";
    $("#edit-form-thead").append(thead);

    $.each(self.getListOfKeywords(self), function (id, keyword) {
      var str = "<tr class=\"\">";
      str += "<td>" + keyword + "</td>";
      $.each(files, function (filename, content) {
        if (langs.some(v => filename.includes(v))) {
          str += "<td ";
          if (content[keyword]) {
            str += "data-search=\"" + content[keyword] + "\" data-order=\"" + content[keyword] + "\">";
          } else {
            str += "data-search=\"\" data-order=\"\">";
          }
          str += "<input data-lang=\"" + filename + "\" data-keyword=\"" + keyword + "\" "
          if (content[keyword]) {
            str += "value=\"" + content[keyword] + "\" ";
          } else {
          }
          str += "placeholder=\"Not found any translation!\" ";
          str += "type=\"text\" class=\"form-control\" >";
          str += "<div class=\"valid-feedback\">Saved!</div>";
          str += "<div class=\"invalid-feedback\">Error! Can't save!</div>";
          str += "<div class=\"not-saved text-warning\" style=\"display:none;\">Not saved! Press <b>enter</b> to save and move new row or <b>TAB</b> to save and move next input in row!</div>";
          str += "</td>";
        }
      });

      str += "</tr>";
      $("#edit-form-tbody").append(str);
    });
    $.fn.dataTableExt.ofnSearch['html-input'] = function (value) {
      return $(value).val();
    };
    if ($("#dataTables-edit").length > 0) {
      self.tables = $("#dataTables-edit").DataTable({
        pageLength: 10,
        lengthMenu: [
          [5, 10, 20, -1],
          [5, 10, 20, 'All']
        ]
      });
    }
    return self
  },
  save(self, input) {
    var tags = $(input).data();
    $(input).removeClass();
    $(input).addClass("form-control");
    $(input).siblings().hide();
    var data = JSON.parse(localStorage.getItem(self.currentBranch));
    if (data == null) {
      $(input).addClass("is-invalid");
      $(input).siblings(".invalid-feedback").show();
      return -1;
    }
    data[tags.lang][tags.keyword] = $(input).val();
    localStorage.setItem(self.currentBranch, JSON.stringify(data));

    if (localStorage.getItem(self.currentBranch) == JSON.stringify(data)) {
      $(input).addClass("is-valid");
      $(input).siblings(".valid-feedback").show();
    } else {
      $(input).addClass("is-invalid");
      $(input).siblings(".invalid-feedback").show();
    }

  },

  downloadAll(self) {
    var zip = new JSZip();
    var app = zip.folder("app").folder("src").folder("intl").folder("translations");
    $.each(JSON.parse(localStorage.getItem(self.currentBranch)), function (lang, content) {
      app.file(lang, JSON.stringify(content, undefined, 2));
    });
    zip.generateAsync({
      type: "blob"
    }).then(function (blob) {
      var filename = "all-" + localStorage.getItem("userID") + "-" + Date.now() + "-" + localStorage.getItem("currentBranch") + ".zip";
      saveAs(blob, filename);
      msg("alert-info", "<strong>Info:</strong> You downloaded selected languages as <strong>" + filename + "</strong>");
    }, function (err) {
      msg("alert-danger", err);
    });
  },

  downloadSelected(self) {
    var zip = new JSZip();
    var app = zip.folder("app").folder("src").folder("intl").folder("translations");
    var selected = self.tables.$("input:checked").serializeArray();
    if (selected.length === 0) {
      msg("alert-danger", "<strong>Error:</strong> Please select one or more language files!");
    } else {
      $.each(JSON.parse(localStorage.getItem(self.currentBranch)), function (lSLang, lScontent) {
        $.each(selected, function (id, content) {
          if (content.value == lSLang) {
            app.file(lSLang, JSON.stringify(lScontent, undefined, 2));
          }
        });
      });
      zip.generateAsync({
        type: "blob"
      }).then(function (blob) {
        var filename = "selected-" + localStorage.getItem("userID") + "-" + Date.now() + "-" + localStorage.getItem("currentBranch") + ".zip";
        saveAs(blob, filename);
        msg("alert-info", "<strong>Info:</strong> You downloaded selected languages as <strong>" + filename + "</strong>");
      }, function (err) {
        msg("alert-danger", err);
      });
    }
  },

  downloadFile(self, clicked) {
    var content = JSON.parse(localStorage.getItem(self.currentBranch));
    var filename = $(clicked).data("filename");
    saveAs(new Blob([JSON.stringify(content[filename], undefined, 2)], {
      type: 'application/json',
      name: filename
    }), filename);
    msg("alert-info", "<strong>Info:</strong> You downloaded <strong>" + filename + "</strong> language file!");
  }
};

function msg(type, msg) {
  var id = Date.now();
  var str = '<div id=\"' + id + '\" class="alert ' + type + ' alert-dismissible fade show" role="alert">';
  str += msg;
  str += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  $(".alert-notifications").append(str);
  setInterval(function () { $("#" + id).hide("slide", { direction: "right" }, 1000); }, 30000);
}


var UserInstance;
var tables;



$(document).ready(function () {
  /* App instance */
  $.when(
    UserInstance = App.create()
  ).then(function () {
    $("#userID").text(localStorage.getItem("userID"));
    $("#branch").text(localStorage.getItem("currentBranch"));
    $(".loader").hide();
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-ba-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });
  });

  //Check rows
  $(document).on("click", ".check-all", function (e) {
    e.stopPropagation();
    UserInstance.tables.$('input[type="checkbox"]').prop("checked", $(this).prop("checked"))
  });
  $(document).on("click", "th.checkbox:not(.input)", function (e) {
    $(this).find('input[type="checkbox"]').prop("checked", !($(this).find('input[type="checkbox"]').prop("checked")));
    UserInstance.tables.$('input[type="checkbox"]').prop("checked", $(this).children("input").prop("checked"))
  });
  $(document).on("click", ".checkbox td:not(.input)", function (e) {
    e.stopPropagation();
    $(this).parent("tr").find('input[type="checkbox"]').prop("checked", !($(this).parent("tr").find('input[type="checkbox"]').prop("checked")));
  });

  $(document).on("click", ".download-all", function (e) {
    UserInstance.downloadAll(UserInstance);
  });
  $(document).on("click", ".download-selected", function (e) {
    UserInstance.downloadSelected(UserInstance);
  });
  $(document).on("click", ".download", function (e) {
    e.stopPropagation();
    UserInstance.downloadFile(UserInstance, this);
  });
  $(document).on("click", ".edit", function (e) {
    e.stopPropagation();
  });
  $(document).on("keydown", "#edit-form-tbody input", function (e) {
    var col = $(this).closest("td").index();
    var row = $(this).closest("tr").index();
    switch (e.keyCode) {
      case 38:
        $(this).closest("tr").prev("tr").find("td:eq(" + col + ")").find("input").focus();
        break;
      case 40:
        $(this).closest("tr").next("tr").find("td:eq(" + col + ")").find("input").focus();
        break;


      default:
        break;
    }
    if (e.keyCode != 13 && e.keyCode != 9 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40) {
      $(this).removeClass();
      $(this).addClass("form-control");
      $(this).siblings().hide();
      $(this).siblings(".not-saved").show();
      $(this).addClass("border border-warning border-3");
    } else {
      UserInstance.save(UserInstance, this);
      if (e.keyCode == 13) {
        e.preventDefault();
        if ($(this).closest("td").is(":last-child") && $(this).closest("tr").is(":last-child")) {
          $(this).closest("tbody").find("tr:first-child").find("td:eq(1)").find("input").focus();
        } else {
          $(this).closest("tr").next("tr").find("td:eq(1)").find("input").focus();
        }
      }
    }
  });
  $(document).on("change", "#edit-form-tbody input", function (e) {
    e.stopPropagation();
    if (e.keyCode != 13 && e.keyCode != 9) {
      UserInstance.save(UserInstance, this);
    }
  });
  $(document).on("change", "#set-branch", function (e) {
    $(".loader").show();
    $('#changebranch').modal('toggle')
    UserInstance.changeBranch(UserInstance, this);
  });
  $(document).on("click", ".compare", function () {
    var compare = UserInstance.tables.$("input:checked").serializeArray();
    var link = "";
    if (compare.length === 0) {
      msg("alert-danger", "<strong>Error:</strong> Please select one or more language files!");
    } else {
      $.each(compare, function (key, lang) {
        link += lang.value + ";";
      });
      if (compare.length > 1) {
        window.location.href = "/edit?filename=" + link;
      }
    }
  });

});

$(function () {
  $(document).keydown(function (objEvent) {
    if (objEvent.ctrlKey) {
      objEvent.preventDefault();
      switch (objEvent.keyCode) {
        case 37:  // CTRL + left arrow
          UserInstance.tables.page("previous").draw("page");
          break;
        case 39: // CTRL + right arrow
          UserInstance.tables.page("next").draw("page");
          break;
        case 65: // CTRL + A
          UserInstance.tables.$('input[type="checkbox"]').prop("checked", !UserInstance.tables.$('input[type="checkbox"]').prop("checked"));
          break;
        case 68: // CTRL + D
          UserInstance.tables.$('input[type="checkbox"]').prop("checked", false);
          break;
        case 69: // CTRL + E
          $(".compare").click();
          break;
        case 70: // CTRL + F
          $('input[type="search"]').focus();
          break;
        case 83: // CTRL + S
          $(".download-selected").click();
          break;
        case 97: // CTRL + A
          UserInstance.tables.$('input[type="checkbox"]').prop("checked", !UserInstance.tables.$('input[type="checkbox"]').prop("checked"));
          break;
        default:
          break;
      }
    } else {
      switch (objEvent.keyCode) {
        case 9:// TAB
          objEvent.preventDefault();
          if ($("body#index").length) {
            if (objEvent.currentTarget.activeElement.getAttribute("type") != "checkbox") {
              $('tbody tr:first-child input[type="checkbox"]').focus();
              $('tbody tr:first-child input[type="checkbox"]').addClass("check-active")
            } else {
              var olditem = $(".check-active");
              var newitem = $(olditem).closest("tr").next("tr").find('input[type="checkbox"]');
              if (!newitem.length) {
                UserInstance.tables.page("next").draw("page");
                newitem = $('tbody tr:first-child input[type="checkbox"]');
              }
              $(olditem).removeClass("check-active");
              $(newitem).addClass("check-active");
              $(newitem).focus();
            }
          } else if ($("body#edit").length) {
            if (objEvent.currentTarget.activeElement.getAttribute("type") != "text") {
              $('tbody tr:first-child td:eq(1) input[type="text"]').focus();
            } else {
              var olditem = objEvent.currentTarget.activeElement.closest("td");
              var newitem = $(olditem).next("td").find('input[type="text"]');
              if (newitem.length == 0) {
                newitem = $(olditem).closest("tr").next("tr").find('td:eq(1) input[type="text"]');
                if (newitem.length == 0) {
                  UserInstance.tables.page("next").draw("page");
                  newitem = $('tbody tr:first-child td:eq(1) input[type="text"]');
                }
              }
              $(olditem).removeClass("check-active");
              $(newitem).focus();
            }
          }
          break;
        default:
          break;
      }
    }
  });
});