# Accented letters workaround for WhatsApp on Firefox Linux

[![GitHub package.json version](https://img.shields.io/github/package-json/v/kugland/my-userscripts?filename=whatsapp-accents-workaround%2Fpackage.json&label=github)](https://github.com/kugland/my-userscripts/blob/master/whatsapp-accents-workaround)
[![Greasy Fork Version](https://img.shields.io/greasyfork/v/480873)](https://greasyfork.org/en/scripts/480873)
[![License: MIT](https://img.shields.io/github/license/kugland/my-userscripts)](../LICENSE)

When running under Firefox on Linux, WhatsApp Web inputs don’t accept letters entered
using dead keys as the first letter in the input box. This script tries to fix this.
This script was written by trial and error, so I’m not sure if this is the most correct
fix, but at least for me it does work.

It eats `compositionstart` and `compositionend` events, and eats any `input` event that
happens between a `compositionstart` and a `compositionend`.

For an example of the problem this script tries to fix:

https://forum.manjaro.org/t/whatsapp-web-deleting-letter-that-starts-with-accent/119772
