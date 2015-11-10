  var element = document.getElementsByClassName('vcard-na');

  if(element.length > 0 && element){
      // run alert function
      alert('Element Exists');
    } else {
      // run refresh function
      alert("Nope");
      setTimeout(function(){
         window.location.reload(1);
      }, 50);

    };
