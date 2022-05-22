document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("save").addEventListener("click", function() {
        saveSettings()
    });
});

function saveSettings() {
    var firstCurr = document.getElementById("firstCurr").value
    var secondCurr = document.getElementById("secondCurr").value
    var firstCurrAmount = document.getElementById("firstCurrAmount").value

    chrome.storage.sync.set({"defaultFirstCurr": firstCurr});

    chrome.storage.sync.set({"defaultSecondCurr": secondCurr});

    chrome.storage.sync.set({"firstCurrDefaultAmount": firstCurrAmount});

    alert("Settings saved!")
    location.reload()
}