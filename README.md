## 📂 Project Structure

```text
liverpool-react/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── liverpool-fc-4.svg
├── src/
│   ├── Assets/
│   │   └── site design/
│   │       ├── code-web.html
│   │       ├── code.html
│   │       ├── DESIGN-web.md
│   │       ├── DESIGN.md
│   │       ├── screen-web.png
│   │       └── screen.png
│   ├── Components/
│   │   ├── About/
│   │   │   └── About.tsx
│   │   ├── FavoritePlayers/
│   │   │   ├── FavoritePlayer.tsx
│   │   │   └── FavoritePlayers.tsx
│   │   ├── Nav/
│   │   │   └── Nav.tsx
│   │   └── Player/
│   │       ├── Player.tsx
│   │       └── Players.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

# Liverpool FC Squad & Favorites Dashboard

A practice dashboard built with **React 19**, **TypeScript**, and **Tailwind CSS v4** that fetches Liverpool FC player data from TheSportsDB API, allows dynamic squad browsing, and manages a synchronized favorites shortlist with bidirectional controls and toast alerts.

---

## 📌 Project Overview & Purpose

This is my first hands-on practice project using React. After completing fundamental modules covering JSX, component architecture, state management, and asynchronous data fetching, the goal was to step away from isolated code exercises and build a complete, interactive application from scratch.

While I am still learning industry best practices and larger architectural patterns, this project serves as a practical application of the concepts I have covered so far—testing component interactions, breaking down layouts, and managing state across multiple levels.

---

## ✨ Features

- **Live Squad Data:** Fetches active Liverpool FC player rosters asynchronously from TheSportsDB API.
- **Declarative Async Handling:** Utilizes React 19's native `use()` hook inside a `<Suspense>` boundary for clean promise resolution without manual loading boilerplate.
- **Lifting State Up:** Centralized state in the root component (`App.tsx`) ensures player cards, the favorites board, and counter badges remain in sync without state duplication.
- **Bidirectional Favorite Controls:** Add or remove players from either the primary squad list or directly from the favorites showcase.
- **Real-Time Toast Feedback:** Displays non-blocking success and removal notifications using `react-toastify`.
- **Dynamic Text Clamping:** Expandable player biographies ("Read more / Read less") with layout-safe styling.
- **Themed UI & Typography:** Custom dark palette with glassmorphism effects, custom fonts, and responsive grid/flex layouts.

---

## 🧠 Concepts Implemented (Curriculum Alignment)

### React Core — Components, JSX, Props & Rendering
- **Component Decomposition:** Separated responsibilities across modular components (`Nav`, `Players`, `Player`, `FavoritePlayers`, `FavoritePlayer`, and `About`).
- **Type-Safe Props:** Defined strict TypeScript interfaces for component props and external API data models (`PlayerInfo`).
- **Dynamic Content & Rendering Lists:** Extracted and styled split names dynamically, using JavaScript's `.filter()` and `.map()` with unique keys (`idPlayer`).
- **Conditional Rendering:** Used ternary expressions to toggle card button states (`LIKE` / `DISLIKE`), bio expansions, and empty shortlist placeholders.

### State, Events, APIs & React Suspense
- **Single Source of Truth:** Lifted the `favoritePlayers` state array to `App.tsx` so child components receive predictable props and handler callbacks.
- **Immutable State Updates:** Handled additions and removals immutably using `.filter()` and array spread operations.
- **React 19 `use()` + Suspense:** Passed a cached module-level fetch promise into `Players` to avoid fetch recreation during re-renders.
- **Event Callbacks:** Managed custom user interactions (toggle favorites, expand descriptions) across child cards.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/ri`, `react-icons/fa`)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- **API:** [TheSportsDB API](https://www.thesportsdb.com/)

---
