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
