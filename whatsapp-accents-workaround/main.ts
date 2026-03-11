// https://forum.manjaro.org/t/whatsapp-web-deleting-letter-that-starts-with-accent/119772

// This script was created through trial and error. I don’t know why it works, but it does
// work, at least for me in my particular configuration.
function eatEvent(event: Event) {
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
