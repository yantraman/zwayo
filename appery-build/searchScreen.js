/*
 * JS for searchScreen generated by Appery.io
 */

Appery.getProjectGUID = function() {
    return 'a616adf4-1952-491a-84e9-9c07b1a4d37f';
};

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

// Deprecated


function adjustContentHeight() {
    Appery.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Appery.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

Appery.AppPages = [{
    "name": "searchScreen",
    "location": "searchScreen.html"
}, {
    "name": "musicQueueScreen",
    "location": "musicQueueScreen.html"
}, {
    "name": "findPartyScreen",
    "location": "findPartyScreen.html"
}];

searchScreen_js = function(runBeforeShow) {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'searchMusicBar': 'searchScreen_searchMusicBar'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        // Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=footer]").css("bottom", "-36px");
    }

    Appery.CurrentScreen = 'searchScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    var searchScreen_beforeshow = function() {
            Appery.CurrentScreen = "searchScreen";
            for (var idx = 0; idx < datasources.length; idx++) {
                datasources[idx].__setupDisplay();
            }
        };

    // On Load
    var searchScreen_onLoad = function() {
            searchScreen_elementsExtraJS();

            // TODO fire device events only if necessary (with JS logic)
            searchScreen_deviceEvents();
            searchScreen_windowEvents();
            searchScreen_elementsEvents();
        };

    // screen window events
    var searchScreen_windowEvents = function() {

            $('#searchScreen').bind('pageshow orientationchange', function() {
                var _page = this;
                adjustContentHeightWithPadding(_page);
            });

        };

    // device events
    var searchScreen_deviceEvents = function() {
            document.addEventListener("deviceready", function() {

            });
        };

    // screen elements extra js
    var searchScreen_elementsExtraJS = function() {
            // screen (searchScreen) extra code

        };

    // screen elements handler
    var searchScreen_elementsEvents = function() {
            $(document).on("click", "a :input,a a,a fieldset label", function(event) {
                event.stopPropagation();
            });

        };

    $(document).off("pagebeforeshow", "#searchScreen").on("pagebeforeshow", "#searchScreen", function(event, ui) {
        searchScreen_beforeshow();
    });

    if (runBeforeShow) {
        searchScreen_beforeshow();
    } else {
        searchScreen_onLoad();
    }
};

$(document).off("pagecreate", "#searchScreen").on("pagecreate", "#searchScreen", function(event, ui) {
    Appery.processSelectMenu($(this));
    searchScreen_js();
});