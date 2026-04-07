# Performance Marketing Platform

An in-house platform for managing, tracking, and optimizing performance marketing campaigns across multiple channels.

## Features

- **Campaign Management** - Create, edit, and manage campaigns across channels (Google Ads, Meta, TikTok, etc.)
- **Budget & Bid Optimization** - Automated budget allocation and bid strategies based on performance data
- **Analytics Dashboard** - Real-time reporting on KPIs: ROAS, CPA, CTR, conversion rates
- **Attribution Modeling** - Multi-touch attribution to understand the full customer journey
- **Audience Management** - Segment and manage audiences for targeting and retargeting
- **Creative Asset Library** - Centralized storage and performance tracking for ad creatives
- **A/B Testing** - Built-in experimentation framework for ads, landing pages, and audiences
- **Alerts & Anomaly Detection** - Automated alerts for budget pacing, performance drops, and anomalies

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, TypeScript, Vite |
| Backend API | Node.js, Express, TypeScript |
| Database | PostgreSQL |
| Cache | Redis |
| Queue | Bull (Redis-backed) |
| Testing | Jest, React Testing Library |
| Linting | ESLint, Prettier |

## Project Structure

```
├── packages/
│   ├── frontend/          # React SPA
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── store/
│   │   │   └── utils/
│   │   └── package.json
│   ├── backend/           # Express API server
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── middleware/
│   │   │   └── utils/
│   │   └── package.json
│   └── shared/            # Shared types & utilities
│       ├── src/
│       │   ├── types/
│       │   └── constants/
│       └── package.json
├── package.json           # Root workspace config
└── tsconfig.base.json     # Shared TypeScript config
```

## Getting Started

### Prerequisites

- Node.js >= 20
- PostgreSQL >= 15
- Redis >= 7

### Installation

```bash
npm install
```

### Development

```bash
# Start all services
npm run dev

# Start frontend only
npm run dev --workspace=packages/frontend

# Start backend only
npm run dev --workspace=packages/backend
```

### Testing

```bash
npm test
```

### Build

```bash
npm run build
```

## License

Proprietary - Internal use only.
