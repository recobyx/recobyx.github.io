(function(){
  // console.log("[side_tree.js] loading... " + document.title);

  let anchors = document.getElementsByTagName('a');
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function(e) {
      let ifr = window.parent.document.getElementById('content_iframe');
      ifr.setAttribute('src', e.target.id +'.html');
    }, false);
  }

  let rollers = document.getElementsByClassName('roller');
  for (let i = 0; i < rollers.length; i++) {
    rollers[i].addEventListener('click', function(e) {
      let parent = e.target.parentElement;
      let sensor = parent.previousElementSibling;
      let subs = parent.nextElementSibling.getElementsByClassName('sensor');

      if (sensor.checked) {
        for (let j = 0; j < subs.length; j++) {
          subs[j].checked = false;
        }
      }
      else {
        for (let j = 0; j < subs.length; j++) {
          subs[j].checked = true;
        }
      }
    }, false);
  }
})();
