// var app = chrome.runtime.getBackgroundPage();

function runChecker() {
  chrome.tabs.executeScript({
    file: 'content_script.js'
  });
}


document.getElementById('clickme').addEventListener('click', runChecker);