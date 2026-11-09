/* Frameworks frames: puts a real Frameworks moulding around every <img data-frame="…">.
   <img src="photo.jpg" data-frame="oak" data-mount="white">
   data-frame: oak · walnut · steel · chipped · ash · grey · black · white · gold · silver · box
   data-mount: white (default) · cream · black · none
   data-k:     moulding width as a share of the picture's longer side (default .06)
   data-mw:    mount width, same unit (default .1, 0 when data-mount="none")
   Frame something added later with FrameworksFrames.frame(img), or all new ones with FrameworksFrames.scan(). */
(function () {
  const done = new WeakSet();

  function size(box) {
    const img = box.querySelector('img'), d = img.dataset;
    if (!box.style.width && img.naturalWidth) box.style.width = 'min(100%, ' + img.naturalWidth + 'px)';
    // measured on the frame's outer width (fixed by css), so a wider moulding never widens the frame
    const W = box.getBoundingClientRect().width, a = img.naturalHeight / img.naturalWidth || 1;
    const long = W * Math.max(1, a);
    const k = Math.max(4, long * parseFloat(d.k || .06));
    const mw = box.dataset.mount === 'none' ? 0 : long * parseFloat(d.mw || .1);
    box.style.setProperty('--k', k + 'px');
    box.style.setProperty('--mw', mw + 'px');
  }

  function frame(img) {
    if (done.has(img)) return;
    done.add(img);
    const box = document.createElement('span');
    box.className = 'fwf';
    box.dataset.frame = img.dataset.frame || 'oak';
    box.dataset.mount = img.dataset.mount || 'white';
    // the frame takes the picture's place: its width, classes and inline width go to the frame
    if (img.getAttribute('width') && !img.style.width) box.style.width = img.getAttribute('width') + 'px';
    if (img.style.width) { box.style.width = img.style.width; img.style.width = ''; }
    box.innerHTML = '<i class="fwf-s fwf-t"></i><i class="fwf-s fwf-r"></i><i class="fwf-s fwf-b"></i><i class="fwf-s fwf-l"></i><span class="fwf-mount"></span>';
    img.replaceWith(box);
    box.querySelector('.fwf-mount').appendChild(img);
    const go = () => size(box);
    if (img.complete && img.naturalWidth) go(); else img.addEventListener('load', go, { once: true });
    if ('ResizeObserver' in window) new ResizeObserver(go).observe(box);
  }

  // change a framed picture's frame or mount later: FrameworksFrames.set(img, { frame: 'walnut', mount: 'none' })
  function set(img, o) {
    const box = img.closest('.fwf'); if (!box) return;
    if (o.frame) box.dataset.frame = img.dataset.frame = o.frame;
    if (o.mount) box.dataset.mount = img.dataset.mount = o.mount;
    size(box);
  }

  function scan(root) { (root || document).querySelectorAll('img[data-frame]').forEach(frame); }

  window.FrameworksFrames = { frame, scan, set };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => scan());
  else scan();
})();
