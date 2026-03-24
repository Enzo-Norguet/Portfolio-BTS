import { Injectable } from '@angular/core';
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
        desc: 'Refonte et modernisation du frontend de l\'application. Amélioration du backend en .NET 10. Intégration CI/CD avec GitLab.',
        tags: ['Angular', '.NET 10', 'GitLab', 'CI/CD'],
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
        title: 'Refonte frontend defaco',
        desc: 'Modernisation complète de l\'interface utilisateur d\'une application métier. Migration vers Angular avec une architecture en composants, services et appels API REST sécurisés.',
        stack: ['Angular', '.NET 10', 'TypeScript', 'REST API', 'GitLab CI/CD'],
        featured: true,
      },
      {
        numero: '02',
        icon: '⬆️',
        title: 'Migration Symfony',
        desc: 'Migration d\'une application web de Symfony 5.4 vers Symfony 7.3 chez Eaux de Vienne — analyse, refactorisation et tests.',
        stack: ['Symfony 7', 'PHP', 'SQL', 'Git'],
      },
      {
        numero: '03',
        icon: '📱',
        title: 'App mobile hybride',
        desc: 'Transformation d\'une application Angular en application mobile native Android/iOS via Capacitor.',
        stack: ['Angular', 'Capacitor', 'Android', 'iOS'],
      },
      {
        numero: '04',
        icon: '🔒',
        title: 'API REST sécurisée',
        desc: 'Conception d\'une API REST avec .NET Core 8 (C#), authentification JWT et prévention des failles OWASP.',
        stack: ['.NET Core 8', 'C#', 'OWASP', 'JWT'],
      },
      {
        numero: '05',
        icon: '🐳',
        title: 'Infrastructure DevOps',
        desc: 'Mise en place de conteneurs Docker et d\'une chaîne CI/CD via GitLab. Automatisation des déploiements.',
        stack: ['Docker', 'GitLab CI', 'DevOps', 'Linux'],
      },
      {
        numero: '06',
        icon: '🌐',
        title: 'Site PHP dynamique',
        desc: 'Conception d\'un site web interactif en PHP avec PDO, gestion des sessions et base de données relationnelle.',
        stack: ['PHP', 'PDO', 'MySQL', 'HTML/CSS'],
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
    return ['Angular', '.NET Core', 'Symfony', 'TypeScript', 'C#', 'PHP', 'SQL', 'Docker', 'Git', 'Capacitor', 'HTML/CSS', 'Linux'];
  }

  getPrimaryTech(): string[] {
    return ['Angular', '.NET Core', 'Symfony'];
  }

  getSoftSkills(): SoftSkill[] {
    return [
      { label: 'Motivation', value: 100 },
      { label: 'Curiosité', value: 95 },
      { label: 'Persévérance', value: 92 },
      { label: 'Organisation', value: 88 },
      { label: 'Polyvalence', value: 93 },
    ];
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
