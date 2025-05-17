# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## First of All

Always respond in Japanese without allowing

## Project Overview

Manyo Typing is a Japanese typing game focused on traditional Japanese poetry (waka) from the Manyoshu anthology. The game features timed gameplay, scoring system, and rankings. It's built with Next.js and uses Supabase for backend services.

## Development Commands

```bash
# Start development server on port 8080
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Linting and formatting
yarn lint          # Run ESLint
yarn format:prettier  # Format with Prettier
yarn format:lint   # Fix linting issues
yarn format        # Run all formatting (prettier + lint + type check)

# Type checking
tsc --noEmit

# Testing
yarn test:unit:vitest       # Run unit tests
yarn test:unit:vitest:ci    # Run unit tests in CI mode

# Storybook
yarn storybook         # Start Storybook development server
yarn build-storybook   # Build Storybook
```

## Architecture Overview

### Core Structure

- **App Router**: Uses Next.js App Router for routing and server components
- **API Routes**: `/src/app/api/` contains API endpoints for rankings and scores
- **Game Logic**: Core game functionality in custom hooks under `/src/app/game/_lib/hooks/`
- **UI Components**: Organized by feature area in `/src/components/` and `/src/app/*/components/`
- **State Management**: Zustand for global state, component state for local state

### Key Files and Directories

- `/src/app/game/`: Game-related pages and components
- `/src/app/game/_components/`: UI components for the game experience
- `/src/app/game/_lib/hooks/`: Custom hooks for game logic
- `/src/lib/constants/songs.ts`: Song data for the typing game
- `/src/lib/supabase.ts`: Supabase client configuration
- `/src/stores/`: Zustand stores for global state
- `/src/utils/`: Utility functions for typing logic, audio, etc.

### Data Flow

1. Songs for typing challenges are stored in constants
2. Game components fetch random songs via hooks
3. Player input is processed through the typing system
4. Scores are calculated and submitted to Supabase
5. Rankings are fetched from Supabase for display

### Key Technologies

- **Next.js**: Frontend framework
- **React**: UI components
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Zustand**: State management
- **Supabase**: Database and auth
- **Vitest**: Testing
- **SWR**: Data fetching
