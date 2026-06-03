/*
Night Night Popup
A gentle website rest overlay for late-night browsing.

Default behaviour:
- Shows from 11:00 PM to 6:00 AM, based on the visitor's local time.
- Can be dismissed once per session/day.
- Generates a small animated star field.
*/

(function () {
  var STORAGE_KEY = 'nn_dismissed';
  var SHOW_FROM = 23;
  var SHOW_UNTIL = 6;
  var STAR_COUNT = 90;

  function isNightTime() {
    var h = new Date().getHours();
    return h >= SHOW_FROM || h < SHOW_UNTIL;
  }

  function hasDismissed() {
    try {
      var stored = sessionStorage.getItem(STORAGE_KEY);
      if (!stored) return false;

      var data = JSON.parse(stored);
      return data.date === new Date().toDateString();
    } catch (e) {
      return false;
    }
  }

  function markDismissed() {
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ date: new Date().toDateString() })
      );
    } catch (e) {}
  }

  function buildStars() {
    var container = document.getElementById('nn-stars');
    if (!container) return;

    container.innerHTML = '';

    for (var i = 0; i < STAR_COUNT; i++) {
      var star = document.createElement('div');
      star.className = 'nn-star';
      star.style.left = (Math.random() * 100) + '%';
      star.style.top = (Math.random() * 100) + '%';
      star.style.setProperty('--d', (2 + Math.random() * 5) + 's');
      star.style.setProperty('--o', (0.08 + Math.random() * 0.45));
      star.style.animationDelay = (Math.random() * 5) + 's';
      container.appendChild(star);
    }
  }

  window.nnDismiss = function () {
    markDismissed();

    var overlay = document.getElementById('nn-overlay');
    if (!overlay) return;

    overlay.classList.add('nn-fade-out');

    setTimeout(function () {
      overlay.classList.add('nn-hidden');
    }, 650);
  };

  document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('nn-overlay');
    if (!overlay) return;

    if (isNightTime() && !hasDismissed()) {
      buildStars();
      overlay.classList.remove('nn-hidden');
    }
  });
})();
