chrome.runtime.onInstalled.addListener(installInitiated());

function installInitiated() {
    chrome.storage.sync.set({"defaultFirstCurr": "USD"});

    chrome.storage.sync.set({"defaultSecondCurr": "EUR"});

    chrome.storage.sync.set({"firstCurrDefaultAmount": 100});

    chrome.storage.sync.set({"language": "English"});

    chrome.tabs.create({
        url: 'onboarding.html'
    });
}