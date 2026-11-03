SOLAR SYSTEM AR — SCIENCE EXPO EDITION
======================================
This ZIP includes:
- index.html: 3D preview and Android WebXR tabletop AR (retains existing features)
- marker.html: alternate AR.js printed-Hiro-marker tracking (Android and compatible iPhone browsers)
- print-marker.html: printable official Hiro marker from AR.js project

HOW TO HOST
Upload ALL THREE .html files to the ROOT of your public GitHub Pages repository.
Do not upload the ZIP as one file. The website must use HTTPS.
Your home page will be https://USERNAME.github.io/REPOSITORY/
Your marker page will be https://USERNAME.github.io/REPOSITORY/marker.html
Your print page will be https://USERNAME.github.io/REPOSITORY/print-marker.html

EXHIBITION SETUP
1. Open print-marker.html on a computer with internet access and print the marker.
2. Tape the marker flat to a fixed position on a matte table.
3. On Android Chrome or compatible iPhone Safari, open marker.html, grant camera permission.
4. Point at the marker. Sun and eight planets appear above it, with Earth's Moon and Saturn's rings.
5. Return later, open the same link and point at the SAME marker. The model is aligned to the marker again.
6. Use + / - for size, and Start orbits to animate. Settings are remembered on the same browser.
7. If marker tracking is poor, add a small desk/USB light and keep the marker clean and flat.
8. index.html still supports the previous Android tabletop AR and a non-AR 3D preview.

IMPORTANT HONEST LIMITATIONS
- Marker AR does NOT persist an invisible world anchor across sessions. The physical paper marker is the location reference; it must be visible for tracking. If removed/moved, the model follows its new position.
- No camera AR can be guaranteed in darkness or on every device. Marker tracking needs enough light and camera focus to recognize the black/white image.
- WebXR hit-test anchors in the other mode are session-scoped, not permanent location memory.
- 'INSTANT FLOATING DEMO' does not attach to the physical table.
- This is a browser-based proof of concept. HTML and JavaScript syntax were checked; real-device AR needs testing before the exhibition.
- Three.js, A-Frame, AR.js and the official marker image are fetched from public CDN/GitHub URLs; internet is required unless self-hosted.
