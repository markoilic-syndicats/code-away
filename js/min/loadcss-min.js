function loadCSS(e,t,n,o){"use strict";function r(){for(var t,o=0;o<l.length;o++)l[o].href&&l[o].href.indexOf(e)>-1&&(t=!0);t?i.media=n||"all":setTimeout(r)}var i=window.document.createElement("link"),d=t||window.document.getElementsByTagName("script")[0],l=window.document.styleSheets;return i.rel="stylesheet",i.href=e,i.media="only x",i.onload=o||function(){},d.parentNode.insertBefore(i,d),r(),i}