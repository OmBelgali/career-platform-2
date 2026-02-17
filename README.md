# Career Platform Monorepo

Unified platform integrating Job Tracker, Placement Readiness, and AI Resume Builder.

## Structure

- **apps/web**: Unified Frontend (React + Vite)
- **apps/api**: Unified Backend (Node + Express)
- **packages/models**: Shared Mongoose schemas
- **packages/ui**: Shared UI components
- **packages/config**: Shared configurations

## Setup

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Environment Variables**
    Copy `.env.example` to `apps/web/.env` and `apps/api/.env` and update values.
    
    **apps/web/.env**
    ```env
    VITE_API_URL=http://localhost:3001/api
    ```
    
    **apps/api/.env**
    ```env
    PORT=3001
    MONGO_URI=mongodb://localhost:27017/career-platform
    ```

3.  **Run Locally**
    ```bash
    npm run dev
    ```
    This uses TurboRepo to run both frontend and backend in parallel.

## Deployment (Vercel)

The project is configured for Vercel.

1.  Connect your GitHub repository to Vercel.
2.  Import the **root** directory.
3.  Vercel should automatically detect the `vercel.json` configuration.
4.  Add Environment Variables in Vercel Project Settings:
    - `MONGO_URI`
    - `VITE_API_URL` (Set to your production URL, e.g., `https://your-project.vercel.app/api`)

## APIs

- `GET /api/jobs`: List all jobs
- `GET /api/jobs/:id`: Get job details
- `POST /api/resume`: Save resume
- `GET /api/placement`: Placement service health

## Tech Stack

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Monorepo**: TurboRepo, npm workspaces
