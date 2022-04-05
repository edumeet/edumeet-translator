var App = {
  userID: null,
  tables: null,
  locales: {
    "af_NA": "Afrikaans (Namibia)",
    "af_ZA": "Afrikaans (South Africa)",
    "af": "Afrikaans",
    "ak_GH": "Akan (Ghana)",
    "ak": "Akan",
    "sq_AL": "Albanian (Albania)",
    "sq": "Albanian",
    "am_ET": "Amharic (Ethiopia)",
    "am": "Amharic",
    "ar_DZ": "Arabic (Algeria)",
    "ar_BH": "Arabic (Bahrain)",
    "ar_EG": "Arabic (Egypt)",
    "ar_IQ": "Arabic (Iraq)",
    "ar_JO": "Arabic (Jordan)",
    "ar_KW": "Arabic (Kuwait)",
    "ar_LB": "Arabic (Lebanon)",
    "ar_LY": "Arabic (Libya)",
    "ar_MA": "Arabic (Morocco)",
    "ar_OM": "Arabic (Oman)",
    "ar_QA": "Arabic (Qatar)",
    "ar_SA": "Arabic (Saudi Arabia)",
    "ar_SD": "Arabic (Sudan)",
    "ar_SY": "Arabic (Syria)",
    "ar_TN": "Arabic (Tunisia)",
    "ar_AE": "Arabic (United Arab Emirates)",
    "ar_YE": "Arabic (Yemen)",
    "ar": "Arabic",
    "hy_AM": "Armenian (Armenia)",
    "hy": "Armenian",
    "as_IN": "Assamese (India)",
    "as": "Assamese",
    "asa_TZ": "Asu (Tanzania)",
    "asa": "Asu",
    "az_Cyrl": "Azerbaijani (Cyrillic)",
    "az_Cyrl_AZ": "Azerbaijani (Cyrillic, Azerbaijan)",
    "az_Latn": "Azerbaijani (Latin)",
    "az_Latn_AZ": "Azerbaijani (Latin, Azerbaijan)",
    "az": "Azerbaijani",
    "bm_ML": "Bambara (Mali)",
    "bm": "Bambara",
    "eu_ES": "Basque (Spain)",
    "eu": "Basque",
    "be_BY": "Belarusian (Belarus)",
    "be": "Belarusian",
    "bem_ZM": "Bemba (Zambia)",
    "bem": "Bemba",
    "bez_TZ": "Bena (Tanzania)",
    "bez": "Bena",
    "bn_BD": "Bengali (Bangladesh)",
    "bn_IN": "Bengali (India)",
    "bn": "Bengali",
    "bs_BA": "Bosnian (Bosnia and Herzegovina)",
    "bs": "Bosnian",
    "bg_BG": "Bulgarian (Bulgaria)",
    "bg": "Bulgarian",
    "my_MM": "Burmese (Myanmar [Burma])",
    "my": "Burmese",
    "yue_Hant_HK": "Cantonese (Traditional, Hong Kong SAR China)",
    "ca_ES": "Catalan (Spain)",
    "ca": "Catalan",
    "tzm_Latn": "Central Morocco Tamazight (Latin)",
    "tzm_Latn_MA": "Central Morocco Tamazight (Latin, Morocco)",
    "tzm": "Central Morocco Tamazight",
    "chr_US": "Cherokee (United States)",
    "chr": "Cherokee",
    "cgg_UG": "Chiga (Uganda)",
    "cgg": "Chiga",
    "zh_Hans": "Chinese (Simplified Han)",
    "zh_Hans_CN": "Chinese (Simplified Han, China)",
    "zh_Hans_HK": "Chinese (Simplified Han, Hong Kong SAR China)",
    "zh_Hans_MO": "Chinese (Simplified Han, Macau SAR China)",
    "zh_Hans_SG": "Chinese (Simplified Han, Singapore)",
    "zh_Hant": "Chinese (Traditional Han)",
    "zh_Hant_HK": "Chinese (Traditional Han, Hong Kong SAR China)",
    "zh_Hant_MO": "Chinese (Traditional Han, Macau SAR China)",
    "zh_Hant_TW": "Chinese (Traditional Han, Taiwan)",
    "tw": "Taiwan",
    "zh": "Chinese",
    "cn": "Chinese",
    "kw_GB": "Cornish (United Kingdom)",
    "kw": "Cornish",
    "hr_HR": "Croatian (Croatia)",
    "hr": "Croatian",
    "cs_CZ": "Czech (Czech Republic)",
    "cs": "Czech",
    "da_DK": "Danish (Denmark)",
    "da": "Danish",
    "dk": "Danish",
    "nl_BE": "Dutch (Belgium)",
    "nl_NL": "Dutch (Netherlands)",
    "nl": "Dutch",
    "ebu_KE": "Embu (Kenya)",
    "ebu": "Embu",
    "en_AS": "English (American Samoa)",
    "en_AU": "English (Australia)",
    "en_BE": "English (Belgium)",
    "en_BZ": "English (Belize)",
    "en_BW": "English (Botswana)",
    "en_CA": "English (Canada)",
    "en_GU": "English (Guam)",
    "en_HK": "English (Hong Kong SAR China)",
    "en_IN": "English (India)",
    "en_IE": "English (Ireland)",
    "en_IL": "English (Israel)",
    "en_JM": "English (Jamaica)",
    "en_MT": "English (Malta)",
    "en_MH": "English (Marshall Islands)",
    "en_MU": "English (Mauritius)",
    "en_NA": "English (Namibia)",
    "en_NZ": "English (New Zealand)",
    "en_MP": "English (Northern Mariana Islands)",
    "en_PK": "English (Pakistan)",
    "en_PH": "English (Philippines)",
    "en_SG": "English (Singapore)",
    "en_ZA": "English (South Africa)",
    "en_TT": "English (Trinidad and Tobago)",
    "en_UM": "English (U.S. Minor Outlying Islands)",
    "en_VI": "English (U.S. Virgin Islands)",
    "en_GB": "English (United Kingdom)",
    "en_US": "English (United States)",
    "en_ZW": "English (Zimbabwe)",
    "en": "English",
    "eo": "Esperanto",
    "et_EE": "Estonian (Estonia)",
    "et": "Estonian",
    "ee_GH": "Ewe (Ghana)",
    "ee_TG": "Ewe (Togo)",
    "ee": "Ewe",
    "fo_FO": "Faroese (Faroe Islands)",
    "fo": "Faroese",
    "fil_PH": "Filipino (Philippines)",
    "fil": "Filipino",
    "fi_FI": "Finnish (Finland)",
    "fi": "Finnish",
    "fr_BE": "French (Belgium)",
    "fr_BJ": "French (Benin)",
    "fr_BF": "French (Burkina Faso)",
    "fr_BI": "French (Burundi)",
    "fr_CM": "French (Cameroon)",
    "fr_CA": "French (Canada)",
    "fr_CF": "French (Central African Republic)",
    "fr_TD": "French (Chad)",
    "fr_KM": "French (Comoros)",
    "fr_CG": "French (Congo - Brazzaville)",
    "fr_CD": "French (Congo - Kinshasa)",
    "fr_CI": "French (Côte d’Ivoire)",
    "fr_DJ": "French (Djibouti)",
    "fr_GQ": "French (Equatorial Guinea)",
    "fr_FR": "French (France)",
    "fr_GA": "French (Gabon)",
    "fr_GP": "French (Guadeloupe)",
    "fr_GN": "French (Guinea)",
    "fr_LU": "French (Luxembourg)",
    "fr_MG": "French (Madagascar)",
    "fr_ML": "French (Mali)",
    "fr_MQ": "French (Martinique)",
    "fr_MC": "French (Monaco)",
    "fr_NE": "French (Niger)",
    "fr_RW": "French (Rwanda)",
    "fr_RE": "French (Réunion)",
    "fr_BL": "French (Saint Barthélemy)",
    "fr_MF": "French (Saint Martin)",
    "fr_SN": "French (Senegal)",
    "fr_CH": "French (Switzerland)",
    "fr_TG": "French (Togo)",
    "fr": "French",
    "ff_SN": "Fulah (Senegal)",
    "ff": "Fulah",
    "gl_ES": "Galician (Spain)",
    "gl": "Galician",
    "lg_UG": "Ganda (Uganda)",
    "lg": "Ganda",
    "ka_GE": "Georgian (Georgia)",
    "ka": "Georgian",
    "de_AT": "German (Austria)",
    "de_BE": "German (Belgium)",
    "de_DE": "German (Germany)",
    "de_LI": "German (Liechtenstein)",
    "de_LU": "German (Luxembourg)",
    "de_CH": "German (Switzerland)",
    "de": "German",
    "el_CY": "Greek (Cyprus)",
    "el_GR": "Greek (Greece)",
    "el": "Greek",
    "gu_IN": "Gujarati (India)",
    "gu": "Gujarati",
    "guz_KE": "Gusii (Kenya)",
    "guz": "Gusii",
    "ha_Latn": "Hausa (Latin)",
    "ha_Latn_GH": "Hausa (Latin, Ghana)",
    "ha_Latn_NE": "Hausa (Latin, Niger)",
    "ha_Latn_NG": "Hausa (Latin, Nigeria)",
    "ha": "Hausa",
    "haw_US": "Hawaiian (United States)",
    "haw": "Hawaiian",
    "he_IL": "Hebrew (Israel)",
    "he": "Hebrew",
    "hi_IN": "Hindi (India)",
    "hi": "Hindi",
    "hu_HU": "Hungarian (Hungary)",
    "hu": "Hungarian",
    "is_IS": "Icelandic (Iceland)",
    "is": "Icelandic",
    "ig_NG": "Igbo (Nigeria)",
    "ig": "Igbo",
    "id_ID": "Indonesian (Indonesia)",
    "id": "Indonesian",
    "ga_IE": "Irish (Ireland)",
    "ga": "Irish",
    "it_IT": "Italian (Italy)",
    "it_CH": "Italian (Switzerland)",
    "it": "Italian",
    "ja_JP": "Japanese (Japan)",
    "ja": "Japanese",
    "kea_CV": "Kabuverdianu (Cape Verde)",
    "kea": "Kabuverdianu",
    "kab_DZ": "Kabyle (Algeria)",
    "kab": "Kabyle",
    "kl_GL": "Kalaallisut (Greenland)",
    "kl": "Kalaallisut",
    "kln_KE": "Kalenjin (Kenya)",
    "kln": "Kalenjin",
    "kam_KE": "Kamba (Kenya)",
    "kam": "Kamba",
    "kn_IN": "Kannada (India)",
    "kn": "Kannada",
    "kk_Cyrl": "Kazakh (Cyrillic)",
    "kk_Cyrl_KZ": "Kazakh (Cyrillic, Kazakhstan)",
    "kk": "Kazakh",
    "km_KH": "Khmer (Cambodia)",
    "km": "Khmer",
    "ki_KE": "Kikuyu (Kenya)",
    "ki": "Kikuyu",
    "rw_RW": "Kinyarwanda (Rwanda)",
    "rw": "Kinyarwanda",
    "kok_IN": "Konkani (India)",
    "kok": "Konkani",
    "ko_KR": "Korean (South Korea)",
    "ko": "Korean",
    "khq_ML": "Koyra Chiini (Mali)",
    "khq": "Koyra Chiini",
    "ses_ML": "Koyraboro Senni (Mali)",
    "ses": "Koyraboro Senni",
    "lag_TZ": "Langi (Tanzania)",
    "lag": "Langi",
    "lv_LV": "Latvian (Latvia)",
    "lv": "Latvian",
    "lt_LT": "Lithuanian (Lithuania)",
    "lt": "Lithuanian",
    "luo_KE": "Luo (Kenya)",
    "luo": "Luo",
    "luy_KE": "Luyia (Kenya)",
    "luy": "Luyia",
    "mk_MK": "Macedonian (Macedonia)",
    "mk": "Macedonian",
    "jmc_TZ": "Machame (Tanzania)",
    "jmc": "Machame",
    "kde_TZ": "Makonde (Tanzania)",
    "kde": "Makonde",
    "mg_MG": "Malagasy (Madagascar)",
    "mg": "Malagasy",
    "ms_BN": "Malay (Brunei)",
    "ms_MY": "Malay (Malaysia)",
    "ms": "Malay",
    "ml_IN": "Malayalam (India)",
    "ml": "Malayalam",
    "mt_MT": "Maltese (Malta)",
    "mt": "Maltese",
    "gv_GB": "Manx (United Kingdom)",
    "gv": "Manx",
    "mr_IN": "Marathi (India)",
    "mr": "Marathi",
    "mas_KE": "Masai (Kenya)",
    "mas_TZ": "Masai (Tanzania)",
    "mas": "Masai",
    "mer_KE": "Meru (Kenya)",
    "mer": "Meru",
    "mfe_MU": "Morisyen (Mauritius)",
    "mfe": "Morisyen",
    "naq_NA": "Nama (Namibia)",
    "naq": "Nama",
    "ne_IN": "Nepali (India)",
    "ne_NP": "Nepali (Nepal)",
    "ne": "Nepali",
    "nd_ZW": "North Ndebele (Zimbabwe)",
    "nd": "North Ndebele",
    "nb_NO": "Norwegian Bokmål (Norway)",
    "nb": "Norwegian Bokmål",
    "nn_NO": "Norwegian Nynorsk (Norway)",
    "nn": "Norwegian Nynorsk",
    "nyn_UG": "Nyankole (Uganda)",
    "nyn": "Nyankole",
    "or_IN": "Oriya (India)",
    "or": "Oriya",
    "om_ET": "Oromo (Ethiopia)",
    "om_KE": "Oromo (Kenya)",
    "om": "Oromo",
    "ps_AF": "Pashto (Afghanistan)",
    "ps": "Pashto",
    "fa_AF": "Persian (Afghanistan)",
    "fa_IR": "Persian (Iran)",
    "fa": "Persian",
    "pl_PL": "Polish (Poland)",
    "pl": "Polish",
    "pt_BR": "Portuguese (Brazil)",
    "pt_GW": "Portuguese (Guinea-Bissau)",
    "pt_MZ": "Portuguese (Mozambique)",
    "pt_PT": "Portuguese (Portugal)",
    "pt": "Portuguese",
    "pa_Arab": "Punjabi (Arabic)",
    "pa_Arab_PK": "Punjabi (Arabic, Pakistan)",
    "pa_Guru": "Punjabi (Gurmukhi)",
    "pa_Guru_IN": "Punjabi (Gurmukhi, India)",
    "pa": "Punjabi",
    "ro_MD": "Romanian (Moldova)",
    "ro_RO": "Romanian (Romania)",
    "ro": "Romanian",
    "rm_CH": "Romansh (Switzerland)",
    "rm": "Romansh",
    "rof_TZ": "Rombo (Tanzania)",
    "rof": "Rombo",
    "ru_MD": "Russian (Moldova)",
    "ru_RU": "Russian (Russia)",
    "ru_UA": "Russian (Ukraine)",
    "ru": "Russian",
    "rwk_TZ": "Rwa (Tanzania)",
    "rwk": "Rwa",
    "saq_KE": "Samburu (Kenya)",
    "saq": "Samburu",
    "sg_CF": "Sango (Central African Republic)",
    "sg": "Sango",
    "seh_MZ": "Sena (Mozambique)",
    "seh": "Sena",
    "sr_Cyrl": "Serbian (Cyrillic)",
    "sr_Cyrl_BA": "Serbian (Cyrillic, Bosnia and Herzegovina)",
    "sr_Cyrl_ME": "Serbian (Cyrillic, Montenegro)",
    "sr_Cyrl_RS": "Serbian (Cyrillic, Serbia)",
    "sr_Latn": "Serbian (Latin)",
    "sr_Latn_BA": "Serbian (Latin, Bosnia and Herzegovina)",
    "sr_Latn_ME": "Serbian (Latin, Montenegro)",
    "sr_Latn_RS": "Serbian (Latin, Serbia)",
    "sr": "Serbian",
    "sn_ZW": "Shona (Zimbabwe)",
    "sn": "Shona",
    "ii_CN": "Sichuan Yi (China)",
    "ii": "Sichuan Yi",
    "si_LK": "Sinhala (Sri Lanka)",
    "si": "Sinhala",
    "sk_SK": "Slovak (Slovakia)",
    "sk": "Slovak",
    "sl_SI": "Slovenian (Slovenia)",
    "sl": "Slovenian",
    "xog_UG": "Soga (Uganda)",
    "xog": "Soga",
    "so_DJ": "Somali (Djibouti)",
    "so_ET": "Somali (Ethiopia)",
    "so_KE": "Somali (Kenya)",
    "so_SO": "Somali (Somalia)",
    "so": "Somali",
    "es_AR": "Spanish (Argentina)",
    "es_BO": "Spanish (Bolivia)",
    "es_CL": "Spanish (Chile)",
    "es_CO": "Spanish (Colombia)",
    "es_CR": "Spanish (Costa Rica)",
    "es_DO": "Spanish (Dominican Republic)",
    "es_EC": "Spanish (Ecuador)",
    "es_SV": "Spanish (El Salvador)",
    "es_GQ": "Spanish (Equatorial Guinea)",
    "es_GT": "Spanish (Guatemala)",
    "es_HN": "Spanish (Honduras)",
    "es_419": "Spanish (Latin America)",
    "es_MX": "Spanish (Mexico)",
    "es_NI": "Spanish (Nicaragua)",
    "es_PA": "Spanish (Panama)",
    "es_PY": "Spanish (Paraguay)",
    "es_PE": "Spanish (Peru)",
    "es_PR": "Spanish (Puerto Rico)",
    "es_ES": "Spanish (Spain)",
    "es_US": "Spanish (United States)",
    "es_UY": "Spanish (Uruguay)",
    "es_VE": "Spanish (Venezuela)",
    "es": "Spanish",
    "sw_KE": "Swahili (Kenya)",
    "sw_TZ": "Swahili (Tanzania)",
    "sw": "Swahili",
    "sv_FI": "Swedish (Finland)",
    "sv_SE": "Swedish (Sweden)",
    "sv": "Swedish",
    "gsw_CH": "Swiss German (Switzerland)",
    "gsw": "Swiss German",
    "shi_Latn": "Tachelhit (Latin)",
    "shi_Latn_MA": "Tachelhit (Latin, Morocco)",
    "shi_Tfng": "Tachelhit (Tifinagh)",
    "shi_Tfng_MA": "Tachelhit (Tifinagh, Morocco)",
    "shi": "Tachelhit",
    "dav_KE": "Taita (Kenya)",
    "dav": "Taita",
    "ta_IN": "Tamil (India)",
    "ta_LK": "Tamil (Sri Lanka)",
    "ta": "Tamil",
    "te_IN": "Telugu (India)",
    "te": "Telugu",
    "teo_KE": "Teso (Kenya)",
    "teo_UG": "Teso (Uganda)",
    "teo": "Teso",
    "th_TH": "Thai (Thailand)",
    "th": "Thai",
    "bo_CN": "Tibetan (China)",
    "bo_IN": "Tibetan (India)",
    "bo": "Tibetan",
    "ti_ER": "Tigrinya (Eritrea)",
    "ti_ET": "Tigrinya (Ethiopia)",
    "ti": "Tigrinya",
    "to_TO": "Tonga (Tonga)",
    "to": "Tonga",
    "tr_TR": "Turkish (Turkey)",
    "tr": "Turkish",
    "uk_UA": "Ukrainian (Ukraine)",
    "uk": "Ukrainian",
    "ur_IN": "Urdu (India)",
    "ur_PK": "Urdu (Pakistan)",
    "ur": "Urdu",
    "uz_Arab": "Uzbek (Arabic)",
    "uz_Arab_AF": "Uzbek (Arabic, Afghanistan)",
    "uz_Cyrl": "Uzbek (Cyrillic)",
    "uz_Cyrl_UZ": "Uzbek (Cyrillic, Uzbekistan)",
    "uz_Latn": "Uzbek (Latin)",
    "uz_Latn_UZ": "Uzbek (Latin, Uzbekistan)",
    "uz": "Uzbek",
    "vi_VN": "Vietnamese (Vietnam)",
    "vi": "Vietnamese",
    "vun_TZ": "Vunjo (Tanzania)",
    "vun": "Vunjo",
    "cy_GB": "Welsh (United Kingdom)",
    "cy": "Welsh",
    "yo_NG": "Yoruba (Nigeria)",
    "yo": "Yoruba",
    "zu_ZA": "Zulu (South Africa)",
    "zu": "Zulu"
  },
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
      str += "<td>" + self.locales[lang.replace(".json", "")] + "</td>";
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
  $(document).on("click", "#reset-branch", function (e) {
    e.stopPropagation();
    if (window.confirm("Are you sure that drop all modification and get data from repository?")) {
      $(".loader").show();
      $('#changebranch').modal('toggle')
      UserInstance.changeBranch(UserInstance, $("#set-branch"));
    } else {

    }
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
    if (window.confirm("Are you sure that drop all modification and get data from repository?")) {
      $(".loader").show();
      $('#changebranch').modal('toggle')
      UserInstance.changeBranch(UserInstance, this);
    }
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