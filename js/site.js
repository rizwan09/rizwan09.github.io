(function () {
  // Toggle abstract / BibTeX blocks
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-toggle="collapse"]');
    if (!a) return;
    var el = document.getElementById((a.getAttribute('href') || '').slice(1));
    if (!el) return;
    e.preventDefault();
    el.classList.toggle('in');
  });

  // News: show all / fewer
  document.querySelectorAll('[data-news-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var list = document.getElementById(btn.getAttribute('data-news-toggle'));
      var open = list.classList.toggle('open');
      btn.textContent = open ? 'Less News' : 'More News';
    });
  });

  // Recognition: show more / fewer
  var recBtn = document.querySelector('[data-rec-toggle]');
  if (recBtn) {
    var label = recBtn.textContent;
    recBtn.addEventListener('click', function () {
      var prof = recBtn.closest('.profile');
      var open = prof.classList.toggle('rec-open');
      recBtn.textContent = open ? 'Show fewer' : label;
    });
  }

  // Sticky profile column: if it is taller than the window, let it scroll
  // until its bottom is visible, then stick (so every item stays reachable).
  var prof = document.querySelector('.profile');
  function fitProfile() {
    if (!prof) return;
    if (window.matchMedia('(max-width: 860px)').matches) { prof.style.top = ''; return; }
    var bar = document.querySelector('.topbar');
    var top = (bar ? bar.offsetHeight : 0) + 20;
    var extra = prof.offsetHeight + top + 24 - window.innerHeight;
    prof.style.top = (extra > 0 ? top - extra : top) + 'px';
  }
  window.addEventListener('load', fitProfile);
  window.addEventListener('resize', fitProfile);
  fitProfile();

  // Publication topic filter
  var links = document.querySelectorAll('[data-filter]');
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var f = link.getAttribute('data-filter');
      links.forEach(function (l) { l.classList.toggle('active', l === link); });
      document.querySelectorAll('[data-topics]').forEach(function (item) {
        var li = item.closest('li') || item;
        li.hidden = !(f === 'all' || item.getAttribute('data-topics').split(' ').indexOf(f) !== -1);
      });
    });
  });
})();
