# OwnerFi Seller Advantage Demo

A lightweight teaser site for Gregg Sullivan / OwnerFi that includes:

- a seller financing ROI calculator
- a clean, public-facing demo page (calculator + light positioning)

## Local preview

Because this is a static site, you can preview it with any simple web server.

If you have Python:

```powershell
cd C:\Users\blake\Downloads\Workflow\ownerfi-teaser
python -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import that repo into Vercel.
3. Framework preset: `Other`
4. Root directory: `ownerfi-teaser` if the repo contains other files too, otherwise repo root.
5. Build command: leave blank
6. Output directory: leave blank

Because this is a static app, Vercel can deploy it directly without a build step.

## Talk Track (Not Shown On Demo Page)

Use these bullets during your call, but keep them off the public demo.

### MVP Portals

- Public website: explain the process to buyers and sellers with trust-building content, FAQs, and interactive tools.
- Seller portal: list vehicles, define terms (down payment, interest, term length), review buyer applications, track incoming payments.
- Buyer portal: secure document upload (ID, proof of income), application status tracking, payment schedule interface.
- Admin portal: identity verification, approve applications/listings, monitor contracts, dispute resolution.

### "New Buyer Application" Automation Flow

- Trigger (Webhook): buyer submits application + uploads driver's license and proof of income.
- AI document parser: extract name/address/income and compare to application.
- Logic switch:
  - If match: proceed.
  - If mismatch/blurry: auto-email buyer requesting re-upload.
- Database entry: push verified record into admin dashboard DB.
- Admin notification: alert Gregg's team (Slack/email) with a short, review-ready summary.
