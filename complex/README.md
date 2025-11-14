# Simple Page - React 19 + Vite + Tailwind Component

A fully componentized React implementation of the "Simple Page" design from Figma, built with React 19, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
complex/
├── src/
│   ├── assets/
│   │   └── icons/              # 11 SVG icons extracted from Figma
│   ├── components/
│   │   ├── SimplePage.tsx              # Main parent component
│   │   ├── StatusBar.tsx               # Top status bar with time, battery, wifi
│   │   ├── TitleBar.tsx                # Title bar with page title and right accessory
│   │   ├── Menu.tsx                    # Bottom navigation menu
│   │   ├── EmptyNotificationState.tsx  # Empty state content
│   │   ├── FriendSuggestionButton.tsx  # Friend suggestion CTA
│   │   └── index.ts                    # Component exports
│   ├── App.tsx                 # App entry component
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles with Tailwind directives
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Components

### SimplePage
The main parent component that orchestrates all child components.

**Features:**
- Manages active tab state
- Handles button click events
- 375x812px mobile layout (iPhone size)
- Fully responsive design

**Usage:**
```tsx
import { SimplePage } from './components';

function App() {
  return <SimplePage />;
}
```

### StatusBar
Displays the mobile status bar with time, battery, WiFi, and signal strength indicators.

**Props:** None

**Features:**
- iOS-style status indicators
- Static time display (8:35)
- Battery, WiFi, and cellular signal icons

### TitleBar
Shows the page title with an optional right accessory button.

**Props:**
- `title: string` - The page title
- `onRightAccessoryClick?: () => void` - Callback for right button

**Features:**
- Centered title text
- Right-side accessory button placeholder
- Clean, minimalist design

### Menu
Bottom navigation menu with 4 tabs: Timeline, MyPage, Friends, and Map.

**Props:**
- `activeTab?: "mypage" | "map" | "friends" | "timeline"` - Currently active tab (default: "timeline")
- `onTabChange?: (tab: MenuTab) => void` - Callback when tab changes

**Features:**
- Interactive buttons with hover states
- Active tab highlighting (orange color)
- Icon state changes based on selection
- Full accessibility support

### EmptyNotificationState
Displays the empty state for the timeline with icon and explanation text.

**Props:** None

**Features:**
- Mascot icon display
- Multilingual Japanese text
- Centered layout

### FriendSuggestionButton
Call-to-action button to become friends with the official account.

**Props:**
- `onClick?: () => void` - Callback when button is clicked

**Features:**
- Prominent red button
- Hover state with color transition
- Accessible button with proper semantics

## 🖼️ Assets

All SVG icons are stored in `src/assets/icons/` and include:
- **Status bar icons:** battery, wifi
- **Navigation icons:** timeline (active/inactive), map vectors, friends icon, mypage mascot
- **Content icons:** large mog mascot for empty state

Total: **11 SVG files** extracted from Figma

## 🎨 Styling

The project uses Tailwind CSS with custom colors from the Figma design:

### Color Palette
- **Primary Orange:** `#F48522` - Active states, highlights
- **Secondary Red:** `#EC1C24` - CTA buttons
- **Text Default:** `#333333` - Primary text
- **Text Gray:** `#757575` - Secondary text
- **Gray:** `#999999` - Inactive states
- **Background Gray:** `#F9F9F9` - Page background
- **White:** `#FFFFFF` - Components background

### Typography
- **Noto Sans JP** - Japanese text
- **SF Pro Text** - English text and system font

## 🔘 Interactive Elements

All inferred buttons from the design have been converted to actual `<button>` elements with:
- Proper `onClick` handlers
- Accessible ARIA labels
- Hover states and transitions
- Cursor pointer
- Keyboard navigation support

## ⚙️ Customization

To customize the behavior:

### 1. Tab Navigation
Update the `handleTabChange` function in `SimplePage.tsx`:
```tsx
const handleTabChange = (tab: MenuTab) => {
  setActiveTab(tab);
  console.log('Tab changed to:', tab);
  // Add your navigation logic here
};
```

### 2. Friend Request
Update the `handleFriendRequest` function in `SimplePage.tsx`:
```tsx
const handleFriendRequest = () => {
  console.log('Friend request clicked');
  // Add your API call here
};
```

### 3. Right Accessory Button
Update the `handleRightAccessory` function in `SimplePage.tsx`:
```tsx
const handleRightAccessory = () => {
  console.log('Right accessory clicked');
  // Add your action here
};
```

## 🎯 Design Fidelity

The implementation maintains pixel-perfect fidelity to the Figma design with:
- ✅ Exact positioning using absolute/relative layouts
- ✅ Original typography (Noto Sans JP, SF Pro Text)
- ✅ Precise color values from design system
- ✅ Matching spacing and dimensions
- ✅ Proper component hierarchy
- ✅ Accessible and semantic HTML

## 🛠️ Tech Stack

- **React 19** - Latest React with new features
- **Vite 6** - Fast build tool and dev server
- **TypeScript 5.7** - Type safety
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

## 📝 Development Notes

- All components are TypeScript with proper type definitions
- Follows React 19 best practices
- Clean component architecture with single responsibility
- Reusable and maintainable code
- Easy to extend and customize

## 🐛 Known Considerations

- Fonts may render differently depending on system availability
- SF Pro Text is a system font primarily available on Apple devices
- Design is optimized for 375px width (iPhone size)
- All assets are loaded from the local assets folder

## 📄 License

This project was generated from Figma designs using Figma MCP.
