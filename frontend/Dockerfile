# ==========================================
# 1. Étape de Build (Nuxt 4 Nitro / Node 22)
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm ci

# Copie du code source et compilation
COPY . .
RUN npm run build

# ==========================================
# 2. Étape de Production (Ultra-Légère)
# ==========================================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# On ne copie que la sortie pré-compilée Nitro (ultra rapide, pas de node_modules lourds)
COPY --from=builder /app/.output ./

EXPOSE 3000

CMD ["node", "server/index.mjs"]
