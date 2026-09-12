# Dev Stack Builder

Dev Stack Builder is a responsive React application for exploring popular development technologies and creating a personal technology stack. Browse the library, compare each option, and add the tools that fit your next project.

## Features

1. **Explore technologies**: Browse frontend, backend, database, language, and tooling options with descriptions, difficulty levels, ratings, and badges.
2. **Build a personal stack**: Add technologies, prevent duplicates, remove individual items, or clear the entire stack.
3. **Responsive experience**: Use the sticky navigation, mobile menu, responsive card grid, loading state, and toast notifications on any screen size.

## Technologies Used

- React and React DOM
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- React Icons
- React Toastify
- Local JSON data

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Project Structure

```text
src/
├── assets/
│   ├── banner-stack.png
│   └── logo-text.png
├── components/
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── InfoSections.jsx
│   ├── Logo.jsx
│   ├── Navbar.jsx
│   ├── StackSidebar.jsx
│   ├── TechnologyCard.jsx
│   └── TechnologySection.jsx
├── App.jsx
├── index.css
└── main.jsx
public/
└── data/
	└── technologies.json
```

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like UI inside JavaScript. It makes React components easier to read and build.

### 2. What is the difference between props and state?

Props are values passed from a parent to a child. State is data owned by a component that can change and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` creates changeable data in a function component. This project uses it for the technology list, selected stack, loading status, and mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering. It loads `technologies.json` when the app starts and saves the result in state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React recognize each list item and update only the items that changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering shows different UI depending on a condition. `StackSidebar` shows `Your stack is empty` when `stack.length === 0`; otherwise, it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data or functions through props. The child sends information back by calling a function received in its props, such as `onAdd` or `onRemove`.
