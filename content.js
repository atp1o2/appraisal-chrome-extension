  // var element = document.getElementsByClassName('vcard-names');

  // if(element.length > 0 && element){
  //     alert('Element Exists');
  //   } else {
  //     alert('Element does NOT exists');
  //     // setTimeout(function(){window.location.reload(1);}, 50);
  // };


  // var element = document.getElementsByClassName('vcard-names');

  //   if(element.length > 0 && element){
  //     alert('Element Exists');
  //   } else {
  //     alert('Element does NOT exists');
  //     // setTimeout(function(){window.location.reload(1);}, 5000);
  //   };

// alert("Hello from " + document.location)

    if(document.location == "https://github.com/atp1o2"){
      var element = window.document.getElementsByClassName('vcard-names');
      if(element.length > 0 && element){
        alert('Element Exists');
        element.focus();
      } else {
        alert('Element does NOT exists');
        setTimeout(function(){window.location.reload(true);}, 3000);
      };
    };




