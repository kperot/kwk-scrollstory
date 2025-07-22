export function observer(callback, options = {}) {
  function action(node) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => callback(entry));
    }, options);

    obs.observe(node);

    return {
      destroy() {
        obs.disconnect();
      }
    };
  }

  return action;
}