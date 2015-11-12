alert("Order Checker Started.");

function runScript() {
  chrome.tabs.executeScript({
    "file": "content.js"
  });
}

runScript();