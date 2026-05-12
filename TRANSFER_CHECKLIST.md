# Website Transfer Checklist — dryandwashrent.com

Follow these steps in order. Do the domain **last** — once DNS moves, you can't easily fix Google verification problems.

Before you start, collect from the new owner:
- [ ] Their Google account email (for GA + GSC)
- [ ] Their GitHub username (for repo transfer)
- [ ] Their preferred email for form submissions
- [ ] Their registrar account (if transferring the domain)

---

## What you're transferring

| Asset | Where it lives | Identifier |
|---|---|---|
| Domain | Your registrar | `dryandwashrent.com` |
| Source code / hosting | GitHub Pages | `github.com/drewadams85/dryandwashrent` |
| Google Analytics | GA4 | Measurement ID `G-X7EHVWHZM9` |
| Google Search Console | GSC | Property `dryandwashrent.com` |
| Contact form | Formspree | Endpoint in `index.html` `<form action="...">` |

---

## Step 1 — Google Analytics

- [ ] Go to https://analytics.google.com → **Admin** (gear icon, bottom left).
- [ ] Under **Account** column → **Account Access Management** → click **+** → **Add users**.
- [ ] Enter new owner's Google email. Role: **Administrator**. Save.
- [ ] Under **Property** column → **Property Access Management** → add them as **Administrator** here too.
- [ ] Have them log in and confirm they see property `G-X7EHVWHZM9`.
- [ ] After Step 7 is complete, come back and **remove your account** from both Account and Property access.

---

## Step 2 — Google Search Console

- [ ] Go to https://search.google.com/search-console → select the `dryandwashrent.com` property.
- [ ] **Settings** (left sidebar) → **Users and permissions**.
- [ ] Click **Add user** → new owner's Google email → permission **Owner**. Save.
- [ ] Have the new owner **add their own independent verification** (DNS TXT record under their Google account, or upload a verification HTML file to the repo before Step 3). This is critical — otherwise their access breaks when DNS moves.
- [ ] They confirm they can see the property.
- [ ] After Step 7 is complete, come back and **remove yourself** from Users and permissions.

---

## Step 3 — GitHub repository

**Option A — Transfer the repo (recommended):**

- [ ] Go to `github.com/drewadams85/dryandwashrent` → **Settings**.
- [ ] Scroll to **Danger Zone** → **Transfer ownership**.
- [ ] Enter new owner's GitHub username + repo name to confirm.
- [ ] New owner accepts the transfer email.
- [ ] New owner goes to **Settings → Pages**, confirms site is building and custom domain `dryandwashrent.com` is set with **Enforce HTTPS** checked.

**Option B — They create their own copy:**

- [ ] New owner clones the repo and pushes to their own GitHub.
- [ ] They enable GitHub Pages on their copy.
- [ ] They set custom domain to `dryandwashrent.com` in Pages settings.
- [ ] You delete your repo only **after** their copy is serving the site correctly.

---

## Step 4 — Formspree (contact form)

Pick one:

**Option A — Replace the endpoint (simplest):**

- [ ] New owner creates a Formspree account and a new form.
- [ ] In `index.html`, find the `<form action="https://formspree.io/...">` line.
- [ ] Update the URL to their new endpoint.
- [ ] Commit + push. Wait for GitHub Pages to redeploy (~1 min).
- [ ] Submit a test message. Confirm it lands in their inbox.

**Option B — Transfer the existing form** (Formspree paid plans only):

- [ ] Log into https://formspree.io → open the form → **Settings** → **Transfer ownership**.
- [ ] Enter new owner's email. They accept.
- [ ] Test a submission.

---

## Step 5 — Update site content for the new owner

Before transferring the domain, the new owner should review and update:

- [ ] Phone number `(435) 767-7225` — appears in `index.html`, blog posts, structured data.
- [ ] Business name / contact info in `privacy.html`.
- [ ] If they create a fresh GA property, update `G-X7EHVWHZM9` in `index.html` (3 places).
- [ ] OG image (`washerDryer.jpg`) and favicon if rebranding.

These can be done before or after the domain transfer — but easier before, while you can still help.

---

## Step 6 — Domain transfer (do this LAST)

### 6a. At your current registrar

- [ ] Log in. Find `dryandwashrent.com`.
- [ ] **Unlock** the domain (Transfer Lock → off).
- [ ] **Disable WHOIS privacy** temporarily (some registrars require this).
- [ ] Request the **EPP / Auth Code** (also called Transfer Code).
- [ ] Send the code to the new owner **securely** — password manager share or encrypted message. Never plain email.

### 6b. At the new owner's registrar

- [ ] They start an **inbound transfer** for `dryandwashrent.com` using the EPP code.
- [ ] They pay ~1 year of renewal (included in transfer fee).

### 6c. Approve the transfer

- [ ] You'll get a confirmation email from your current registrar — **approve it**.
- [ ] Transfer takes **5–7 days** to complete.
- [ ] During this window the site keeps working as long as nameservers don't change.

### 6d. After transfer completes

New owner verifies DNS at the new registrar still points to GitHub Pages:

- [ ] `A` records for root domain:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- [ ] `CNAME` for `www` → `<their-github-username>.github.io`
- [ ] Visit https://dryandwashrent.com — confirm site loads with valid HTTPS.

---

## Step 7 — Final cleanup (after everything works on their end)

- [ ] Remove yourself from **Google Analytics** (Account + Property).
- [ ] Remove yourself from **Google Search Console**.
- [ ] Remove yourself as a collaborator on the **GitHub repo** (if they used Option B).
- [ ] Cancel any subscriptions tied to your accounts (Formspree paid plan, registrar auto-renew, etc.).
- [ ] Hand over a copy of this checklist + any business records (lead history, etc.).

---

## Rollback notes

- **Before domain transfer is approved**: you can cancel from your registrar — domain stays with you.
- **After domain transfer**: ICANN locks the domain for 60 days; it can't be transferred again during that window. Plan accordingly.
- **GitHub repo transfer**: reversible — the new owner can transfer it back.
- **GA / GSC**: fully reversible — just re-add yourself as Admin/Owner before they remove you.
