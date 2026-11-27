# Kinetica Commerce Website — Deployment Guide

This is a fully custom-coded, 5-page static site (no frameworks, no build step). It costs **$0** to run beyond the domain you've already bought — no Squarespace website subscription, no monthly hosting fee.

## What's in this folder

```
index.html          Home
services.html        Services
about.html           About / Team
case-studies.html    Case Studies / Portfolio
contact.html         Contact
css/style.css        All styling (colors, type, layout)
js/main.js           Mobile nav, scroll reveal, contact form handling
```

## 1. Preview it locally

Just double-click `index.html` — it opens in your browser and works exactly as it will live. No server needed.

## 2. Put it online for free

Pick one. All three are reputable, all are free for a site this size, and all let you connect your own domain at no extra cost.

**Netlify (easiest — recommended)**
1. Go to app.netlify.com and sign up (free).
2. Drag the whole `kinetica-site` folder onto the dashboard where it says "Drag and drop your site here."
3. That's it — Netlify gives you a live URL in seconds. You'll point your domain at it in step 3 below.

**Cloudflare Pages**
1. Go to pages.cloudflare.com and sign up.
2. Create a project → "Upload assets" → upload this folder.
3. Cloudflare gives you a live URL immediately.

**GitHub Pages**
1. Create a free GitHub repository and upload these files.
2. In the repo's Settings → Pages, set the source to your main branch.
3. GitHub gives you a live URL within a few minutes.

## 3. Point kineticacommerce.com at it

Your domain is registered through Squarespace Domains. You don't need a Squarespace website plan to use it — you just need to edit its DNS records, which is free and included with the domain.

1. Log into Squarespace → Domains → kineticacommerce.com → DNS Settings.
2. Delete any existing A or CNAME records pointing to Squarespace's own builder.
3. Add the records your host gives you:
   - **Netlify**: add Netlify's provided A record (or use Netlify's "Add custom domain" flow, which tells you exactly what to add), plus a CNAME for `www`.
   - **Cloudflare Pages**: add the CNAME Cloudflare gives you for your custom domain.
   - **GitHub Pages**: add the four GitHub A records, plus a CNAME for `www` pointing to `yourusername.github.io`.
4. DNS changes can take anywhere from a few minutes to a few hours to go live.

Each host's dashboard walks you through the exact records when you click "Add custom domain" — you won't need to guess.

## 4. Updating content later

Everything is plain HTML — open any `.html` file in a text editor and edit the text directly. There's no CMS, which is the trade-off for $0 hosting. If that becomes painful, you have two options later: ask me to make edits, or migrate to a paid builder with a visual editor.

### Swapping in real case studies
Open `case-studies.html` and find the HTML comment that says `CASE STUDY PLACEHOLDERS`. Each `.cs-card` block below it is a placeholder — replace the title and description with a real client name, challenge, and outcome once you have permission to publish it. Copy the existing card structure for additional case studies.

### Upgrading the contact form
Right now, submitting the contact form opens a pre-filled email in the visitor's own email app (zero cost, zero setup, works everywhere). If you'd rather have submissions land silently in your inbox without opening the visitor's mail app, free options like Web3Forms or Formspree (both have permanent free tiers, no card required) can do this with about 10 minutes of setup — happy to wire that up if you want it.

## Notes on assumptions made
- The cream background tone (`#F3EEE2`) was chosen this session to fit the existing ink/gold palette — no exact value existed in prior brand materials, so adjust the `--cream` variable in `css/style.css` if you have a preferred shade.
- The footer copyright year (2026) and the About page founder portrait are placeholders — swap in a real photo when ready (just replace the SVG block inside `.founder-portrait` with an `<img>` tag).
