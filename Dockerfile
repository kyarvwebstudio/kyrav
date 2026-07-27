# Use official lightweight Node.js image
FROM node:22-alpine

WORKDIR /app

# Install dependencies first (for caching)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy application files
COPY . .

# Generate Prisma Client (uses MariaDB driver adapter)
RUN npx prisma generate

EXPOSE 3000

# Push database schema and run next.js in dev mode
CMD ["sh", "-c", "npx prisma db push && npm run dev"]
