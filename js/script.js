$( function() {
    var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 2000 );
 

$("#star1").click(function(){
        $("#star1").css("opacity", "1");
      });

$("#star2").click(function(){
        $("#star2").css("opacity", "1");
      });
$("#star3").click(function(){
        $("#star3").css("opacity", "1");
      });
$("#star4").click(function(){
        $("#star4").css("opacity", "1");
      });
$("#star5").click(function(){
        $("#star5").css("opacity", "1");
      });


 } );