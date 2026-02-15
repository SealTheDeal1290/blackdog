(() => {
  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  const watchedPaths = [window.location.pathname, "/styles.css", "/site.js"];
  const lastSeen = new Map();

  const textCheck = async (path) => {
    const response = await fetch(`${path}?_lr=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) {
      return;
    }

    const text = await response.text();
    const marker = `${text.length}:${text.slice(0, 220)}`;

    const previous = lastSeen.get(path);
    if (!previous) {
      lastSeen.set(path, marker);
      return;
    }

    if (marker && marker !== previous) {
      window.location.reload();
      return;
    }

    lastSeen.set(path, marker);
  };

  const checkAll = async () => {
    for (const path of watchedPaths) {
      try {
        await textCheck(path);
      } catch (_) {
      }
    }
  };

  checkAll();
  window.setInterval(checkAll, 1000);
})();
