# Portfolio — Enzo Norguet
> BTS SIO · Option SLAM · Angular 17 · Standalone Components

## 🚀 Démarrage rapide

### Prérequis
- Node.js >= 18.x
- npm >= 9.x
- Angular CLI : `npm install -g @angular/cli`

### Installation
```bash
# Cloner / dézipper le projet
cd portfolio-angular

# Installer les dépendances
npm install

# Lancer le serveur de développement
ng serve

# Ouvrir http://localhost:4200
```

### Build production
```bash
ng build
# Les fichiers sont générés dans dist/portfolio/
```

---

## 📁 Structure du projet

```
portfolio-angular/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/
│   │   │   │   └── portfolio.models.ts       # Interfaces TypeScript
│   │   │   └── services/
│   │   │       └── portfolio.service.ts      # Données centralisées
│   │   │
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── navbar/                   # Barre de navigation sticky
│   │   │   │   ├── footer/                   # Pied de page + contacts
│   │   │   │   ├── scroll-progress/          # Barre de progression scroll
│   │   │   │   └── section-label/            # Label + titre de section
│   │   │   └── directives/
│   │   │       └── scroll-reveal.directive.ts # Animation au scroll (IntersectionObserver)
│   │   │
│   │   ├── features/
│   │   │   ├── hero/                         # Section introduction
│   │   │   ├── parcours/                     # Timeline expériences + formation
│   │   │   ├── projets/                      # Grille de projets
│   │   │   ├── competences/                  # Skills, tech stack, soft skills
│   │   │   ├── documents/                    # Documents filtrables
│   │   │   └── veille/                       # Veille technologique
│   │   │
│   │   ├── app.component.ts                  # Composant racine
│   │   └── app.config.ts                     # Configuration Angular
│   │
│   ├── styles.scss                           # Variables CSS + styles globaux
│   ├── index.html
│   └── main.ts
│
├── public/
│   └── assets/
│       └── CV_2026_Norguet_Enzo.pdf          # ⚠️ Mettre ton CV ici
│
├── angular.json
├── package.json
├── tsconfig.json
└── tsconfig.app.json
```

---

## 🎨 Design system

| Token CSS         | Valeur          | Usage                        |
|-------------------|-----------------|------------------------------|
| `--bg`            | `#080b10`       | Fond principal               |
| `--surface`       | `#141c27`       | Fond des cartes              |
| `--accent`        | `#63b3ed`       | Bleu acier — couleur primaire|
| `--accent-2`      | `#4fd1c5`       | Teal — couleur secondaire    |
| `--text`          | `#e8edf3`       | Texte principal              |
| `--text-muted`    | `#7a8fa6`       | Texte secondaire             |
| `--font-display`  | `Syne`          | Titres & UI                  |
| `--font-body`     | `DM Mono`       | Corps de texte               |
| `--font-serif`    | `Instrument Serif` | Accent italique hero      |

---

## ✏️ Personnalisation du contenu

Toutes les données sont centralisées dans **un seul fichier** :

```
src/app/core/services/portfolio.service.ts
```

Pour modifier ton contenu :
- **Expériences** → `getExperiences()`
- **Formation** → `getFormations()`
- **Projets** → `getProjets()`
- **Compétences** → `getSkillGroups()` / `getTechStack()`
- **Documents** → `getDocuments()` — ajoute `file: 'assets/mon-fichier.pdf'` pour activer le téléchargement
- **Veille** → `getVeille()` / `getSources()`

---

## 📄 Ajouter des documents téléchargeables

1. Copie ton fichier PDF dans `public/assets/`
2. Dans `portfolio.service.ts`, ajoute le champ `file` sur le document :

```typescript
{
  icon: '📋',
  badge: 'bts',
  badgeLabel: 'BTS SIO',
  title: 'Mon rapport',
  desc: 'Description...',
  date: '2026',
  file: 'assets/mon-rapport.pdf',   // ← ici
}
```

---

## 🧩 Architecture — Composants standalone

Ce projet utilise l'architecture **standalone** d'Angular 17 (sans NgModule).
Chaque composant est autonome et déclare ses propres imports.

### Directive `ScrollReveal`
Applique une animation d'apparition au scroll via `IntersectionObserver` :

```html
<!-- Apparition depuis le bas (défaut) -->
<div appScrollReveal>...</div>

<!-- Depuis la gauche avec délai -->
<div appScrollReveal="slide-left" [revealDelay]="200">...</div>

<!-- Modes disponibles : slide-up | slide-left | slide-right | fade -->
```

---

## 📦 Déploiement

### GitHub Pages
```bash
npm install -g angular-cli-ghpages
ng build --base-href "https://<username>.github.io/<repo>/"
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

### Vercel / Netlify
- Build command : `ng build`
- Output directory : `dist/portfolio/browser`
- Ajouter un fichier `public/_redirects` (Netlify) : `/* /index.html 200`
