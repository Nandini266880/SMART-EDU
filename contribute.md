# Contributing and Local Setup

This guide explains how to install and run SMART-EDU locally.

## Prerequisites

- Node.js and npm
- Access to the project's TiDB database and its connection details

The backend uses Sequelize with the MySQL driver to connect to TiDB. The database is not started by the frontend or backend commands below; it must already be available at the configured host and port. Ask the project maintainer for database access and connection settings.

## Configure the backend

Install backend dependencies from the backend lockfile:

```powershell
cd Backend
npm ci
```

Create `Backend/.env` with the settings provided for your local development environment:

```env
TIDB_HOST=<database host>
TIDB_PORT=<database port>
TIDB_USER=<database username>
TIDB_PASSWORD=<database password>
TIDB_DB_NAME=<database name>
JWT_SECRET=<local jwt signing secret>
PASSWORD_SECRET=<local password hashing secret>
PORT=5000
```

Keep `.env` private. Do not commit database credentials or secrets. The backend connects to the database and synchronizes its Sequelize models when it starts.

Start the API:

```powershell
npm run dev
```

The API listens at `http://localhost:5000` by default.

## Configure and run the frontend

Open a second terminal from the repository root and run:

```powershell
cd Frontend
npm ci
npm run dev
```

Vite prints the frontend URL in the terminal; it is usually `http://localhost:5173`. Keep both development servers running while using the app.

## Notes

- Run `npm ci` separately in `Backend` and `Frontend`; each folder has its own `package-lock.json`.
- Never commit `.env`, database passwords, email credentials, or production secrets.
