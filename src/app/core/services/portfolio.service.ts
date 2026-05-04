import  { Injectable } from '@angular/core';
import {
  Experience, Formation, Projet,
  SkillGroup, Document, VeilleItem, Source, SoftSkill
} from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getExperiences(): Experience[] {
    return [
      {
        date: 'Jan – Fév 2026',
        title: 'Stage — defaco',
        org: 'Développement full-stack',
        desc: 'Refonte et modernisation du frontend de l\'application. Amélioration du backend en .NET 10. Utilisation de GitLab pour la gestion du projet.',
        tags: ['Angular', '.NET 10', 'GitLab'],
        accent: true,
      },
      {
        date: 'Mai – Juin 2025',
        title: 'Stage — Eaux de Vienne',
        org: 'Développement backend',
        desc: 'Migration d\'une application de Symfony 5.4 vers Symfony 7.3. Utilisation de Git/GitHub et Trello pour la gestion de projet.',
        tags: ['Symfony 7', 'PHP', 'Git', 'Trello'],
        accent: true,
      },
      {
        date: 'Depuis 2023',
        title: 'Employé saisonnier — Futuroscope',
        org: 'Restauration · week-ends & vacances',
        desc: 'Travail d\'équipe, gestion du stress, organisation, prise de décision et autonomie dans un environnement à fort débit.',
        tags: ['Équipe', 'Rigueur', 'Autonomie'],
      },
    ];
  }

  getFormations(): Formation[] {
    return [
      {
        date: '2024 – 2026',
        title: 'BTS SIO — Option SLAM',
        org: 'Lycée Aliénor d\'Aquitaine · Poitiers',
        desc: 'Services Informatiques aux Organisations — Solutions Logicielles et Applications Métiers.',
        tags: ['En cours'],
      },
      {
        date: '2023 – 2024',
        title: 'BUT Informatique — 1ère année',
        org: 'IUT La Rochelle',
        desc: 'Formation universitaire technologique en informatique — bases algorithmiques, développement et systèmes.',
      },
      {
        date: '2021 – 2023',
        title: 'BAC STI2D — Option SIN',
        org: 'Lycée Nelson Mandela · Poitiers',
        desc: 'Sciences et Technologies de l\'Industrie et du Développement Durable.',
        tags: ['Mention Assez Bien'],
      },
    ];
  }

  getProjets(): Projet[] {
    return [
      {
        numero: '01',
        icon: '🔄',
        title: 'Refonte frontend Defaco',
        desc: 'Modernisation complète de l\'interface utilisateur d\'une application métier. Migration vers Angular avec une architecture en composants, services et appels API REST sécurisés.',
        stack: ['Angular', '.NET 10', 'TypeScript', 'REST API', 'GitLab CI/CD'],
        featured: true,
        context: 'Stage de 6 semaines chez Defaco (janvier – février 2026). L\'entreprise souhaitait moderniser son application métier vieillissante en migrant vers une stack Angular + .NET 10.',
        role: 'Développeur full-stack — conception de l\'architecture Angular, refonte complète de l\'UI, amélioration du backend .NET 10 et mise en place de la CI/CD GitLab.',
        duration: '6 semaines',
        details: 'Le projet consistait à refondre intégralement le frontend d\'une application de gestion métier. J\'ai analysé l\'existant, conçu l\'architecture Angular (composants standalone, services, routage), développé les nouveaux écrans et connecté l\'ensemble à l\'API REST .NET 10 existante que j\'ai également améliorée. J\'ai mis en place un pipeline GitLab CI/CD pour automatiser les tests et les déploiements.',
        images: [
          // { src: 'assets/projets/defaco-1.png', alt: 'Dashboard Defaco', caption: 'Nouveau dashboard Angular' },
          // { src: 'assets/projets/defaco-2.png', alt: 'Vue liste', caption: 'Vue liste avec filtres' },
        ],
      },
      {
        numero: '02',
        icon: '⬆️',
        title: 'Migration Symfony',
        desc: 'Migration d\'une application web de Symfony 5.4 vers Symfony 7.3 chez Eaux de Vienne — analyse, refactorisation et tests.',
        stack: ['Symfony 7', 'PHP', 'SQL', 'Git'],
        context: 'Stage de 5 semaines chez Eaux de Vienne (mai – juin 2025). La version Symfony 5.4 arrivant en fin de support, une migration vers Symfony 7.3 était nécessaire.',
        role: 'Développeur backend — analyse de compatibilité, migration du code, résolution des dépréciations et tests fonctionnels.',
        duration: '5 semaines',
        details: 'J\'ai réalisé un audit complet de l\'application existante sous Symfony 5.4, identifié toutes les incompatibilités avec Symfony 7.3 et procédé à la migration étape par étape : mise à jour des dépendances Composer, adaptation des contrôleurs, services et templates Twig, correction des dépréciations et validation par tests.',
        images: [],
      },
      {
        numero: '03',
        icon: '📱',
        title: 'App mobile hybride',
        desc: 'Transformation d\'une application Angular en application mobile native Android/iOS via Capacitor.',
        stack: ['Angular', 'Capacitor', 'Android', 'iOS'],
        context: 'Projet BTS SIO — l\'objectif était de rendre une application web Angular accessible en tant qu\'application native sur smartphone.',
        role: 'Développeur mobile — intégration de Capacitor, configuration des projets Android/iOS, adaptation de l\'UI pour mobile.',
        duration: 'Projet BTS',
        details: 'À partir d\'une application Angular existante, j\'ai intégré Capacitor pour la transformer en application hybride. J\'ai configuré les projets natifs Android et iOS, adapté l\'interface aux contraintes mobile (responsive, gestures, safe areas) et utilisé les plugins Capacitor pour accéder aux fonctionnalités natives.',
        images: [],
      },
      {
        numero: '04',
        icon: '🔒',
        title: 'API REST sécurisée',
        desc: 'Conception d\'une API REST avec .NET Core 8 (C#), authentification JWT et prévention des failles OWASP.',
        stack: ['.NET Core 8', 'C#', 'OWASP', 'JWT'],
        context: 'Projet BTS SIO — conception d\'une API REST complète en suivant les bonnes pratiques de sécurité OWASP.',
        role: 'Développeur backend — conception de l\'architecture REST, implémentation de l\'authentification JWT, sécurisation des endpoints.',
        duration: 'Projet BTS',
        details: 'Conception et développement d\'une API REST sécurisée avec .NET Core 8 et C#. J\'ai mis en place l\'authentification par JWT, la gestion des rôles, la validation des entrées, la protection contre les injections SQL, XSS et CSRF, en suivant les recommandations du Top 10 OWASP.',
        images: [],
      },
      {
        numero: '05',
        icon: '🐳',
        title: 'Infrastructure DevOps',
        desc: 'Mise en place de conteneurs Docker et d\'une chaîne CI/CD via GitLab. Automatisation des déploiements.',
        stack: ['Docker', 'GitLab CI', 'DevOps', 'Linux'],
        context: 'Projet BTS SIO — mise en place d\'une infrastructure conteneurisée avec automatisation complète du cycle de vie applicatif.',
        role: 'DevOps — rédaction des Dockerfiles, configuration de docker-compose, écriture des pipelines GitLab CI/CD.',
        duration: 'Projet BTS',
        details: 'J\'ai conteneurisé une application web en rédigeant les Dockerfiles et le fichier docker-compose pour les environnements de développement et de production. J\'ai ensuite configuré une chaîne CI/CD sur GitLab avec des stages de build, test et déploiement automatique, réduisant significativement le temps de mise en production.',
        images: [],
      },
      {
        numero: '06',
        icon: '🌐',
        title: 'Site PHP dynamique',
        desc: 'Conception d\'un site web interactif en PHP avec PDO, gestion des sessions et base de données relationnelle.',
        stack: ['PHP', 'PDO', 'MySQL', 'HTML/CSS'],
        context: 'Projet BTS SIO — développement d\'un site web dynamique avec gestion complète des données côté serveur.',
        role: 'Développeur full-stack — conception de la base de données, développement PHP, création de l\'interface HTML/CSS.',
        duration: 'Projet BTS',
        details: 'Développement d\'un site web dynamique en PHP avec PDO pour l\'accès sécurisé à la base de données MySQL. J\'ai conçu le schéma relationnel (Merise), développé les fonctionnalités CRUD, mis en place la gestion des sessions utilisateurs et sécurisé les formulaires contre les injections SQL.',
        images: [],
      },
    ];
  }

  getSkillGroups(): SkillGroup[] {
    return [
      {
        icon: '⚙️',
        title: 'Backend',
        skills: [
          '.NET Core 8 / C# — API REST',
          'Symfony 7 / PHP / PDO',
          'Authentification & sécurité JWT',
          'Architecture MVC & services',
        ],
      },
      {
        icon: '🖥️',
        title: 'Frontend',
        skills: [
          'Angular — composants, services, routing',
          'TypeScript / JavaScript',
          'Capacitor (Android / iOS)',
          'HTML5 / CSS3 / SCSS',
        ],
      },
      {
        icon: '🗄️',
        title: 'Base de données',
        skills: [
          'SQL — requêtes, procédures stockées',
          'Gestion des droits utilisateurs',
          'Modélisation Merise (MCD/MRD)',
          'Conception UML',
        ],
      },
      {
        icon: '🔧',
        title: 'DevOps & Outils',
        skills: [
          'Docker — conteneurisation',
          'CI/CD GitLab',
          'Git / GitHub / GitLab',
          'Agile — Scrum, Kanban, Trello',
        ],
      },
      {
        icon: '🛡️',
        title: 'Sécurité informatique',
        skills: [
          'Vulnérabilités OWASP Top 10',
          'Prévention XSS & CSRF',
          'Prévention injections SQL',
          'Bonnes pratiques d\'authentification',
        ],
        wide: true,
      },
    ];
  }

  getTechStack(): string[] {
    return ['Angular', '.NET Core', 'Symfony', 'TypeScript', 'C#','Tailwind', 'PHP', 'SQL', 'Docker', 'Git', 'Capacitor', 'HTML/CSS', 'Linux'];
  }

  getPrimaryTech(): string[] {
    return ['Angular', '.NET Core', 'Symfony', 'TypeScript', 'C#','Tailwind',];
  }

  getDocuments(): Document[] {
    return [
      {
        icon: '📋',
        badge: 'bts',
        badgeLabel: 'BTS SIO',
        title: 'Cahier des charges — Projet Angular',
        desc: 'Rédaction complète du cahier des charges pour le projet de développement d\'une application Angular en BTS.',
        date: '2025',
      },
      {
        icon: '🏢',
        badge: 'stage',
        badgeLabel: 'Stage',
        title: 'Rapport de stage — Eaux de Vienne',
        desc: 'Rapport complet du stage mai-juin 2025 : migration Symfony 5.4 → 7.3, contexte, réalisations et bilan.',
        date: 'Juin 2025',
      },
      {
        icon: '🏢',
        badge: 'stage',
        badgeLabel: 'Stage',
        title: 'Rapport de stage — defaco',
        desc: 'Rapport du stage janvier-février 2026 : refonte frontend Angular et amélioration backend .NET 10.',
        date: 'Fév 2026',
      },
      {
        icon: '📊',
        badge: 'bts',
        badgeLabel: 'BTS SIO',
        title: 'Dossier PPE — Projet Professionnel Encadré',
        desc: 'Documentation complète des projets professionnels encadrés réalisés en BTS SIO.',
        date: '2025–2026',
      },
      {
        icon: '🔍',
        badge: 'bts',
        badgeLabel: 'BTS SIO',
        title: 'Veille technologique — Dossier',
        desc: 'Dossier de veille technologique réalisé au cours du BTS SIO sur les technologies web modernes.',
        date: '2026',
      },
      {
        icon: '📄',
        badge: 'perso',
        badgeLabel: 'Personnel',
        title: 'Curriculum Vitae 2026',
        desc: 'Mon CV à jour — Enzo Norguet, étudiant BTS SIO à la recherche d\'une alternance en Licence Pro.',
        date: '2026',
        file: 'assets/CV_2026_Norguet_Enzo.pdf',
      },
    ];
  }

  getVeille(): VeilleItem[] {
    return [
      {
        category: 'Frameworks & Langages',
        title: 'L\'évolution d\'Angular et .NET',
        body: 'Suivi des nouvelles versions d\'Angular (Signals, Standalone Components, SSR amélioré) et de .NET (Minimal APIs, Blazor). Ces deux technologies constituent le cœur de ma stack et évoluent rapidement vers plus de modernité et de performance.',
        sources: '📡 blog.angular.io · devblogs.microsoft.com',
      },
      {
        category: 'Sécurité applicative',
        title: 'OWASP & bonnes pratiques',
        body: 'Veille sur les vulnérabilités courantes (OWASP Top 10) et les nouvelles techniques d\'attaque — injection SQL, XSS, CSRF, SSRF. Suivi des CVE critiques affectant PHP, Symfony et .NET.',
        sources: '📡 owasp.org · cve.mitre.org · snyk.io',
      },
      {
        category: 'DevOps & Cloud',
        title: 'Docker, CI/CD et automatisation',
        body: 'Suivi des évolutions Docker et des pratiques GitLab CI/CD. Intérêt pour Kubernetes et l\'orchestration de conteneurs. Veille sur les approches GitOps et l\'infrastructure as code.',
        sources: '📡 docker.com · gitlab.com/blog · dev.to',
      },
      {
        category: 'Intelligence Artificielle',
        title: 'IA dans le développement logiciel',
        body: 'Observation de l\'intégration de l\'IA dans les outils de développement (GitHub Copilot, Cursor, v0). Impact sur les pratiques de coding et génération de tests. Réflexion sur l\'évolution du métier de développeur.',
        sources: '📡 github.blog · openai.com · Hacker News',
      },
    ];
  }

  getSources(): Source[] {
    return [
      { name: 'dev.to', type: 'Communauté dev' },
      { name: 'Hacker News', type: 'Actualités tech' },
      { name: 'MDN Web Docs', type: 'Documentation' },
      { name: 'Angular Blog', type: 'Framework officiel' },
      { name: 'Microsoft DevBlogs', type: '.NET & Azure' },
      { name: 'OWASP', type: 'Sécurité' },
      { name: 'Symfony Blog', type: 'Framework PHP' },
      { name: 'YouTube tech', type: 'Tutoriels & talks' },
    ];
  }
}
