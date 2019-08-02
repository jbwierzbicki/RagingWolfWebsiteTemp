// This is a main JavaScript file that will ll be compiled into /javascripts/site.js
//
// Any JavaScript file in your site folder can be referenced here by using import or require statements.
// Additionally, you can import modules installed via your package.json file.
//
// For example:
// import './fileName'
//
// To learn more, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import


if ($("body").data("title") === "index") {

    var viewUpdatesField = document.getElementById("formInput28");
    var viewUpdatesBtn = document.getElementById("formBtn28");

    viewUpdatesField.onkeydown = function () {
        if (window.event.keyCode == '13') {
            accountRedirect();
        }
    };
    
    accountRedirect = function() {
        window.location.href = 'accounts/' + viewUpdatesField.value + ".html";
    };

    viewUpdatesBtn.addEventListener("click", accountRedirect);
    
}

if ($("body").data("title") === "orders") {
    var goBackBtn = document.getElementById("goBack-btn");
    
    goBackRedirect = function() {
        window.history.back();
    };
    
    goBackBtn.addEventListener("click", goBackRedirect);
}


