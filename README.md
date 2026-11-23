# Fairgrounds Communities LLC — static site

Static duplicate of fairgroundscommunities.com (WordPress / Blocksy) for
Cloudflare Pages. Built by `build.py` — edit the copy there and re-run it,
then redeploy.

- Home, Rental Application (`/services/`), Contact Us (`/contact/`)
- Hidden, unlinked flyer page at `/for-sale/` (editable in `build.py`;
  the original PDF is at `/for-sale/flyer.pdf`)
- No SEO by design: every page is `noindex, nofollow`, `robots.txt`
  disallows all, no sitemap, no analytics
- Forms are mailto to mail@fairgroundscommunities.com (no backend)
- Live domain DNS is NOT switched yet — staging only at
  https://fairgrounds-communities.pages.dev
