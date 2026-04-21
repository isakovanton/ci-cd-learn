# Frontend CI/CD Practice

Учебный проект для практики CI/CD на фронтенде: React, Vite, TypeScript, Vitest и GitHub Actions.

## Local Commands

```bash
npm ci
npm run lint
npm run test
npm run build
npm run dev
```

## CI Pipeline

Workflow `.github/workflows/ci.yml` запускается на pull request и push в `main`.

Он выполняет:

- установку зависимостей через `npm ci`;
- lint-проверку;
- unit-тесты;
- production build;
- загрузку `dist` как artifact.

## CD Pipeline

Deploy job запускается только после успешного CI на `push` в `main`.

Он:

- собирает приложение;
- загружает `dist` как GitHub Pages artifact;
- публикует сайт через GitHub Pages.

В настройках GitHub-репозитория нужно выбрать Pages source: `GitHub Actions`.
