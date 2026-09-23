# Kritika Portfolio — Expanded Version

This version keeps the existing visual design and expands the feature set.

## New features

- Home intro remains the same.
- Intro is shown once per browser session.
- Home hero now has a static profile placeholder.
- Slow ambient motion happens around the profile; the profile itself does not move.
- Optional real profile photo: place `profile.jpg` in `public/`.
- Optional logo: place `logo.png` in `public/`.
- Home work section is a continuously moving, draggable carousel.
- Drag the carousel left or right to control it manually.
- Autoplay pauses while hovering/dragging and resumes afterward.
- `VIEW MORE` opens `/work`.
- `WORK` in the floating navigation opens `/work`.
- Each project opens `/work/:projectId`.
- Project pages have an editorial/Behance-style showcase.
- `GET IN TOUCH` and `LET'S TALK` open `/contact`.
- Contact BACK goes directly to the landing page and skips the intro.
- Work BACK goes directly to the landing page and skips the intro.
- Navbar has a subtle entrance animation.
- Existing homepage styling, typography and visual language are preserved.

## Run

```bash
npm install
npm run dev
```

## Contact form

The contact form uses EmailJS when these variables are present in `.env`:

```env
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

If those variables are not configured, the form falls back to opening a pre-filled email to:

`rokkakritika@gmail.com`

Create `.env` from `.env.example` if you want EmailJS delivery.

## Images

### Profile

Put your real portrait here:

```text
public/profile.jpg
```

The profile frame stays completely static. Only the surrounding labels, dots and orbit lines move slowly.

### Logo

Put your logo here:

```text
public/logo.png
```

Until a logo file exists, the navigation safely falls back to the existing KR mark, so the site does not break.

## Important

Do not put `node_modules` into the project ZIP you submit or share. Run `npm install` on the target machine.
