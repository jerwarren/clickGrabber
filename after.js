// this code will be executed after page load
(function() {
  const body = document.querySelector("body");
  addClickGrabber();
  
  window.onfocus = function() {
    setTimeout(releaseClicks,500);
  }

  window.onblur = function() {
    setTimeout(grabClicks,500);
  }

  function addClickGrabber(){
    body.innerHTML = body.innerHTML + "<div id=\"clickGrabberExtension\"></div>";
  }
  
  function grabClicks() {
    document.querySelector("#clickGrabberExtension").style="display: block;";
  }
  
  function releaseClicks() {
    document.querySelector("#clickGrabberExtension").style="display: none;";
  }

})();
