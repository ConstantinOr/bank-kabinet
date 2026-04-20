# GreenBin — Bank Cabinet (React prototype)

ESG monitoring cabinet for banks tracking construction contractors.

Stack: React 18 + TypeScript + Vite. No state manager — local `useState` + two small Context providers (`I18nProvider`, `NavProvider`).

## Run

```bash
npm install
npm run dev
```

Build: `npm run build` · preview: `npm run preview`.

## Docker

Prod (nginx on host port `3001`, override with `WEB_PORT`):

```bash
docker compose up -d --build
# http://localhost:3001
```

Dev (hot-reload vite on `5173`, override with `DEV_PORT`):

```bash
docker compose --profile dev up --build
# http://localhost:5173
```

Standalone build:

```bash
docker build -t bank-cabinet .
docker run --rm -p 3001:80 bank-cabinet
```

## i18n

UA / EN. Default is UA, persisted in `localStorage` (key `bankcabinet.lang`). Add languages in `src/i18n/` and extend `src/config.ts`.
