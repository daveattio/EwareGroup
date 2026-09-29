# Eware Group — Plateforme Officielle (Monorepo)

Monorepo officiel de la plateforme **Eware Group**, propulsé par **Nuxt 3**, **Strapi v5 (PostgreSQL)** et orchestré pour **Dokploy**.

---

## 🏛️ Architecture du Projet

```text
Sitevitrine/
├── frontend/             # Application Nuxt 3 (SSR / Nitro)
│   ├── components/       # Composants d'interface (TopBar, Header, Hero, Solutions, Maps...)
│   ├── pages/            # Routes (Accueil, Solutions, Réalisations, Actualités, Contact...)
│   ├── locales/          # Multilingue (FR par défaut, EN)
│   └── Dockerfile        # Build conteneurisé de production
│
├── cms/                  # CMS Headless Strapi v5
│   ├── config/           # Configuration DB PostgreSQL
│   └── Dockerfile        # Build conteneurisé de production
│
├── docker-compose.yml    # Configuration multi-conteneurs Dokploy (Frontend + CMS + DB)
└── .env.example          # Modèle des variables d'environnement
```

---

## 🚀 Lancement en Local

### 1. Frontend (Nuxt 3)
```bash
cd frontend
npm install
npm run dev
```
Accès : `http://localhost:3000`

### 2. CMS Strapi
```bash
cd cms
npm install
npm run develop
```
Accès : `http://localhost:1337/admin`

---

## 🚢 Déploiement sur Dokploy (VPS)

1. Dans votre interface **Dokploy**, créez un nouveau projet.
2. Choisissez **"Compose"** (au lieu d'Application).
3. Connectez votre dépôt Git monorepo.
4. Remplissez les variables d'environnement dans Dokploy en vous basant sur `.env.example`.
5. Cliquez sur **Deploy** : Dokploy lance automatiquement la base PostgreSQL, Strapi et Nuxt 3 avec SSL automatique.
