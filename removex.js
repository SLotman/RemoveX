// ==UserScript==
// @name     Remove X
// @version  1.2
// @include  https://twitter.com*
// @run-at   document-start
// @author   SLotman
// ==/UserScript==
var siteLoaded = false;
var logoRemoved = false;
var contentLoaded = false;

console.log('remove x started!');
removeLoadingImage();
removeX();
replaceFavIcon();

window.addEventListener ("DOMContentLoaded", function() {
  contentLoaded = true;
  removeX();
});

window.addEventListener ("load", function(){
  console.log(">>>>> document loaded!");
  siteLoaded = true;
  removeX();
});


function GM_addStyle (cssStr) {
    let D               = document;
    let newNode         = D.createElement ('style');
    newNode.textContent = cssStr;

    let targ    = document.head || D.getElementsByTagName ('head')[0]; // || D.body || D.documentElement;
    if (targ) targ.appendChild (newNode);
}

function replaceFavIcon() {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      var head = document.head || document.getElementsByTagName("head")[0];
      if (head) head.appendChild(link);
  }
  link.href = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAB3RJTUUH5wQEBAgCnKnz9QAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAFWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWt7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIxpUzoAAAABdFJOUwBA5thmAAAA/UlEQVR42u3XwQ7CIBCE4T20Vu2F939akx401rjsLMMemvmPBvgCiIlmSimllFJXrb0rIL4ZotjOfT6PL4Eaxwzs6HpjmxN0FpMN6w3vGDuAtJSxtbYgSHvgpxU/MX/8SjHMn8ExzJ/EMcyfxzF+1wkjgGHudBayeiuwEG+hhYZ0HxwFSSoIkFXgXfR+PShIyU5mI2mlArlVIJBR8EryCopkFNjIKAkEVjIGzCQRs/sVTgs0sNdeeyNbya2XIICSN+LKiBFlnoNIiBk2jvYCo2Afa4HhE7F/uiMCYxszv1ahpzG8jQojxozfhtkyn/C3QxP+QWxAKaWUUkoRewGyXIpgXmKKQQAAAABJRU5ErkJggg==";
}

function removeLoadingImage(){  
  if (siteLoaded) return; // too late
  
  console.log('trying to remove x loading image...');
	GM_addStyle("#placeholder { display: none !important; }");
  let pd = document.getElementById("placeholder")
  if (pd!=undefined && pd!=null) { 
    console.log('loading x found!');
    pd.remove(); 
  } else { setTimeout(removeLoadingImage, 0);  }
  replaceFavIcon();
}

function removeX() {
  console.log("Trying to remove X logo " + logoRemoved);
  if (!siteLoaded) return;
  if (logoRemoved) return;
  
  replaceFavIcon();
  var images = document.getElementsByTagName('svg');
  if (images.length<1) {
    console.log("no images found")
  } else {
    if (images.length > 0) {
      for (let f=0; f<images.length; f++) {
        // console.log(images[f].outerHTML);
        if ( images[f].outerHTML.includes("M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133") || 
             images[f].outerHTML.includes("M18.244 2.25h3.308l-7.227")
           ) {
          console.log(images[f].outerHTML);
          images[f].outerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><g><pattern height="1" id="0-a" patternContentUnits="objectBoundingBox" width="1"><image height="100" transform="scale(.01 .0087)" width="100" xlink:href="data:image/png;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAB3RJTUUH5wQEBAgCnKnz9QAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAFWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWt7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIxpUzoAAAABdFJOUwBA5thmAAAA/UlEQVR42u3XwQ7CIBCE4T20Vu2F939akx401rjsLMMemvmPBvgCiIlmSimllFJXrb0rIL4ZotjOfT6PL4Eaxwzs6HpjmxN0FpMN6w3vGDuAtJSxtbYgSHvgpxU/MX/8SjHMn8ExzJ/EMcyfxzF+1wkjgGHudBayeiuwEG+hhYZ0HxwFSSoIkFXgXfR+PShIyU5mI2mlArlVIJBR8EryCopkFNjIKAkEVjIGzCQRs/sVTgs0sNdeeyNbya2XIICSN+LKiBFlnoNIiBk2jvYCo2Afa4HhE7F/uiMCYxszv1ahpzG8jQojxozfhtkyn/C3QxP+QWxAKaWUUkoRewGyXIpgXmKKQQAAAABJRU5ErkJggg=="></image></pattern><path d="M2.412.974h19.176v22.052H2.412z" fill="url(#0-a)"></path></g></svg>';
          console.log("X FOUND!");
          if (siteLoaded) { 
            logoRemoved = true;
          	return;
          }
        }
      }
    }
  }
  setTimeout(removeX, 0);
}

window.onresize = function() { removeX(); }

