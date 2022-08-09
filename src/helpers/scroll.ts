export const scrollTop = (delay = 0, behavior: ScrollBehavior = 'smooth') => {
  if (typeof window === 'undefined') return;

  window.requestAnimationFrame(() => {
    setTimeout(() => {
      window.scroll({ top: 0, left: 0, behavior });
    }, delay);
  });
};

export const scrollBottom = (
  delay = 0,
  behavior: ScrollBehavior = 'smooth',
) => {
  window.requestAnimationFrame(() => {
    setTimeout(() => {
      window.scroll({
        top: window.document.body.offsetHeight,
        left: 0,
        behavior,
      });
    }, delay);
  });
};
