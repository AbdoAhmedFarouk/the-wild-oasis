# The Wild Oasis

The Wild Oasis is a modern cabin booking management dashboard built with React and Vite. It gives hotel staff a clean, fast interface to manage bookings, cabins, guests, check-ins, and dashboard insights from a single app.

## What the app demonstrates

This project showcases a full-featured admin dashboard for a cabin rental business with:

- A polished dashboard with key business metrics
- Booking management with detailed views and status updates
- Cabin management for creating, editing, and removing listings
- Guest check-in and check-out workflows
- Secure login and account management
- Dark mode support and a responsive layout

## Main features

- Dashboard overview with occupancy, bookings, and recent activity
- Booking list with filtering, sorting, and detail pages
- Cabin inventory management with image upload support
- Check-in and checkout actions for arriving and departing guests
- User authentication and protected routes
- Clean UI built with styled-components and reusable UI components

## Tech stack

- React 18
- Vite
- React Router DOM
- TanStack React Query
- Supabase for backend data
- Styled Components
- Recharts, date-fns, react-hook-form, and react-hot-toast

## Demo account

A demo account is included for quick testing:

- Email: kabowin582@noomlocs.com
- Password: 123456789

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a Supabase project and add your environment variables:

   ```bash
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at the local Vite URL.

## Project structure

The app is organized by feature, with folders for:

- authentication
- bookings
- cabins
- check-in/out
- dashboard
- settings
- shared UI components and services

## Why this project is interesting

This app demonstrates how React can be used to build a real-world admin panel with:

- data fetching and caching
- form handling
- protected routes
- interactive dashboards
- modern component-driven architecture
