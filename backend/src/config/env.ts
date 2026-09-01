export const appConfig = {
  port: Number(process.env.PORT ?? 3001),
  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:3000',
  backendUrl: process.env.BACKEND_URL ?? 'http://localhost:3001',
  jwtSecret: process.env.JWT_SECRET ?? 'development-secret',
};
