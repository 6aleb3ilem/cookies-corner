# Deploying to Cloudflare (cookiescorners.com)

The site is a fully static Next.js export. `npm run build` produces an
`out/` directory (~4 MB) that Cloudflare serves directly as static
assets via Workers (or Pages — both work).

A `wrangler.jsonc` at the repo root declares this is an assets-only
project pointed at `./out`, so Cloudflare will NOT try to wrap it with
OpenNext / Next-on-Workers.

## Path A: Cloudflare Workers Builds (what the dashboard uses now)

1. **Cloudflare dashboard → Workers & Pages → Create → Import a repository**
   and pick `6aleb3ilem/cookies-corner`.
2. **Build configuration:**
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy` (default is fine)
   - Root directory: leave blank
3. **Variables and Secrets:** add `NODE_VERSION=20`.
4. **Save and Deploy.**

The `wrangler.jsonc` file in the repo tells Wrangler this is a static
assets project, so the deploy step will just upload `out/`. First deploy
takes ~1 min and gives you a URL like
`https://cookies-corner.<your-subdomain>.workers.dev`.

## Path B: Classic Cloudflare Pages (also fine)

1. **Workers & Pages → Create → Pages → Connect to Git** → pick the
   repo, branch `main`.
2. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Env var: `NODE_VERSION=20`
3. Save and Deploy. URL will be `https://cookies-corner.pages.dev`.

## Custom domain

Once deployed (either path):

1. Project → **Custom domains → Set up a custom domain**.
2. Add `cookiescorners.com` and `www.cookiescorners.com`.
3. Cloudflare creates the DNS records automatically since the domain is
   in your account. SSL cert issues in ~1 min.

## Local manual deploy (no GitHub connection)

```bash
npm install
npm run build
npx wrangler deploy        # uses wrangler.jsonc → uploads out/
```

First run will open a browser to log into your Cloudflare account.

## Local preview

```bash
npm run build
npx serve out              # any static server works
```

## Notes

- Image optimization is off (`images.unoptimized: true`) — required for
  static export. Photos were already pre-converted to WebP at ~50–80 KB.
- `trailingSlash: true` is set so every page is its own folder
  (`/shop/index.html`); combined with `html_handling: auto-trailing-slash`
  in `wrangler.jsonc`, both `/shop` and `/shop/` resolve correctly.
- The 404 page is auto-served from `out/404.html`.

