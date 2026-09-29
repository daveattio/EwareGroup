# ==========================================
# 1. Étape de Build Strapi CMS
# ==========================================
FROM node:20-alpine AS builder

# Dépendances système nécessaires pour les binaires C / compilation
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1

WORKDIR /opt/app

COPY package*.json ./
RUN npm ci

COPY . .
ENV NODE_ENV=production
RUN npm run build

# ==========================================
# 2. Étape de Production Strapi
# ==========================================
FROM node:20-alpine AS runner

RUN apk add --no-cache vips-dev

WORKDIR /opt/app

ENV NODE_ENV=production

COPY --from=builder /opt/app/node_modules ./node_modules
COPY --from=builder /opt/app/package*.json ./
COPY --from=builder /opt/app/dist ./dist
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/config ./config
COPY --from=builder /opt/app/database ./database
COPY --from=builder /opt/app/favicon.png ./favicon.png

EXPOSE 1337

CMD ["npm", "run", "start"]
