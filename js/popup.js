document.addEventListener('DOMContentLoaded', function () {
    btn = document.getElementById("req")
    btn.addEventListener("click", function() {
        if(btn.classList.contains("btn-disabled") == false) {
            exchange()
        }
    });
});

function exchange() {
    var firstCurr = document.getElementById("firstCurr").value
    var secondCurr = document.getElementById("secondCurr").value
    var firstCurrAmount = document.getElementById("firstCurrAmount").value
    var btn = document.getElementById("req")

    var requestURL = 'https://api.exchangerate.host/convert?from=' + firstCurr + '&to=' + secondCurr + '';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        rate = request.response.result;
        var finalSum = firstCurrAmount * rate
        document.getElementById("secondCurrAmount").value = finalSum.toFixed(2)
    }

    btn.classList.remove("btn")
    btn.classList.add("btn-disabled")
    btn.disabled = true

    setTimeout(function() {
        btn.classList.remove("btn-disabled")
        btn.classList.add("btn")
        btn.disabled = false
    },1500)
}