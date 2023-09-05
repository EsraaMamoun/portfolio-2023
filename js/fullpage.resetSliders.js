/*!
 * fullpage.js Reset Sliders Extension 1.0.6 for fullPage.js v3
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license This code has been bought from www.alvarotrigo.com/fullPage/extensions/ and it is not free to use or distribute.
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
/* eslint-disable */
window.fp_resetSlidersExtension = function () {
  var e = this,
    a = window.fp_utils,
    i = window.fullpage_api,
    l = a.$,
    r = i.getFullpageData().internals,
    o = ".fullpage-wrapper",
    s = ".fp-slide";
  (e.apply = function (e) {
    if (!e.localIsResizing) {
      var i = l(".fp-section")[e.leavingSection - 1];
      if (l(s, i).length) {
        var n = l(".fp-initial", i)[0],
          t = n || l(s, i)[0];
        a.trigger(l(o)[0], "onResetSliders", {
          destination: t,
          leavingSection: i,
          destination: t,
        }),
          r.silentLandscapeScroll(t, "internal"),
          a.trigger(l(o)[0], "onEndResetSliders", {
            destination: t,
            leavingSection: i,
          });
      }
    }
  }),
    (e.c = r.c);
  var n = e["common".charAt(0)];
  return (
    "complete" === document.readyState && n("resetSliders"),
    window.addEventListener("load", function () {
      n("resetSliders");
    }),
    e
  );
};
