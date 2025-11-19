window.addEventListener('load', function() {
  const script = document.createElement('script');
  script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  script.async = true;
  document.body.appendChild(script);
  script.onload = function() {
    const countEl = document.getElementById('globalVisitCount');
    if (countEl) {
      const timer = setInterval(() => {
        const totalCount = window.busuanziCookie.getVal('site_pv');
        if (totalCount) {
          countEl.innerText = totalCount;
          clearInterval(timer);
        }
      }, 500);
    }
  };
});