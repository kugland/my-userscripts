// ==UserScript==
// @name         jetbrains-mono-everywhere
// @namespace    github.com/kugland/my-userscripts
// @version      1.0.0
// @author       André Kugland
// @description  Userscript to apply JetBrains Mono font everywhere
// @license      MIT
// @homepage     https://github.com/kugland/my-userscripts
// @supportURL   https://github.com/kugland/my-userscripts/issues
// @match        http://*/*
// @match        https://*/*
// @grant        GM.addStyle
// ==/UserScript==

(function () {
  "use strict";

  const fontName = "JetBrains Mono";
  const excludeDomains = ["localhost", "wikipedia.org"];
  const excludeSelector = [
    "mat-icon",
    ":is(.material-icons)",
    ':is([class*="fa-"])',
    ':is(i[class*="icon-"])',
    ':is([class*="glyphicon-"])',
    ":is(.icon)",
    ':is(.nf):is([class*="nf-"])',
    ":is(.google-symbols)",
    ':is([class*="iconochive-"])',
    ':is([class*="icon"])',
  ];
  const extra = [];
  function testDomain(domain) {
    const hostname = window.location.hostname;
    return hostname === domain || hostname.endsWith(`.${domain}`);
  }
  if (testDomain("github.com")) {
    extra.push(`
    :root {
      --fontStack-system: '${fontName}' !important;
      --fontStack-sansSerif: '${fontName}' !important;
      --fontStack-sansSerifDisplay: '${fontName}' !important;
      --fontStack-monospace: '${fontName}' !important;
    }
  `);
  }
  if (!excludeDomains.some(testDomain)) {
    GM.addStyle(`
    *${excludeSelector.map((s) => `:not(${s})`).join("")} {
      font-family: '${fontName}' !important;
    }
    ${extra.join("\n")}
  `);
  }
})();
