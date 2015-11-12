if(document.location == "https://github.com/atp1o2"){
  var element = window.document.getElementsByClassName('vcard-names');
  if(element.length > 0 && element){
    alert('Order Found!');
  } else {
    setTimeout(function(){window.location.reload(true);}, Math.random()*10000);
  };
};




