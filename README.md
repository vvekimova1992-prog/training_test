# Valentina Ekimova | Arctic academic website

A responsive GitHub Pages-ready research portfolio with original Arctic field photographs, prepared from the October 15, 2026 academic CV.

## Pages
- `index.html`: home, research, fieldwork, publications, teaching, outreach, about, contact
- `cv.html`: abbreviated, print-friendly academic CV (excludes telephone number)
- `styles.css`: all styling
- `script.js`: mobile menu, publication filters, enlarged photo dialog
- `assets/*.webp`: user-supplied field photographs optimized for the web, with original EXIF metadata stripped

## Publishing

In the GitHub repository, open **Settings > Pages > Build and deployment**, choose **Deploy from a branch**, select branch `arctic-academic-website`, folder `/ (root)`, then save. Once GitHub Pages is enabled for this branch, the address should be:

https://vvekimova1992-prog.github.io/training_test/

GitHub Pages settings may require action by the repository owner. The branch is not the repository default branch.

## Photo provenance and privacy

All five photos were directly provided by Valentina Ekimova in the conversation. The original EXIF metadata has been removed from the optimized copies. `community-presentation.webp` was cropped so the child in the original image is outside the published frame. Students and other adults remain visible in `field-teaching.webp` and `community-presentation.webp`; secure any necessary consent/usage rights before making this GitHub Pages site public.

The site does not include third-party stock photographs and can be expanded by adding new images to `assets/` and gallery cards to the fieldwork section. Links to journals and publication statuses reflect the October 2026 CV and should be updated as needed.

## Run locally

Open `index.html` in a browser, or start a simple static HTTP server (`python -m http.server 8000`) from this folder. No build tools required. The Google Fonts CDN is optional; system fonts provide a fallback.