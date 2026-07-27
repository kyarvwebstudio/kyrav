# KYRAV Enterprise Agency Operating System

An extremely powerful, modular, and deeply integrated operating system for the KYRAV digital agency. Built to mimic the engineering standards of Stripe and Vercel.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict)
- **Database**: Prisma ORM + MySQL 8 (Currently mocked with SQLite for local dev)
- **Authentication**: NextAuth.js (v5) with custom RBAC JWT injection
- **API Validation**: Zod
- **Background Jobs**: BullMQ + Redis
- **Observability**: Pino Logger
- **Media**: Cloudinary (WebP compression)

## Project Structure (SOLID Repository Pattern)
```text
KYRAV/
├── prisma/
│   └── schema.prisma         # The massive 30+ model enterprise schema
├── src/
│   ├── app/
│   │   ├── admin/            # Internal Agency Dashboard (React UI)
│   │   ├── portal/           # Client-Facing Portal (React UI)
│   │   └── api/              # The Monolithic REST API endpoints
│   ├── repositories/         # Data Access Layer (Prisma interactions)
│   ├── services/             # Business Logic Layer (Separation of concerns)
│   ├── middleware/           # Edge Route Protection & Security Headers
│   ├── utils/                # Pino Logger & Helpers
│   └── lib/
│       └── queue/            # BullMQ Workers (Email, Processing)
```

## Running Locally

1. **Install Dependencies**
```bash
npm install
```

2. **Environment Configuration**
Create a `.env` file in the root directory. You must supply a valid Database URL and mocked API keys for Cloudinary and Redis.
```env
DATABASE_URL="file:./dev.db" # Or your MySQL 8 connection string
NEXTAUTH_SECRET="your_secret_key"
REDIS_URL="redis://localhost:6379"
```

3. **Database Migration**
Sync your Prisma schema with the database:
```bash
npx prisma db push
```

4. **Start Development Server**
```bash
npm run dev
```

## Security & Architecture Notes
- All API routes are wrapped in a higher-order `withErrorHandler` that automatically handles Zod validation errors and prevents stack-trace leaks in production.
- Next.js Edge Middleware intercepts all traffic to inject CSP headers and enforce strict Role-Based Access Control (RBAC).
