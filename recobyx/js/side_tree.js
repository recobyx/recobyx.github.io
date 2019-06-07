(function(){
  // console.log("[side_tree.js] loading... " + document.title);

  let anchors = document.getElementsByTagName('a');
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function(e) {
      console.log("clicked: "+ e.target.id);
      let src_nav = e.target.id.split(/#/);
      let nav = src_nav.length == 1 ? "" : src_nav[1];
      let ifr = window.parent.document.getElementById('content_iframe');
      ifr.addEventListener('load', function() {
        console.log("ifr load: "+ src_nav);
        if (nav) {
          console.log(nav);
          let elem = ifr.contentDocument.getElementById(nav);
          elem.setAttribute('class', 'highlight');
        }
      });
      ifr.setAttribute('src', src_nav[0] +'.html#'+ nav);

      if (nav) {
        let doc = ifr.contentDocument;
        let coll = doc.querySelectorAll('[class=highlight]');
        console.log("coll: "+ coll.length);
        for (let j = 0; j < coll.length; j++) {
          console.log("now hl> "+ coll[j].id);
          coll[j].removeAttribute('class', 'highlight');
        }

        let elem = doc.getElementById(nav);
        if (elem) {
          elem.setAttribute('class', 'highlight');
        }
      }
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
