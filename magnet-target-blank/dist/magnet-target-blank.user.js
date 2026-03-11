// ==UserScript==
// @name         magnet-target-blank
// @version      1.0.0
// @author       André Kugland <kugland@gmail.com>
// @description  Userscript to open magnet links in a new tab
// @license      MIT
// @grant        GM.openInTab
// ==/UserScript==

(function () {
  'use strict';

  const listener = (event) => {
    const target = event.target;
    if (target.tagName === "A") {
      const href = target.href;
      if (typeof href === "string" && href.startsWith("magnet:")) {
        event.preventDefault();
        event.stopPropagation();
        GM.openInTab(href);
      }
    }
  };
  document.addEventListener("click", listener, { capture: true });
  document.addEventListener("tap", listener, { capture: true });

})();