# Vespucci.ai - AI Agent Marketplace

A modern, blockchain-powered AI agent marketplace built with React, TypeScript, and Solana integration. Vespucci.ai offers a revolutionary pay-per-prompt pricing model for AI services with no monthly subscriptions.

## 🚀 Features

- **AI Agent Marketplace**: Discover and deploy specialized AI agents for various use cases
- **Pay-Per-Prompt Pricing**: Revolutionary pricing starting at $0.0008 per prompt
- **Blockchain Integration**: Built on Solana blockchain for transparent, secure transactions
- **Open Source Foundation**: Built with cutting-edge technologies like MCP, LangChain, and Node-RED
- **Web-Based Platform**: Accessible to users of all technical levels
- **Responsive Design**: Optimized for desktop and mobile devices

## 🛠 Tech Stack

### Core Framework

- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe development
- **Vite 5.4.1** - Fast build tool and development server

### UI & Styling

- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **Radix UI** - Headless UI primitives for accessibility
- **shadcn/ui** - Modern component library built on Radix UI
- **Lucide React** - Beautiful icon library
- **next-themes** - Theme management system

### Blockchain Integration

- **@solana/web3.js 1.98.2** - Solana blockchain interaction
- **@solana/wallet-adapter-react** - Wallet connection management
- **@solana/wallet-adapter-wallets** - Support for multiple wallets (Phantom, Solflare, Torus, Ledger)

### State Management & Data Fetching

- **@tanstack/react-query 5.56.2** - Server state management
- **React Hook Form 7.53.0** - Form state management
- **Zod 3.23.8** - Schema validation

### Routing & Navigation

- **React Router DOM 6.26.2** - Client-side routing

### Additional Libraries

- **date-fns** - Date utility library
- **recharts** - Chart components
- **embla-carousel-react** - Carousel components
- **sonner** - Toast notifications
- **cmdk** - Command menu component

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── solana/          # Blockchain-related components
│   ├── Header.tsx       # Main navigation header
│   ├── HeroSection.tsx  # Landing page hero
│   ├── Features.tsx     # Feature showcase
│   ├── Pricing.tsx      # Pricing plans
│   ├── TaskBoard.tsx    # Interactive task management demo
│   ├── Footer.tsx       # Site footer
│   └── Logo.tsx         # Brand logo component
├── pages/               # Route components
│   ├── index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
│   └── utils.ts         # Common utilities
├── App.tsx              # Main app component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🎨 UI Components

### Core UI Components (shadcn/ui)

- **Accordion** - Collapsible content sections
- **Alert Dialog** - Modal dialogs for confirmations
- **Avatar** - User profile images
- **Button** - Interactive buttons with variants
- **Card** - Content containers
- **Checkbox** - Form checkboxes
- **Dialog** - Modal dialogs
- **Dropdown Menu** - Context menus
- **Form Controls** - Input, label, select components
- **Navigation Menu** - Site navigation
- **Progress** - Progress indicators
- **Tabs** - Tabbed interfaces
- **Toast** - Notification system
- **Tooltip** - Hover information

### Custom Components

- **TaskBoard** - Interactive Kanban-style task management
- **TaskColumn** - Individual columns in task board
- **TaskCard** - Individual task items
- **SolanaProvider** - Blockchain wallet integration
- **CustomWalletConnect** - Wallet connection interface
- **DashboardPreview** - Marketplace preview interface

## 🔧 Configuration

### Vite Configuration

- **React SWC Plugin** - Fast React compilation
- **Path Aliases** - `@/` mapped to `./src`
- **Development Server** - Configured for host `::` and port `8080`
- **Component Tagger** - Development-only component debugging

### Tailwind Configuration

- **Dark Mode** - Class-based theme switching
- **Custom Colors** - Cosmic theme with grey-based palette
- **Responsive Breakpoints** - Including custom `928px` breakpoint
- **Animations** - Custom keyframes for floating and pulsing effects
- **Container** - Centered with responsive padding

### TypeScript Configuration

- **Strict Mode** - Enhanced type checking
- **Modern Target** - ES2020 compilation
- **Path Mapping** - Absolute imports with `@/` prefix

## 🌟 Key Features Implementation

### Theme System

- **Light/Dark Mode Toggle** - Seamless theme switching
- **Cosmic Color Palette** - Custom grey-based design system
- **CSS Variables** - Dynamic color theming
- **Theme Persistence** - User preference storage

### Blockchain Integration

- **Multi-Wallet Support** - Phantom, Solflare, Torus, Ledger
- **Solana Devnet** - Development blockchain network
- **Wallet State Management** - Connection status and user info
- **Transaction Handling** - Prepared for pay-per-prompt system

### Responsive Design

- **Mobile-First** - Progressive enhancement approach
- **Flexible Layouts** - CSS Grid and Flexbox
- **Touch-Friendly** - Optimized for mobile interactions
- **Accessibility** - ARIA labels and keyboard navigation

### Performance Optimizations

- **Code Splitting** - Route-based lazy loading
- **Image Optimization** - Responsive images and lazy loading
- **Bundle Optimization** - Tree-shaking and minification
- **Caching Strategy** - React Query for server state

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-org/vespucci-ai-website.git
cd vespucci-ai-website
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open browser to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Pricing Model

### Explorer Plan (Free)

- Standard AI models
- Limited prompts per month
- Community support
- Open-source access

### Premium Plan ($0.0008 per prompt)

- Unlimited prompts
- Access to proprietary AI agents
- Priority processing
- Advanced analytics
- API access
- Developer support

### Enterprise Plan (Custom)

- White-label solutions
- SLA guarantees
- Custom AI integrations
- Dedicated support

## 🔐 Security & Privacy

- **Blockchain Security** - Solana network protection
- **Wallet Security** - Non-custodial wallet integration
- **Data Privacy** - Minimal data collection
- **Open Source** - Transparent codebase

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

This project is built with open-source principles. Contributions are welcome for:

- Bug fixes and improvements
- New AI agent integrations
- UI/UX enhancements
- Documentation updates
- Performance optimizations

## 📄 License

This project is open-source under the MIT License.

## 🔗 Links

- [Website](https://vespucci.ai)
- [Documentation](https://docs.vespucci.ai)
- [GitHub](https://github.com/vespucci-ai)
- [Discord Community](https://discord.gg/vespucci-ai)

## 📧 Support

For technical support or business inquiries, contact us at:

- Technical: support@vespucci.ai
- Business: business@vespucci.ai

---

Built with ❤️ by the Vespucci.ai Team | Powered by Solana Blockchain
