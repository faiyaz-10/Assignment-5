# 🧱 Dev Stack Builder

A modern, responsive React website where users can explore developer technologies and build their own personalized tech stack.

## ✨ Features

- 📚 **Technology Library** — 12 technologies loaded from a local JSON file with category, difficulty, rating, badge, description, and icon.
- 🧰 **Stack Builder** — Add technologies to your personal stack, prevent duplicates, remove individual items, or clear the whole stack.
- 📱 **Responsive UI** — Sticky desktop/mobile navbar, responsive technology cards, sidebar stack panel, and mobile-friendly layout.
- 🔔 **Toast Feedback** — React-Toastify messages for adding, duplicate attempts, removing, and clearing items.
- 🎨 **Shared Gradient Theme** — Orange → pink → violet gradient is defined once and reused across the brand, hero highlight, and primary buttons.

## 🛠️ Technology Used

- React.js
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- React-Toastify
- React Icons
- JSON

## ▶️ Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## 📂 Project Structure

```text
src/
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
├── data/
│   └── technologies.json
└── hero-illustration.svg
```

## 📘 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like markup inside JavaScript. React uses it to describe what the UI should look like in a clear and readable way.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` creates state variables in a functional component. I used it for the technology list, selected stack, loading status, mobile menu state, and category filter.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after React renders. I used it to fetch the local JSON file when the app loads, then store the technology data in state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item between renders. This lets React update lists efficiently and correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, the stack shows an empty-state message when `stack.length === 0`; otherwise it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent passes data and functions through props. The child calls the function it receives from the parent to send an event or selected data back.

## 📌 Assignment Checklist

- [x] Sticky responsive navbar
- [x] Mobile hamburger menu
- [x] Hero section with gradient heading and buttons
- [x] 12 technology objects in local JSON
- [x] JSON data loaded with `useEffect`
- [x] Loading spinner/message
- [x] Responsive 3/2/1-column technology cards
- [x] Your Stack sidebar
- [x] Duplicate prevention
- [x] Remove one / Remove All
- [x] React-Toastify feedback
- [x] Shared gradient theme
- [x] Footer with social links and link groups
- [x] React interview questions answered
