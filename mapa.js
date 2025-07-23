document.addEventListener("DOMContentLoaded", () => {
    const hotspots = document.querySelectorAll('.hotspot');
const tooltip = document.getElementById('tooltip');

hotspots.forEach(hotspot => {
  hotspot.addEventListener('mouseenter', () => {
    const message = hotspot.getAttribute('data-tooltip');
    tooltip.textContent = message;
    tooltip.style.display = 'block';
  });

  hotspot.addEventListener('mousemove', (e) => {
    const offsetX = 15; // Separación respecto al mouse
    const offsetY = 15;
    tooltip.style.left = `${e.pageX + offsetX}px`;
    tooltip.style.top = `${e.pageY + offsetY}px`;
  });

  hotspot.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});

  const cont = document.getElementById("mapaContainer");
  const zoom = document.getElementById("mapaZoom");
  const img  = document.getElementById("mapaBase");

  let scale = 1, panX = 0, panY = 0;
  let dragging = false, startX = 0, startY = 0;

  cont.addEventListener("wheel", e => {
    e.preventDefault();
    // zoom hacia cursor (opcional)
    const prev = scale;
    const rect = cont.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    // ahora bloqueamos el zoom mínimo en 1
scale += e.deltaY < 0 ? 0.1 : -0.1;
scale = Math.min(Math.max(scale, 1), 3);


    // mantengo cursor fijo
    panX -= (mx / prev) * (scale - prev);
    panY -= (my / prev) * (scale - prev);

    clampAndApply();
  });

  cont.addEventListener("mousedown", e => {
    dragging = true;
    startX = e.clientX - panX;
    startY = e.clientY - panY;
    cont.style.cursor = "grabbing";
  });

  cont.addEventListener("mousemove", e => {
    if (!dragging) return;
    panX = e.clientX - startX;
    panY = e.clientY - startY;
    clampAndApply();
  });

  ["mouseup","mouseleave"].forEach(evt =>
    cont.addEventListener(evt, () => {
      dragging = false;
      cont.style.cursor = "grab";
    })
  );

  function clampAndApply() {
  // 1) Medimos solo ANCHO y ALTO base de la imagen (escala = 1)
  const baseW = img.clientWidth;
  const baseH = img.clientHeight;

  // 2) Escalamos esos valores
  const iw = baseW * scale;
  const ih = baseH * scale;

  // 3) Medimos el contenedor
  const cw = cont.clientWidth;
  const ch = cont.clientHeight;

  // 4) Calculamos panX y panY nuevos según situación
  let newPanX, newPanY;

  if (iw <= cw) {
    // Imagen más chica: centramos
    newPanX = (cw - iw) / 2;
  } else {
    // Imagen más ancha: clampeamos entre [cw - iw, 0]
    newPanX = Math.min(Math.max(panX, cw - iw), 0);
  }

  if (ih <= ch) {
    newPanY = (ch - ih) / 2;
  } else {
    newPanY = Math.min(Math.max(panY, ch - ih), 0);
  }

  // 5) Guardamos y aplicamos
  panX = newPanX;
  panY = newPanY;
  zoom.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
}
});