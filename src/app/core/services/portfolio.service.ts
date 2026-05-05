import {Injectable} from '@angular/core';
import {
    Experience, Formation, Projet,
    SkillGroup, Document, VeilleItem, Source, SoftSkill
} from '../models/portfolio.models';

@Injectable({providedIn: 'root'})
export class PortfolioService {

    getExperiences(): Experience[] {
        return [
            {
                date: 'Jan – Fév 2026',
                title: 'Stage — defaco',
                org: 'Développement full-stack',
                desc: 'Refonte et modernisation du frontend de l\'application. Amélioration du backend en .NET 10. Utilisation de GitLab et d\'une application interne qui nous servait de kanban pour la gestion de projet.',
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
                stack: ['Angular', '.NET 10', 'TypeScript', 'REST API', 'GitLab'],
                featured: true,
                context: 'Stage de 6 semaines chez Defaco (janvier – février 2026). L\'entreprise souhaitait moderniser son application métier en migrant vers une stack Angular + .NET 10.',
                features: [
                    'Refonte complète de l\'interface utilisateur Angular',
                    'Amélioration du backend .NET 10',
                    'Mise en place de la CI/CD GitLab',
                    'Appels API REST sécurisés',
                ],
                duration: '6 semaines',
                details: 'Le projet consistait à refaire en très grande majorité le frontend d\'une application de gestion métier. J\'ai analysé l\'existant, modifié et améliorer l\'architecture, développé les nouveaux écrans et connecté l\'ensemble à l\'API REST .NET 10 existante ou j\'ai pu également améliorée. Nous avons travailler en mode projet en utilisant GitLab ainsi qu\'une application interne qui était un kanban pour se répartir les tâches avec les deadlines.',
                images: [
                    {
                        src: 'assets/projets/PageBonsDeCommandeV1.png',
                        alt: 'Dashboard Defaco',
                        caption: 'Ancienne vue Bons De Commande',
                    },
                    {
                        src: 'assets/projets/PageBonsDeCommandeV2.png',
                        alt: 'Vue liste',
                        caption: 'Nouvelle vue Bons De Commande',
                    },
                    {
                        src: 'assets/projets/PageDevisV1.png',
                        alt: 'Vue liste',
                        caption: 'Ancienne vue Devis'
                    },
                    {
                        src: 'assets/projets/PageDevisV2.png',
                        alt: 'Vue liste',
                        caption: 'Nouvelle vue Bons De Commande',
                    },
                    {
                        src: 'assets/projets/PageCommandeV2.png',
                        alt: 'Vue liste',
                        caption: 'Ancienne vue Commande'
                    },
                    {
                        src: 'assets/projets/PageCommandeV2.png',
                        alt: 'Vue liste',
                        caption: 'Nouvelle vue Commande'
                    },
                ],
            },
            {
                numero: '02',
                icon: '⬆️',
                title: 'Migration Symfony',
                desc: 'Migration d\'une application web de Symfony 5.4 vers Symfony 7.3 chez Eaux de Vienne — analyse, refactorisation et tests.',
                stack: ['Symfony 7', 'PHP', 'SQL', 'Git'],
                context: 'Stage de 5 semaines chez Eaux de Vienne (mai – juin 2025). La version Symfony 5.4 arrivant en fin de support, une migration vers Symfony 7.3 était nécessaire.',
                features: [
                    'Analyse de compatibilité Symfony 5.4 → 7.3',
                    'Migration des contrôleurs et services',
                    'Correction des dépréciations',
                    'Tests fonctionnels de validation',
                ],
                duration: '5 semaines',
                details: 'J\'ai réalisé un audit complet de l\'application existante sous Symfony 5.4, identifié toutes les incompatibilités avec Symfony 7.3 et procédé à la migration étape par étape : mise à jour des dépendances Composer, adaptation des contrôleurs, services et templates Twig, correction des dépréciations et validation par tests.',
            },

            {
                numero: '03',
                icon: '📱',
                title: 'BeReady',
                desc: 'Création et transformation d\'une application Angular en application mobile native Android/iOS via Capacitor.',
                stack: ['Angular', 'Capacitor', 'Android', 'iOS', 'Ionic'],
                context: 'Projet BTS SIO — l\'objectif était de rendre une application web Angular accessible en tant qu\'application native sur smartphone.',
                features: [
                    'Intégration de Capacitor dans le projet Angular',
                    'Configuration des projets natifs Android et iOS',
                    'Adaptation de l\'UI pour mobile (responsive, safe areas)',
                    'Utilisation des plugins Capacitor natifs',
                ],
                duration: '3 mois',
                details: 'À partir d\'une application Angular que l\'on a créée en groupe, nous avons intégré Capacitor pour la transformer en application hybride. Nous avons configuré les projets natifs Android et iOS, adapté l\'interface aux contraintes mobile (responsive, gestures, safe areas) et utilisé les plugins Capacitor pour accéder aux fonctionnalités natives.',
                images: [],
            },
            {
                numero: '04',
                icon: '✔️',
                title: 'Jefaikoi',
                desc: 'Application de gestion de tâches avec système de points, méthode Scrum et architecture MVC.',
                stack: ['PHP', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS', 'MVC', 'GitHub'],
                context: 'Projet réalisé en équipe de 3 personnes dans le cadre d’un projet d’école, avec application de la méthode agile Scrum (sprints, rétrospectives, répartition des rôles).',
                features: [
                    'Connexion avec gestion de session sécurisée.',
                    'Tableau Kanban dynamique avec déplacement automatique des tâches selon l’urgence.',
                    'Création, suppression et modification de tâches.',
                    'Gestion des tâches urgentes selon le temps restant.',
                    'Page de profil avec inFormations utilisateur et système de points (gains et pertes).'
                ],
                duration: 'Projet BTS 1ère année',
                details: 'Développement d’un outil de gestion de tâches personnel basé sur un tableau Kanban amélioré, permettant à un utilisateur d’organiser son travail efficacement. L\'objectif était de créer une application web intuitive où chaque utilisateur peut gérer ses tâches, suivre ses progrès, et être motivé par un système de points selon ses réussites ou échecs.',
                images: [
                    {
                        src: 'assets/projets/jefaikoi1.jpg',
                        alt: 'Authentification/connection Jefaikoi',
                        caption: 'Vue authentification pour se connecter',
                    },
                    {
                        src: 'assets/projets/jefaikoi2.jpg',
                        alt: 'Authentification/inscription Jefaikoi',
                        caption: 'Vue authentification pour s\'inscrire',
                    },
                    {
                        src: 'assets/projets/jefaikoi3.jpg',
                        alt: 'Page d\'accueil Jefaikoi',
                        caption: 'Page d\'accueil Jefaikoi',
                    },
                    {
                        src: 'assets/projets/jefaikoi4.jpg',
                        alt: 'Ajout d\'une tâche',
                        caption: 'Vue ajout d\'une tâche',
                    },
                    {
                        src: 'assets/projets/jefaikoi5.jpg',
                        alt: 'Vue du profil',
                        caption: 'Vue du profil',
                    },
                ],
            },
            {
                numero: '05',
                icon: '🧠',
                title: 'Memories',
                desc: 'Mise en place de conteneurs Docker et d\'une chaîne CI/CD via GitLab. Automatisation des déploiements.',
                stack: ['Docker', 'GitLab CI', 'DevOps', 'Linux'],
                context: 'Projet BTS SIO — mise en place d\'une infrastructure conteneurisée avec automatisation complète du cycle de vie applicatif.',
                features: [
                    'Conteneurisation via Dockerfiles et docker-compose',
                    'Pipeline CI/CD GitLab (build, test, deploy)',
                    'Automatisation des déploiements en production',
                    'Gestion des environnements dev / prod',
                ],
                duration: 'Projet BTS',
                details: 'J\'ai conteneurisé une application web en rédigeant les Dockerfiles et le fichier docker-compose pour les environnements de développement et de production. J\'ai ensuite configuré une chaîne CI/CD sur GitLab avec des stages de build, test et déploiement automatique, réduisant significativement le temps de mise en production.',
                images: [],
            },
            {
                numero: '06',
                icon: '🎆',
                title: 'Pyrofêtes',
                desc: 'Conception d\'un site web interactif en PHP avec PDO, gestion des sessions et base de données relationnelle.',
                stack: ['PHP', 'PDO', 'MySQL', 'HTML/CSS'],
                context: 'Projet BTS SIO — développement d\'un site web dynamique avec gestion complète des données côté serveur.',
                features: [
                    'Conception du schéma relationnel avec Merise',
                    'Développement des fonctionnalités CRUD en PHP/PDO',
                    'Gestion des sessions utilisateurs',
                    'Sécurisation des formulaires (injections SQL)',
                ],
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
        return ['Angular', '.NET Core', 'Symfony', 'TypeScript', 'C#', 'Tailwind', 'PHP', 'SQL', 'Docker', 'Git', 'Capacitor', 'HTML/CSS', 'Linux'];
    }

    getPrimaryTech(): string[] {
        return ['Angular', '.NET Core', 'Symfony', 'TypeScript', 'C#', 'Tailwind',];
    }

    getSoftSkills(): SoftSkill[] {
        return[
            { label : 'Motivé' },
            { label : 'Curieux'},
            { label : 'Créatif'},
            { label : 'Rigoureux'},
            { label : 'Perfectionniste'},
            { label : 'Esprit d\'équipe'},
            { label : 'Gestion du stress'},

        ]

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
            {name: 'dev.to', type: 'Communauté dev'},
            {name: 'Hacker News', type: 'Actualités tech'},
            {name: 'MDN Web Docs', type: 'Documentation'},
            {name: 'Angular Blog', type: 'Framework officiel'},
            {name: 'Microsoft DevBlogs', type: '.NET & Azure'},
            {name: 'OWASP', type: 'Sécurité'},
            {name: 'Symfony Blog', type: 'Framework PHP'},
            {name: 'YouTube tech', type: 'Tutoriels & talks'},
        ];
    }
}
