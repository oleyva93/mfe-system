# mfe-system

This project was created with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack), a modern TypeScript stack that combines React Native, Expo, and more.

## Features

- **TypeScript** - For type safety and improved developer experience
- **React Native** - Build mobile apps using React
- **Expo** - Tools for React Native development
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **Turborepo** - Optimized monorepo build system
- **Biome** - Linting and formatting

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Use the Expo Go app to run the mobile application.

## MVP spec (GitHub Pages)

The Phase 1 specification is published at:

**https://oleyva93.github.io/mfe-system/**

Source files: `docs/index.html` (canonical for Pages) or `mvp-fase-1-especificacion.html` at the repo root. Pushes to `main` that touch either file deploy automatically via `.github/workflows/pages.yml`.

If the site does not load the first time, enable **GitHub Pages** in the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Pull request previews (Expo Go)

Every pull request publishes an EAS Update and adds a comment with a QR code you can scan in **Expo Go** (SDK 57).

1. Create an access token at [expo.dev/settings/access-tokens](https://expo.dev/settings/access-tokens).
2. Add it to the GitHub repo as **`EXPO_TOKEN`** under **Settings → Secrets and variables → Actions**.
3. Open or update a pull request — the workflow `.github/workflows/preview.yml` runs automatically.

Docs: [EAS Update GitHub Actions](https://docs.expo.dev/eas-update/github-actions/)

### Sharing previews with other people

Since [May 2026](https://expo.dev/changelog/expo-go-loading-changes-may-2026), Expo Go only loads EAS Updates from projects you **own** or belong to as a **collaborator**. If someone else scans the QR and gets a **403**, invite them to the Expo project:

1. Open [expo.dev/accounts/oleyva93/projects/mfe-system](https://expo.dev/accounts/oleyva93/projects/mfe-system).
2. Go to **Project settings → Access** (or **Collaborators**).
3. Invite their Expo account email.
4. They sign in to **Expo Go** with that same account, then scan the QR again.

Without an invite, only your Expo account can open `@oleyva93/mfe-system` previews in Expo Go. For wider distribution (clients, QA without Expo accounts), use a **development build** with internal distribution instead.

## Git Hooks and Formatting

- Run checks: `npm run check`

## Project Structure

```
mfe-system/
├── apps/
│   ├── native/      # Mobile application (React Native, Expo)
```

## Available Scripts

- `npm run dev`: Start all applications in development mode
- `npm run build`: Build all applications
- `npm run check-types`: Check TypeScript types across all apps
- `npm run dev:native`: Start the React Native/Expo development server
- `npm run check`: Run Biome formatting and linting
