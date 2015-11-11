alert("hello from bg.js");

// background.js is it's own window.
// need to grab DOM of current active window

// chrome.browserAction.onClicked.addListener(function(tab) {
//   var element = document.getElementsByClassName('vcard-names');
//   while(true) {
//     if(element.length > 0 && element){
//       alert('Element Exists');
//       break;
//     } else {
//       alert('Element does NOT exists');
//       setTimeout(function(){window.location.reload(1);}, 0);
//     };
//   };
// });

// document.getElementById('clickme').addEventListener('click', runChecker);


// chrome.browserAction.onClicked.addListener(function(tab) {
//   setTimeout(function(){window.location.reload(true);}, 2000);
  // setInterval(orderChecker, 3000);
// });




// function checker() {
//   chrome.tabs.getSelected(null, function(tab) {
//     var myURL = tab.url;
//     // alert(myURL);
//     alert(document.location);
//     if(myURL == "https://github.com/atp1o2"){
//       var element = document.getElementsByClassName('vcard-names');
//       if(element.length > 0 && element){
//         alert('Element Exists');
//       } else {
//         alert('Element does NOT exists');
//         setTimeout(function(){window.location.reload(true);}, 3000);
//       };
//     };
//   });
// }

// checker();

// chrome.browserAction.onClicked.addListener(function(tab) {
//   checker();
// });