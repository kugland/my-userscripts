// ==UserScript==
// @name         magnet-target-blank
// @namespace    github.com/kugland/my-userscripts
// @version      1.0.0
// @author       André Kugland
// @description  Open magnet links in a new tab
// @license      MIT
// @homepage     https://github.com/kugland/my-userscripts
// @supportURL   https://github.com/kugland/my-userscripts/issues
// @match        http://*/*
// @match        https://*/*
// @grant        GM.openInTab
// ==/UserScript==

(function () {
  "use strict";

  function listener(event) {
    const target = event.target;
    if (target.tagName === "A") {
      const href = target.href;
      if (typeof href === "string" && href.startsWith("magnet:")) {
        event.preventDefault();
        event.stopPropagation();
        GM.openInTab(href);
      }
    }
  }
  document.addEventListener("click", listener, { capture: true });
  document.addEventListener("tap", listener, { capture: true });
})();
