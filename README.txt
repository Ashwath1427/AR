SOLAR SYSTEM WEB AR — IPHONE SAFARI + ANDROID CHROME

Files to upload to the ROOT of your GitHub Pages repository:
  index.html
  marker.html
  print-marker.html

On iPhone:
  1. Open the published HTTPS GitHub Pages URL in Safari, not inside WhatsApp/Instagram.
  2. Select HIRO marker mode (or open marker.html directly).
  3. Tap START CAMERA AR and allow camera access.
  4. Point the rear camera at a printed HIRO marker (including the full black border).
  5. Drag one finger to move relative to the marker; pinch/twist with two fingers.
  6. Use the lock button to prevent accidental layout edits.

On Android:
  Use the same marker mode in Chrome; Android WebXR table mode remains in index.html.

This is marker-relative AR, NOT persistent world anchoring. For reliable placement,
keep the marker in view and taped to the same place. Camera tracking requires
visible contrast and at least some ambient light. The saved position, scale and
rotation are relative to the marker, stored on that same browser.

If Safari has a black camera view, use Resume Camera or Restart. Check Safari
website Camera permissions and that no other app is using the camera.

A-Frame 1.6.0 + AR.js 3.4.7 pinned for compatible marker tracking.
Browser AR still requires testing on real phones.
