# PizzaHub 🍕

![App](src/app/assets/banner.png)

**PizzaHub** is a sleek and responsive full-stack web app where users can explore, filter, and feast their eyes on beautifully rendered pizzas — complete with 3D visuals and buttery-smooth UI interactions.

## Features

### User Interface

- 🔐 Sign in with Google (OAuth)
- 🍕 Interactive 3D pizza display using Three.js
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🔍 Filtering and sorting by pizza size, crust, and category
- 🏷️ Dynamic status badges (e.g. "Best Seller", "Spicy", "Veg")
- 🎞️ Smooth animations via Framer Motion

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS 4
- **State Management**: Context API
- **Authentication**: Google OAuth (NextAuth.js)
- **3D Rendering**: Three.js with @react-three/fiber and drei
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+
- Google OAuth credentials
- Package manager (npm / yarn / pnpm)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/pizzahub.git
cd pizzahub

2. Install Dependencies
```bash
npm install

3. Set up environment variables

Create a `.env.local` file in the root directory with the following variables:

```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                            # Next.js App Router
│   ├── (dashboard)/                # Dashboard layout
│   │   ├── home/                   # Dashboard Home
│   │   │   └── page.tsx
│   │   └── pizza-orders/          # Orders page
│   │       └── page.tsx
│   ├── api/                        # API Routes
│   │   └── auth/                   # Auth routes
│   │       ├── [...nextauth]/     # NextAuth route
│   │       │   └── route.ts
│   │       └── session/           # Session route
│   │           └── route.ts
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles
├── context/                        # Global context for app state
│   ├── globalContext.tsx
│   └── globalProvider.tsx
├── components/                     # UI components (PizzaCard, Filters, etc.)
├── lib/                            # Utility functions and services
│   ├── Data.ts
│   ├── utils.ts
│   ├── auth.ts
│   └── middleware.ts
├── favicon.ico                     # App icon
└── .env.local                      # Environment variables (not committed)
```

