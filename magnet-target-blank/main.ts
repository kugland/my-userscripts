declare const GM: {
  openInTab: (url: string) => void;
}

const listener = (event: Event) => {
  const target = event.target as HTMLElement;
  if (target.tagName === 'A') {
    const href = (target as HTMLAnchorElement).href;
    if (typeof href === 'string' && href.startsWith('magnet:')) {
      event.preventDefault();
      event.stopPropagation();
      GM.openInTab(href);
    }
  }
};

document.addEventListener('click', listener, { capture: true });
document.addEventListener('tap', listener, { capture: true });
