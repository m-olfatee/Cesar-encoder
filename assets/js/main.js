document.getElementById("encode").addEventListener("click", () => {
    document.getElementById("result").innerText = ""
    var text = document.getElementById("text").value;
    var key = parseInt(document.getElementById("key").value);
    var textArray = text.split("");
    var resultsArray = [];
    for (var i = 0; i < textArray.length; i++) {
        var temp = text.charCodeAt(i);
        if (temp >= 97 && temp <= 122) {
            temp -= 32;
        } if (temp + key > 90) {
            temp -= 26;
        }
        if (temp != 32) {
            resultsArray.push(String.fromCharCode((temp + key)));
        } else {
            resultsArray.push(String.fromCharCode(temp));
        }
    }
    document.getElementById("result").value = resultsArray.join("");
    document.getElementById("text").value = "";
    document.getElementById("key").value = "";
})
document.getElementById("decode").addEventListener("click", () => {
    document.getElementById("result").innerText = ""
    var text = document.getElementById("text").value;
    var key = parseInt(document.getElementById("key").value);
    var textArray = text.split("");
    var resultsArray = [];
    for (var i = 0; i < textArray.length; i++) {
        var temp = text.charCodeAt(i);
        if (temp >= 65 && temp <= 90) {
            temp += 32;
        } if (temp - key < 97) {
            temp += 26;
        }
        if (temp != 32) {
            resultsArray.push(String.fromCharCode((temp - key)));
        } else {
            resultsArray.push(String.fromCharCode(temp));
        }
        console.log(resultsArray)
        console.log(temp, typeof (temp))
    }
    document.getElementById("result").value = resultsArray.join('');
    document.getElementById("text").value = "";
    document.getElementById("key").value = "";
})

