define(["jquery", "mousetrap", "jquery.blockUI"], function ($, mouseTrap) {
    var exports = {
        html: "<p><em>Esc</em> to escape; <em>Shift Shift Ctrl Shift</em> to show again</p>" +
            "<p><button class=\"unblockUI\" onclick=\"require('amber/helpers').globals.Browser._open()\">legacy IDE</button>" +
            "<button class=\"unblockUI\" onclick=\"require('amber/helpers').popupHelios()\">Helios IDE</button></p>",
        keystroke: "shift shift ctrl shift",
        start: function () {
            $(document).ready(openMe);
        }
    };

    function openMe() {
        $.blockUI({message: exports.html});
        $(".unblockUI").on("click", closeMe);
        $(document).on("keyup", escapeBinding);
        mouseTrap.unbind(exports.keystroke);
    }

    function closeMe() {
        $.unblockUI();
        $(".unblockUI").off("click", closeMe);
        $(document).off("keyup", escapeBinding);
        mouseTrap.bind(exports.keystroke, openMe);
    }

    function escapeBinding(event) {
        if (event.keyCode == 27) { //esc
            closeMe();
        }
    }

    return exports;
});