document.addEventListener('DOMContentLoaded', function() {
  let cmd = document.getElementById('cmd');
  let prm1n = document.getElementById('prm1n');
  let prm1v = document.getElementById('prm1v');
  let prm2n = document.getElementById('prm2n');
  let prm2v = document.getElementById('prm2v');
  chrome.storage.local.get(/* String or Array */["command", "param1N", "param1V", "param2N", "param2V"], function(items){
    cmd.value = items["command"];
    prm1n.value = items["param1N"];
    prm1v.value = items["param1V"];
    prm2n.value = items["param2N"];
    prm2v.value = items["param2V"];
  });
  var checkPageButton = document.getElementById('sendRequest');
  checkPageButton.addEventListener('click', function() {
    var magicQuote = '\\\\\\\\\\\\"';
    var command = magicQuote + cmd.value + magicQuote;
    var param1N = magicQuote + prm1n.value + magicQuote;
    var param1V = magicQuote + prm1v.value + magicQuote;
    var param2N = magicQuote + prm2n.value + magicQuote;
    var param2V = magicQuote + prm2v.value + magicQuote;
    chrome.storage.local.set({
      "command": cmd.value,
      "param1N": prm1n.value,
      "param1V": prm1v.value,
      "param2N": prm2n.value,
      "param2V": prm2v.value}, function(){});
    chrome.tabs.executeScript({
      code: "var myScript = document.createElement('script');"
        + 'myScript.textContent = \'(async () => { await $flutterDriver(\\\'{"command": "request_data", "message": '
        + '"{' + magicQuote + 'command' + magicQuote + ': ' + command + ', ' + param1N + ': ' + param1V + ', ' + param2N + ': ' + param2V + '}"}\\\'); console.log($flutterDriverResult);})();\';'
        + "document.head.appendChild(myScript);"
    }, (results) => {
    });
  }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('tapThis');
  checkPageButton.addEventListener('click', function() {
    var keyvalue = document.getElementById('keyvalue').value;
    if (document.getElementById('byValueKey').checked) {
      console.log("Tapping by Value Key")
      chrome.storage.local.set({ "keyvalue": keyvalue}, function(){});
      chrome.tabs.executeScript({
        code: "var myScript = document.createElement('script');"
        + 'myScript.textContent = \'(async () => { await $flutterDriver(\\\'{"command": "tap", "finderType": "ByValueKey", "keyValueString": "' + keyvalue + '", "keyValueType": "String"}\\\');})();\';'
        + "document.head.appendChild(myScript);"
      }, (results) => {
      });
    }
    else if (document.getElementById('byText').checked){
      console.log("Tapping by Text")
      chrome.tabs.executeScript({
        code: "var myScript = document.createElement('script');"
        + 'myScript.textContent = \'(async () => { await $flutterDriver(\\\'{"command": "tap", "finderType": "ByText", "text": "' + keyvalue + '"}\\\');})();\';'
        + "document.head.appendChild(myScript);"
      }, (results) => {
      });
    }
    else {
      console.log("Tapping by Type")
      chrome.tabs.executeScript({
        code: "var myScript = document.createElement('script');"
        + 'myScript.textContent = \'(async () => { await $flutterDriver(\\\'{"command": "tap", "finderType": "ByText", "text": "' + keyvalue + '"}\\\');})();\';'
        + "document.head.appendChild(myScript);"
      }, (results) => {
      });
    };
  }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('enterText');
  checkPageButton.addEventListener('click', function() {
    var textvalue = document.getElementById('textvalue').value;
    chrome.storage.local.set({ "textvalue": textvalue}, function(){});
    chrome.tabs.executeScript({
      code: "var myScript = document.createElement('script');"
       + 'myScript.textContent = \'(async () => { await $flutterDriver(\\\'{"command": "enter_text", "text": "' + textvalue + '"}\\\');})();\';'
       + "document.head.appendChild(myScript);"
    }, (results) => {
    });
  }, false);
}, false);