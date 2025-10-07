# 📱 Swipeable List App

A beautiful, modern React Native app built with Expo featuring swipeable list items with interactive actions. Built with TypeScript, NativeWind (Tailwind CSS), and following Expo best practices.

## ✨ Features

- 🎨 **Beautiful UI** - Modern card-based design with smooth shadows and gradients
- 👆 **Swipe Gestures** - Swipe left or right to reveal contextual actions
- 🔵 **Send Action** - Swipe right to reveal send button (blue)
- 🟢 **Save Action** - Swipe left to reveal save button (green)
- 🔴 **Delete Action** - Swipe left to reveal delete button (red)
- 📊 **Dynamic Counter** - Real-time item count display in header
- 🎯 **Type-Safe** - Full TypeScript support with strict typing
- 📱 **Responsive** - Adapts to different screen sizes and safe areas
- ⚡ **Performance** - Optimized with React hooks and component extraction

## 🛠️ Tech Stack

- **Framework**: [Expo](https://expo.dev) ~54.0
- **Language**: TypeScript 5.9
- **UI Library**: React Native 0.81
- **Routing**: Expo Router 6.0
- **Styling**: NativeWind 4.2 (Tailwind CSS for React Native)
- **Icons**: Material Icons (@expo/vector-icons)
- **Swipe Library**: react-native-swipe-list-view 3.2
- **Animations**: React Native Reanimated 4.1
- **Gestures**: React Native Gesture Handler 2.28

## 📁 Project Structure

Following [Expo's best practices](https://docs.expo.dev/router/basics/core-concepts):

```
swipeable-list/
├── src/
│   ├── app/                    # Routes (Expo Router)
│   │   ├── _layout.tsx        # Root layout
│   │   └── index.tsx          # Main screen
│   ├── components/            # Reusable UI components
│   │   ├── ListItem.tsx       # Visible list item component
│   │   └── HiddenListItem.tsx # Swipe actions component
│   ├── hooks/                 # Custom React hooks
│   │   └── useListActions.ts  # List state & action handlers
│   ├── constants/             # App constants
│   │   ├── app.constants.tsx  # UI constants (sizes, spacing, colors)
│   │   └── list.constants.ts  # Initial list data
│   └── types/                 # TypeScript type definitions
│       ├── index.ts           # Type exports
│       └── list.types.ts      # List-related types
├── assets/                    # Static assets
│   └── images/                # App icons and images
├── android/                   # Android native files
├── app.json                   # Expo configuration
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac only) or Android Emulator

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd swipeable-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your preferred platform**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser
   - Scan QR code with Expo Go app on your phone

## 📱 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint

## 🎯 How to Use

### Swipe Gestures

- **Swipe Right →** Reveals the blue **Send** button
- **Swipe Left ←** Reveals green **Save** and red **Delete** buttons
- **Tap** on any action button to trigger the action
- **Tap** the list item itself to potentially navigate (expandable)

### Customization

#### Add New List Items

Edit `src/constants/list.constants.ts`:

```typescript
export const INITIAL_LIST_DATA: ListItem[] = [
  { key: '1', text: 'Your Activity', icon: 'your-icon-name' },
  // Add more items...
]
```

#### Modify Colors & Sizes

Edit `src/constants/app.constants.tsx`:

```typescript
export const APP_CONSTANTS = {
  SPACING: { XS: 4, SM: 8, MD: 16, LG: 24, XL: 32, XXL: 48 },
  ICON_SIZE: { SM: 20, MD: 24, LG: 32, XL: 40 },
  SWIPE: { LEFT_OPEN: 80, RIGHT_OPEN: -160 },
  // ... customize as needed
}
```

#### Add Custom Actions

1. Add handler in `src/hooks/useListActions.ts`
2. Update component props in `src/components/HiddenListItem.tsx`
3. Add button UI with NativeWind classes

## 🎨 Design System

### Color Palette

- **Primary**: Indigo (`bg-indigo-600`)
- **Success**: Emerald (`bg-emerald-500`)
- **Info**: Blue (`bg-blue-500`)
- **Danger**: Red (`bg-red-500`)
- **Background**: Gray-50 (`bg-gray-50`)

### Typography

- **Header**: 3xl, bold, white
- **Item Title**: lg, semibold, gray-800
- **Button Labels**: xs, semibold, white

### Spacing

All spacing follows the constants in `app.constants.tsx` for consistency.

## 📚 Key Concepts

### Component Architecture

- **Container Components** (`src/app/index.tsx`) - Handle state and business logic
- **Presentational Components** (`src/components/`) - Pure UI components
- **Custom Hooks** (`src/hooks/`) - Reusable logic extraction
- **Type Definitions** (`src/types/`) - Shared TypeScript types

### State Management

Uses React hooks (`useState`) with custom hook abstraction (`useListActions`) for clean separation of concerns.

### Styling

All styling uses **NativeWind classes only** (no inline styles) for consistency and maintainability.

## 🔧 Configuration

### TypeScript Path Aliases

Configured in `tsconfig.json`:

- `@/*` → `./src/*`
- `@components/*` → `./src/components/*`
- `@hooks/*` → `./src/hooks/*`
- `@types/*` → `./src/types/*`
- `@constants/*` → `./src/constants/*`
- `@assets/*` → `./assets/*`

### NativeWind

Configured in `tailwind.config.js` with Expo preset for React Native compatibility.

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Follow the existing code structure
2. Use TypeScript with strict types
3. Use NativeWind classes only (no inline styles)
4. Use constants from `app.constants.tsx` for sizes
5. Extract reusable logic into hooks
6. Keep components small and focused

## 📄 License

This project is private and not licensed for public use.

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev)
- Styled with [NativeWind](https://www.nativewind.dev)
- Icons from [@expo/vector-icons](https://icons.expo.fyi)
- Swipe functionality by [react-native-swipe-list-view](https://github.com/jemise111/react-native-swipe-list-view)

## 📞 Support

For questions or issues, please refer to:
- [Expo Documentation](https://docs.expo.dev)
- [NativeWind Documentation](https://www.nativewind.dev)
- [React Native Documentation](https://reactnative.dev)

---

Made with ❤️ using Expo and React Native
