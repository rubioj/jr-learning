# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

- **Start development server**: `npm start` - Runs Parcel dev server on http://localhost:1234/
- **Build for production**: `npm run build` - Creates production build using Parcel
- **Run Storybook**: `npm run storybook` - Starts Storybook on http://localhost:6006/
- **Build Storybook**: `npm run build-storybook` - Creates production Storybook build

## Architecture Overview

This is a React-based portfolio/personal website with responsive design that automatically switches between desktop and mobile versions.

### Key Architectural Components

**Responsive Routing System**: 
- `ResponsiveRouter` component automatically redirects users based on screen width (< 600px = mobile)
- Each page has both `-desktop` and `-mobile` versions (e.g., `/home-desktop`, `/home-mobile`)
- Routes are defined in `src/routes/AppRouter.jsx`

**Component Structure**:
- **Screens**: Page-level components in `src/screens/` (desktop/mobile pairs)
- **Components**: Reusable UI components in `src/components/` with Storybook stories
- **Icons**: SVG icon components in `src/icons/`
- **Hooks**: Custom React hooks in `src/hooks/` (currently `useWindowSize`)

**Build System**:
- Uses Parcel for bundling (configured in package.json)
- Vite configuration exists (vite.config.js) but Parcel scripts are primary
- Static assets served from `static/` directory
- Storybook uses Vite builder for component development

**Component Organization**:
- Each component has its own folder with: Component.jsx, index.js, style.css, Component.stories.js
- Icons follow similar pattern but without CSS/stories in most cases
- Screen components include both JSX and CSS files

### Data and State
- Course data stored in `src/data/courses.js`
- No global state management - uses React's built-in state and props
- Email functionality via @emailjs/browser dependency

The responsive system is the core architectural feature - when modifying routing or adding pages, ensure both desktop and mobile versions are created and properly configured in the ResponsiveRouter component.