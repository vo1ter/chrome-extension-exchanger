function localizePopup() {
    chrome.storage.sync.get("language").then(lang => {
        fetch("./langs/" + lang + ".json")
        .then(res => res.json())
        .then(json => {
            console.log(json.length)
            // for(var i = 0; i < json.length)
        })
    });
}

function localizeSettings() {
    chrome.storage.sync.get("language").then(lang => {
        fetch("./langs/" + lang + ".json")
        .then(res => res.json())
        .then(json => {
            
        })
    });
}