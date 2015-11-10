// var app = chrome.runtime.getBackgroundPage();

function hello() {
  chrome.tabs.executeScript({
    file: 'content_script.js'
  });
}

document.getElementById('clickme').addEventListener('click', hello);