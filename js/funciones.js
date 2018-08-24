    function abrir(url) { 
      open(url,'','top=150,left=150,width=500,height=300') ; 
    } 

    function abrir_facebook(url) { 
      open(url,'','top=100,left=100,width=800,height=600') ; 
    } 


    

    var indice_slider = 1;
    //var parada
    
    function photoplace(n) {
    //  Stoptime(parada);
      showphoto(indice_slider += n);
    }

    function showphoto(n) {
      var i;
      var x = document.getElementsByClassName("misfotos");
     
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }

     // indice_slider++;

      if (indice_slider<1) {indice_slider=x.length};
      if (indice_slider > x.length) {indice_slider = 1};
      x[indice_slider-1].style.display = "block";

     // parada=setTimeout(showphoto,3000);
  
    }

    //function Stoptime(parada) {
    //  clearTimeout(parada);
    //}

