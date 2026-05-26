# Vietnamese and Japanese Shopping Culture

A static website presentation comparing shopping culture in Vietnam and Japan.

## Project Structure

- `index.html`: main entry page (GitHub Pages ready)
- `assets/css/style.css`: styles
- `assets/js/script.js`: interaction logic (slider, theme toggle)
- `assets/images/`: image assets used by the page

## Run Locally

1. Open `index.html` directly in a browser, or
2. Use a local static server (recommended):
   - VS Code Live Server, or
   - Run:
     - `python -m http.server 8000 --bind 127.0.0.1`
     - Open `http://127.0.0.1:8000/index.html`

### Common Local Issue

- If the terminal shows `http://[::]:8000/` and your browser returns `ERR_ADDRESS_INVALID`, use the IPv4 bind command above and open `127.0.0.1` explicitly.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. Go to `Settings` -> `Pages`.
3. In **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main` (or `master`) and folder `/ (root)`
4. Save and wait for deployment.

## Notes

- This project now has a single source of truth: `index.html`.
- Duplicate pages/scripts/styles and unused images were removed for a cleaner codebase.
