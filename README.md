# OwnerFi Seller Advantage Demo

A lightweight teaser site for Gregg Sullivan / OwnerFi that includes:

- a seller financing ROI calculator
- a clear MVP pitch structure
- a buyer onboarding automation overview

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
