# Rohit Tiwari - Portfolio

A minimal, production-grade portfolio website showcasing professional projects and engineering focus.

## Tech Stack

- **Framework**: Vite + React
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

```bash
npm run build
```

The production build will be available in the `dist` folder.

### Type Checking

```bash
npm run typecheck
```

## Project Structure

```
src/
├── components/          # React components
│
├── constants/              # Project data
│   └── experience.ts
├── types/              # TypeScript types
│   └── project.ts
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Vite and configure the build settings
4. Deploy

Build settings for manual configuration:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Other Platforms

This is a standard Vite React app and can be deployed to any static hosting platform:

- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## Customization

### Update Personal Information-

- Do the changes in constants folder's files and some other places

### Styling

All components use Tailwind CSS. Customize the design by modifying classes or extending the theme in `tailwind.config.js`.

## License

MIT
