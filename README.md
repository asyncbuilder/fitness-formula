# Fitness Formula

A sports club platform with a NestJS backend, Prisma + PostgreSQL database, and a Next.js frontend designed around a monochrome Charm-inspired UI.

## Stack

- Frontend: Next.js + React + TypeScript
- Backend: NestJS + TypeScript + Prisma + PostgreSQL
- Auth: JWT + Yandex OAuth-ready service layer
- Testing: Vitest + Playwright-ready scaffolding
- Infra: Docker Compose

## Local setup

1. Copy `.env.example` to `.env`.
2. Start PostgreSQL and the services:
   ```bash
   docker compose up --build
   ```
3. Run the backend directly for development:
   ```bash
   cd backend && npm install && npx prisma migrate dev --name init && npm run start:dev
   ```
4. Run the frontend:
   ```bash
   cd frontend && npm install && npm run dev
   ```

## Environment

See `.env.example` for the expected variables.

## Useful routes

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Swagger: http://localhost:3001/api/docs
- Health check: http://localhost:3001/health

## Project layout

- `frontend/` — Next.js app and design system
- `backend/` — NestJS API, Prisma schema, and modules
- `docker-compose.yml` — local infra orchestration
- `prisma/` — database migrations and schema (when generated)

## Notes

This project is structured as a production-conscious foundation with a focus on validation, domain models, and a clean admin/user split. It is ready for extension with real OAuth, booking rules, subscriptions, and payments.
