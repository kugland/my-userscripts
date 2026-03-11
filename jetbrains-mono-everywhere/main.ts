declare const GM: {
  addStyle: (css: string) => void;
};

const fontName = "JetBrains Mono";
const excludeDomains: string[] = ["localhost", "wikipedia.org"];
const excludeSelector: string[] = [
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
const extra: string[] = [];

function testDomain(domain: string): boolean {
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
