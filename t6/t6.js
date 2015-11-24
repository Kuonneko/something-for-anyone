 function play(){
  var audio = document.getElementById('icon');
  var music = document.getElementById('music');

	
         
  audio.onclick=act;
    
 }

function act(){
      if(music.paused){
      music.play();
      }else{
	    music.pause();
	  }
}

window.onload = play;
     


