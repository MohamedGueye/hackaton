$(document).ready(function(){
  $('h1').keydown(function ( event ){
      if (event.which == 32){
          event.preventDefault();
      }
  }  )  
})

