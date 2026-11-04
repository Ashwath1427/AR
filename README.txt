SOLAR SYSTEM SCIENCE EXPO — INSTALLATION AND USE

Files in this package:
index.html        New interactive 3D explorer and home page
explore.js        Interactive 3D scene
planets.js        Planet information and accessible selector
planets.css       Planet information panel styles
marker.html       Shared HIRO and manual camera experience
print-marker.html Printable HIRO marker page from the repository
table-ar.html     Previous repository home page, retained for its Android tabletop AR

UPDATING GITHUB PAGES
1. Unzip the package. Open https://github.com/Ashwath1427/AR
2. Choose Add file > Upload files. Upload all seven website files listed above to the repository root (not into an extra folder). Allow existing files with the same names to be replaced. Do not remove other repository files.
3. Commit the changes to the branch used by GitHub Pages. Wait for the Pages deployment to finish.
4. Open https://ashwath1427.github.io/AR/ for the new explorer. On iPhone Safari or Android Chrome, open the Camera AR button, or https://ashwath1427.github.io/AR/marker.html
5. If an old version remains visible, reload or try a new query string such as ?v=expo-3d-2026. Test both phones before the exhibition.

HOW TO USE
3D explorer: Drag to orbit, right-drag to pan, and scroll to zoom. On touch screens, drag and pinch. Click/tap a planet or choose it in the Explore a world menu. Planet selection pauses orbit animation and focuses the view; use Start orbits to resume. Details also appear when the virtual camera moves very close to a planet. Use + and − to adjust model size and Reset view to return to the initial position. Planet sizes, spacing, and speeds are illustrative, not to scale.

Camera AR: Open on HTTPS, grant camera permission, and choose Scan HIRO or Place Without HIRO. For HIRO, print the marker at high contrast and keep it flat, well lit, and visible. In manual mode, tap the camera view to place the model. Tap planets or use the Explore a world menu for details; use controls and gestures to adjust the model. Manual mode is a screen-relative overlay, not a physical world anchor. HIRO tracking requires seeing the marker; a brief visual hold after losing it is not persistent tracking. The original Android tabletop mode is available from the explorer.

REQUIREMENTS AND TESTING
Internet access is needed to load Three.js, A-Frame, AR.js, and the marker image. 3D needs a browser with WebGL; camera mode needs a camera, permission, and HTTPS (localhost also works for development). Compatibility and tracking performance depend on device and browser. No real-world distance measurement or proximity claim is made for the screen overlay. This build was checked in a desktop browser and at a phone-sized viewport, but has not been tested on physical iPhone or Android cameras. Test both modes and the printed marker before the event.
