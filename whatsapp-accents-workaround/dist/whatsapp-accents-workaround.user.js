// ==UserScript==
// @name         whatsapp-accents-workaround
// @namespace    github.com/kugland/my-userscripts
// @version      1.0.0
// @author       André Kugland
// @description  Accented letters workaround for WhatsApp on Firefox Linux
// @license      MIT
// @homepage     https://github.com/kugland/my-userscripts
// @supportURL   https://github.com/kugland/my-userscripts/issues
// @match        http://*/*
// @match        https://*/*
// ==/UserScript==

(function () {
  "use strict";

  function eatEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  for (const eventType of ["compositionstart", "compositionend"]) {
    document.addEventListener(
      eventType,
      (e) => {
        eatEvent(e);
        if (eventType == "compositionstart") {
          document.addEventListener("input", eatEvent, true);
        } else if (eventType == "compositionend") {
          document.removeEventListener("input", eatEvent, true);
        }
      },
      true,
    );
  }
})();
