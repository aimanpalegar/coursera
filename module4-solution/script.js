(function (window) {


var names = ["yami", "Johnny", "Jim", "Jimin", "peter", "Franklin", "amy", "kim", "leena", "jack"];


for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);