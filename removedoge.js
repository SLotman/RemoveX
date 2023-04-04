// ==UserScript==
// @name     Remove doge
// @version  1
// @include  https://twitter.com*
// @run-at   document-end
// ==/UserScript==

function removeDoge() {
  var images = document.getElementsByTagName('svg');
  if (images.length<1) {
  	setTimeout(removeDoge, 0);
  } else {
    if (images.length == 1) {
        setTimeout(removeDoge, 0);
    } else {
      let found = false;
      for (let f=0; f<images.length; f++) {
        // console.log(images[0].outerHTML);
        if (images[f].outerHTML.includes("iVBORw0KGgoAAAANSUh")) {
          images[f].outerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><g><pattern height="1" id="0-a" patternContentUnits="objectBoundingBox" width="1"><image height="100" transform="scale(.01 .0087)" width="100" xlink:href="data:image/png;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAB3RJTUUH5wQEBAgCnKnz9QAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAFWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWt7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIxpUzoAAAABdFJOUwBA5thmAAAA/UlEQVR42u3XwQ7CIBCE4T20Vu2F939akx401rjsLMMemvmPBvgCiIlmSimllFJXrb0rIL4ZotjOfT6PL4Eaxwzs6HpjmxN0FpMN6w3vGDuAtJSxtbYgSHvgpxU/MX/8SjHMn8ExzJ/EMcyfxzF+1wkjgGHudBayeiuwEG+hhYZ0HxwFSSoIkFXgXfR+PShIyU5mI2mlArlVIJBR8EryCopkFNjIKAkEVjIGzCQRs/sVTgs0sNdeeyNbya2XIICSN+LKiBFlnoNIiBk2jvYCo2Afa4HhE7F/uiMCYxszv1ahpzG8jQojxozfhtkyn/C3QxP+QWxAKaWUUkoRewGyXIpgXmKKQQAAAABJRU5ErkJggg=="></image></pattern><path d="M2.412.974h19.176v22.052H2.412z" fill="url(#0-a)"></path></g></svg>';
          console.log("DOGE FOUND!");
          found = true;
        } else {
        }
      }
      if (!found) setTimeout(removeDoge, 0);
    }
  }
}

console.log('remove doge started!');
removeDoge();

window.onresize = function() {
  removeDoge();
}