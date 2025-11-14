# Figma MCP Demo - Frontend

A React 19 + Vite + Tailwind CSS application featuring a login component generated from Figma designs with local SVG assets.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (usually `http://localhost:5173`)

## Project Structure

```
frontend/
├── src/
│   ├── assets/
│   │   └── icons/              # SVG icons from Figma
│   │       ├── chat-bubble.svg
│   │       ├── user.svg
│   │       └── lock.svg
│   ├── components/
│   │   └── LoginFrame.jsx      # Login component
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles with Tailwind
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## Features

- **React 19** with modern hooks
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Local SVG assets** - All vectors from Figma stored in `src/assets/icons/`
- **Functional input fields** - Username and password inputs with proper types
- Component generated from Figma MCP with preserved design tokens

## Component Details

The LoginFrame component (`src/components/LoginFrame.jsx`) includes:
- Blue background (#2148c0)
- Chat bubble icon (120x120px)
- Username input field with user icon
- Password input field with lock icon
- White login button with shadow
- "Forgot password?" link
- Montserrat font family (Light, Medium, SemiBold)

## Assets

All SVG icons are stored locally in `src/assets/icons/`:
- `chat-bubble.svg` - Chat icon at the top
- `user.svg` - User profile icon for username field
- `lock.svg` - Padlock icon for password field

These assets were fetched from Figma MCP and are imported directly into the component, eliminating the need for external requests.

## Build

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```
