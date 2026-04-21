# Static assets

Vite serves every file in this directory at the site root. Drop image
files here and reference them with absolute paths in components
(`<img src="/logo.jpg" />`, `<img src="/images/hero.jpg" />`, etc).

## Files this site expects

Add these to make the logo and hero photos appear. Until a file is
present the component falls back to a placeholder.

| Path                            | Used by                          |
| ------------------------------- | -------------------------------- |
| `public/logo.jpg` (or `.png`)   | Navigation header + footer       |
| `public/favicon.ico`            | Browser tab icon                 |
| `public/images/hero.jpg`        | Home page hero                   |
| `public/images/about.jpg`       | Our Story — founding section     |
| `public/images/director.jpg`    | Our Story — director letter      |
| `public/images/team-action.jpg` | Donate page hero image           |
| `public/images/player-1.jpg`    | The Team — Ruth Banda            |
| `public/images/player-2.jpg`    | The Team — Mary Zulu             |
| `public/images/player-3.jpg`    | The Team — Chipo Lungu           |
| `public/images/coach.jpg`       | The Team — coach spotlight       |

Keep files under ~500 KB where possible; 1600 px on the long edge is
plenty for the hero, 800 px for portraits.
