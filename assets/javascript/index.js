
var i = 0;
var txt = '          I want to create clean and user-friendly applications.             Let me build one for you.'; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */

$(document).ready(function () {
  window.onload = function typeWriter() {
    if (i < txt.length) {
      document.getElementById("biobuild").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  $('#mybutton').hide().delay(5000).fadeIn(2200);
});



