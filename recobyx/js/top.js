(function() {
  //init setting
  addBarAction("tree", ['>','<']);
  addBarAction("content", ['<','>']);
})();

function addBarAction(name, signs) {
  document.getElementById('nob_'+ name).setAttribute('sign', signs[0]);

  let bar = document.getElementById('bar_'+ name);
  bar.addEventListener('click', function(e) {
    let pane = document.getElementById(name + '_pane');
    if (pane.clientWidth > 0) {
      changeAround(name, pane, 'none', signs[1]);
    }
    else {
      changeAround(name, pane, 'flex', signs[0]);
    }
  }, false);
}

function changeAround(name, pane, mode, sign) {
  pane.style.display = mode;
  document.getElementById('nob_'+ name).setAttribute('sign', sign);
  document.getElementById('bar_' + (name == 'tree' ? 'content' : 'tree')).style.display = mode;
}
