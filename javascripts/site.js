YourNamespace = {
    index: {
        init: function () {
            var viewUpdatesField = document.getElementById("formInput28");
            var viewUpdatesBtn = document.getElementById("formBtn28");

            viewUpdatesBtn.addEventListener("click", accountRedirect);

            viewUpdatesField.onkeydown = function () {
                if (window.event.keyCode == '13') {
                    accountRedirect();
                }
            };

            function accountRedirect() {
                window.location.href = 'accounts/' + viewUpdatesField.value + ".html";
            }
        }
    },
    orders: {
        init: function () {
            var goBackBtn = document.getElementById("goBack-btn");
            goBackBtn.addEventListener("click", goBackRedirect);

            function goBackRedirect() {
                window.history.back();
            }
        }
    }
};

UTIL = {
    fire: function (func, funcname, args) {
        var namespace = YourNamespace; // indicate your obj literal namespace here

        funcname = (funcname === undefined) ? 'init' : funcname;
        if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function') {
            namespace[func][funcname](args);
        }
    },

    loadEvents: function () {
        var bodyId = document.body.id;

        // hit up common first.
        UTIL.fire('common');

        // do all the classes too.
        $.each(document.body.className.split(/\s+/), function (i, classnm) {
            UTIL.fire(classnm);
            UTIL.fire(classnm, bodyId);
        });

        UTIL.fire('common', 'finalize');
    }
};

// kick it all off here 

$(document).ready(UTIL.loadEvents);