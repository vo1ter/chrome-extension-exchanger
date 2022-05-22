document.addEventListener('DOMContentLoaded', function () {
    generateSelects()
});

function generateSelects() {
    var firstCurr = document.getElementById("firstCurr")
    var secondCurr = document.getElementById("secondCurr")
    var firstCurrAmount = document.getElementById("firstCurrAmount")
    chrome.storage.sync.get("firstCurrDefaultAmount").then(amount => {
        var firstCurrDefaultAmount = JSON.stringify(amount.firstCurrDefaultAmount).replace("\"", "").replace("\"", "")
        chrome.storage.sync.get("defaultFirstCurr").then(curr => {
            var defaultFirstCurr = JSON.stringify(curr.defaultFirstCurr).replace("\"", "").replace("\"", "")
            chrome.storage.sync.get("defaultSecondCurr").then(curr => {
                var defaultSecondCurr = JSON.stringify(curr.defaultSecondCurr).replace("\"", "").replace("\"", "")
                // chrome.storage.sync.get("language").then(lang => {
                //     var language = lang.language
                    fetch("./currs.json")
                    .then(res => res.json())
                    .then(json => {
                        for(var i = 0; i < Object.keys(json).length; i++) {
                            var selected = getDefaults(Object.keys(json)[i], defaultFirstCurr)
                            var symbol = Object.values(json)[i].symbol
                            var abb = Object.keys(json)[i]
                            var endCurr = symbol + abb
                            firstCurr.innerHTML += "<option value=\"" + abb + "\" " + selected + ">" + endCurr + "</option>"
                        }
                        for(var i = 0; i < Object.keys(json).length; i++) {
                            var selected = getDefaults(Object.keys(json)[i], defaultSecondCurr)
                            var symbol = Object.values(json)[i].symbol
                            var abb = Object.keys(json)[i]
                            var endCurr = symbol + abb
                            secondCurr.innerHTML += "<option value=\"" + abb + "\" " + selected + ">" + endCurr + "</option>"
                        }
                        firstCurrAmount.value = firstCurrDefaultAmount
                    });
                // });
            });
        });
    });
}

function getDefaults(inputed, saved) {
    if(inputed == saved) {
        return "selected"
    }
    else {
        return null
    }
}
