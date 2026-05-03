# Deploying to Cloudflare Pages (cookiescorners.com)

The site is configured as a fully static Next.js export. `npm run build`
produces an `out/` directory (~4 MB) you can host on any static host.
Cloudflare Pages is the right pick because the domain is already in
Cloudflare.

## One-time setup (5 minutes, all in the Cloudflare dashboard)

1. Go to **Cloudflare → Workers & Pages → Create → Pages → Connect to Git**.
2. Pick the GitHub repo `6aleb3ilem/cookies-corner` and the branch
   `claude/build-cookies-corner-site-5Crc9` (or `main` once you merge).
3. Set the build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** `20` (set env var `NODE_VERSION=20`)
4. Click **Save and Deploy**. First deploy takes ~1 min.

## Attach the domain

1. In your new Pages project → **Custom domains → Set up a custom domain**.
2. Add `cookiescorners.com` and `www.cookiescorners.com`.
3. Cloudflare auto-creates the DNS records since the domain is already in
   your account. Wait ~1 min for the cert to issue.

That's it — every git push to the connected branch triggers a new deploy.

## Manual deploy (alternative, no GitHub connection)

If you prefer to push the built site directly:

```bash
npm install
npm run build
npx wrangler pages deploy out --project-name=cookies-corner
```

You'll be prompted to log in to Cloudflare on first run.

## Local preview of the production build

```bash
npm run build
npx serve out   # or any static server
```

## Notes

- Image optimization is off (`images.unoptimized: true`) because static
  exports can't run a server. All photos were pre-converted to WebP at
  ~50–80 KB each, so this is fine.
- `trailingSlash: true` is enabled so every page has its own folder
  (`/shop/index.html`) — Cloudflare Pages serves these without redirects.
- All routes (`/`, `/shop`, `/gift-boxes`, `/about`) are pre-rendered HTML.
