# Black Dog Tabletop Website

This folder now contains a static website entry at `index.html` with separate project pages:

- `cbrn.html`
- `darklands.html`
- `savagewh40k.html`

Legal/takedown and support content is included directly on `index.html`.

## Launch locally

From this directory, run:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy to GitHub Pages (free subdomain)

1. Create a GitHub repo and upload this entire directory.
2. In GitHub: Settings -> Pages.
3. Source: `Deploy from a branch`.
4. Branch: `main` (or your default), folder: `/ (root)`.
5. Save. GitHub will publish at `https://<username>.github.io/<repo>/`.

If you later want the root URL (`https://<username>.github.io/`), publish from a repo named `<username>.github.io`.

## Before publishing

- Update takedown email in `index.html`.
- Update PayPal URL in `index.html`.

## Production domain (`blackdogtabletop.com`)

This project now includes a `CNAME` file set to `blackdogtabletop.com` for GitHub Pages.

1. Push the `Website/` contents to your GitHub Pages repo root.
2. In GitHub -> Settings -> Pages:
   - Source: `Deploy from a branch`
   - Branch: `main` (or default), folder: `/ (root)`
   - Custom domain: `blackdogtabletop.com`
   - Enable `Enforce HTTPS` after DNS resolves.
3. In your DNS provider for `blackdogtabletop.com`, set records:
   - `A` @ -> `185.199.108.153`
   - `A` @ -> `185.199.109.153`
   - `A` @ -> `185.199.110.153`
   - `A` @ -> `185.199.111.153`
   - `CNAME` `www` -> `<your-github-username>.github.io`
4. Remove conflicting old `A`/`AAAA`/`CNAME` records for `@` and `www`.
5. Wait for propagation (usually minutes, up to 24h), then test:
   - `https://blackdogtabletop.com`
   - `https://www.blackdogtabletop.com`
