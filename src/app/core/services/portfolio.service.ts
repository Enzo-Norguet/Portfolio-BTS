import {Injectable} from '@angular/core';
import {
    Experience, Formation, Projet,
    SkillGroup, Document, Source, SoftSkill, VeilleAxe
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
                tags: ['C#', 'PHP', 'JavaScript', 'Angular', 'SQL', 'HTML', 'CSS'],
                accent: true,
            },
            {
                date: '2023 – 2024',
                title: 'BUT Informatique — 1ère année',
                org: 'IUT La Rochelle',
                desc: 'Formation universitaire technologique en informatique — bases algorithmiques, développement et systèmes.',
                tags: ['C++', 'SQL', 'HTML', 'CSS'],
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
                duration: 'Projet BTS 1e année',
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
                desc: 'Application web de révision par flashcards, avec algorithme de répétition espacée (courbe d\'Ebbinghaus)',
                stack: ['PHP', 'MySQL', 'JavaScript'],
                context: 'Projet scolaire en équipe de 3 personnes',
                features: [
                    'Connexion sécurisée avec gestion de session et mot de passe haché.',
                    'Création et suppression de thèmes de révision personnalisés.',
                    'Ajout, modification et suppression de cartes de révision (question/réponse).',
                    'Autoévaluation après chaque carte : la fréquence de réapparition s’adapte selon la réponse (oubliée / maîtrisée).',
                ],
                duration: 'Projet BTS 1e année',
                details: 'Développement d’une application web d’aide à la révision pour les étudiants, fondée sur le principe de cartes question-réponse et l’autoévaluation. L\'objectif est d\'aider les utilisateurs à mémoriser durablement leurs cours en adaptant les répétitions à leur niveau de maîtrise, selon le principe de la courbe de l’oubli (Ebbinghaus).',
                images: [
                    {
                        src: 'assets/projets/memories1.jpg',
                        alt: 'Vue authentification',
                        caption: 'Vue page d\'authentification',
                    },
                    {
                        src: 'assets/projets/memories2.jpg',
                        alt: 'Vue thème',
                        caption: 'Vue thème',
                    },
                    {
                        src: 'assets/projets/memories3.jpg',
                        alt: 'Suite vue thème',
                        caption: 'Suite vue thème',
                    },
                    {
                        src: 'assets/projets/memories4.jpg',
                        alt: 'Vue page ajouter une question',
                        caption: 'Vue page ajouter une question',
                    },
                    {
                        src: 'assets/projets/memories5.jpg',
                        alt: 'Vue page modification cartes',
                        caption: 'Vue page modification cartes',
                    },
                    {
                        src: 'assets/projets/memories6.jpg',
                        alt: 'Vue exemple recto cartes',
                        caption: 'Vue exemple recto cartes',
                    },
                    {
                        src: 'assets/projets/memories7.jpg',
                        alt: 'Vue verso cartes',
                        caption: 'Vue verso cartes',
                    },

                ],
            },
            {
                numero: '06',
                icon: '🎆',
                title: 'Pyrofêtes',
                desc: 'Application de gestion pour un artificier : devis, stocks, clients. Projet d\'AP de 2e année de BTS',
                stack: ['C#', '.NET', 'SQL Server', 'HTML/CSS', 'Angular'],
                context: 'L’entreprise souhaite remplacer ses processus manuels (suivi des stocks, génération de commandes, relances fournisseurs) par un outil automatisé, afin de réduire les erreurs, éviter les ruptures de stock et améliorer la traçabilité.',
                features: [
                    'Gestion des fournisseurs (coordonnées, délais, prix par produit)',
                    'Création et personnalisation des devis, bons de livraison et bons de commande avec export PDF',
                    'Transformation d’un bon de commande en bon de livraison',
                    'Suivi des livraisons et réceptions, mise à jour automatique des stocks',
                    'Proposition automatique du fournisseur approprié lors de la génération d’un bon de commande'
                ],
                duration: 'Projet BTS 2e année',
                details: ' Développement d’un système de gestion des stocks, fournisseurs, livreurs, devis et bons de commande/livraison pour l’entreprise PyroFêtes, afin d’automatiser le réapprovisionnement et améliorer le suivi des livraisons. L\'objectif était de créer une application centralisée permettant la gestion des stocks, la création et le suivi des devis, bons de commande et bons de livraison, avec alertes automatiques et choix optimisé des fournisseurs.',
                images: [
                    {
                        src: 'assets/projets/pyrofetes1.jpg',
                        alt: 'Vue verso cartes',
                        caption: 'Vue verso cartes',
                    },
                    {
                        src: 'assets/projets/pyrofetes2.jpg',
                        alt: 'Vue verso cartes',
                        caption: 'Vue verso cartes',
                    },
                    {
                        src: 'assets/projets/pyrofetes3.jpg',
                        alt: 'Vue verso cartes',
                        caption: 'Vue verso cartes',
                    },
                    {
                        src: 'assets/projets/pyrofetes4.jpg',
                        alt: 'Vue verso cartes',
                        caption: 'Vue verso cartes',
                    },
                    {
                        src: 'assets/projets/pyrofetes5.jpg',
                        alt: 'Vue verso cartes',
                        caption: 'Vue verso cartes',
                    },
                    {
                        src: 'assets/projets/pyrofetes6.jpg',
                        alt: 'Vue verso cartes',
                        caption: 'Vue verso cartes',
                    },
                    {
                        src: 'assets/projets/pyrofetes7.jpg',
                        alt: 'Vue verso cartes',
                        caption: 'Vue verso cartes',
                    },
                    {
                        src: 'assets/projets/pyrofetes8.jpg',
                        alt: 'Vue verso cartes',
                        caption: 'Vue verso cartes',
                    },
                    {
                        src: 'assets/projets/pyrofetes9.jpg',
                        alt: 'Vue verso cartes',
                        caption: 'Vue verso cartes',
                    },
                    {
                        src: 'assets/projets/pyrofetes10.jpg',
                        alt: 'Vue verso cartes',
                        caption: 'Vue verso cartes',
                    },
                ],
            },
        ];
    }

    getSkillGroups(): SkillGroup[] {
        return [
            {
                icon: '⚙️',
                title: 'Backend',
                skills: [
                    '.NET 8, 10 / C# — API REST',
                    'Symfony  / PHP / PDO / POO',
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
                    'SQL — PostgreSQL — requêtes, procédures stockées',
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
        return ['Angular', '.NET', 'Symfony', 'TypeScript', 'C#', 'Tailwind', 'PHP', 'SQL', 'Docker', 'Git', 'Capacitor', 'HTML/CSS', 'Linux'];
    }

    getPrimaryTech(): string[] {
        return ['Angular', '.NET', 'Symfony', 'TypeScript', 'C#', 'Tailwind',];
    }

    getSoftSkills(): SoftSkill[] {
        return [
            {label: 'Motivé'},
            {label: 'Curieux'},
            {label: 'Créatif'},
            {label: 'Rigoureux'},
            {label: 'Perfectionniste'},
            {label: 'Esprit d\'équipe'},
            {label: 'Gestion du stress'},

        ]

    }

    getDocuments(): Document[] {
        return [
            {
                icon: '📋',
                badge: 'stage',
                badgeLabel: 'Stage',
                title: 'Cahier des charges — defaco',
                desc: 'Rédaction complète du cahier des charges pour le projet du stage dans l\'entreprise Defaco.',
                date: '2025',
                file: 'assets/projets/Cahier_des_charges_defaco.pdf'
            },
            {
                icon: '🏢',
                badge: 'stage',
                badgeLabel: 'Stage',
                title: 'Carnet de bord — defaco',
                desc: 'Carnet de bord janvier-février 2026 : refonte frontend Angular et amélioration backend .NET 10.',
                date: 'Fév 2026',
                file: 'assets/projets/Carnet_bord_defaco.pdf'
            },
            {
                icon: '📊',
                badge: 'stage',
                badgeLabel: 'Stage',
                title: 'Gestion du parc informatique et des tickets',
                desc: 'Fiche réalisé en stage de 1è année concernant la gestion du parc informatique et des tickets.',
                date: '2026',
                file: 'assets/projets/Gestion_parc_et_tickets_defaco.pdf',
            },
            {
                icon: '📊',
                badge: 'bts',
                badgeLabel: 'BTS SIO',
                title: 'Cahier des charges - Eaux de Vienne',
                desc: 'Rédaction complète du cahier des charges pour le projet du stage dans l\'entreprise Eaux de Vienne.',
                date: 'mai - juin 2025',
                file: 'assets/projets/Cahier_des_charges_siveer.pdf',
            },
            {
                icon: '🏢',
                badge: 'stage',
                badgeLabel: 'Stage',
                title: 'Carnet de bord — Eaux de Vienne',
                desc: 'Carnet de bord du stage mai-juin 2025 : migration Symfony 5.4 → 7.3, contexte, réalisations et bilan.',
                date: 'Juin 2025',
                file: 'assets/projets/Carnet_bord_siveer.pdf',
            },
            {
                icon: '📊',
                badge: 'stage',
                badgeLabel: 'Stage',
                title: 'Gestion du parc informatique et des tickets',
                desc: 'Fiche réalisé en stage de 2è année concernant la gestion du parc informatique et des tickets.',
                date: '2026',
                file: 'assets/projets/Gestion_parc_et_tickets_defaco.pdf',
            },
            {
                icon: '📊',
                badge: 'bts',
                badgeLabel: 'BTS SIO',
                title: 'Cahier des charges - PyroFetes',
                desc: 'Rédaction complète du cahier des charges pour le projet de BTS 2è année.',
                date: '2026',
                file: 'assets/projets/Cahier_des_charges_PyroFetes.pdf',
            },
            {
                icon: '📊',
                badge: 'bts',
                badgeLabel: 'BTS SIO',
                title: 'Cahier des charges - BeReady',
                desc: 'Rédaction complète du cahier des charges pour le projet de BTS 2è année.',
                date: '2026',
                file: 'assets/projets/Cahier_des_charges_BeReady.pdf',
            },
            {
                icon: '📊',
                badge: 'stage',
                badgeLabel: 'Stage',
                title: 'Fiche de procédure Angular',
                desc: 'Fiche de procédure Angular réalisée en stage de 1è année.',
                date: 'Juin 2025',
                file: 'assets/projets/Angular.pdf',
            },
            {
                icon: '🔍',
                badge: 'bts',
                badgeLabel: 'BTS SIO',
                title: 'Veille technologique',
                desc: 'Dossier de veille technologique réalisé au cours du BTS SIO sur les technologies web modernes.',
                date: '2026',
                file: 'assets/projets/Veille.pdf'
            },
            {
                icon: '📄',
                badge: 'bts',
                badgeLabel: 'BTS SIO',
                title: 'Curriculum Vitae 2026',
                desc: 'Mon CV à jour — Enzo Norguet, étudiant BTS SIO à la recherche d\'une alternance en Licence Pro.',
                date: '2026',
                file: 'assets/CV_2026_Norguet_Enzo.pdf',
            },
            {
                icon: '📊',
                badge: 'stage',
                badgeLabel: 'Stage',
                title: 'Fiche de procédure déploiement symfony sur serveur Linux/Debian',
                desc: 'Fiche de procédure réalisée en stage de 1è année pour pouvoir déployer une application symfony sur un serveur Linux/Debian.',
                date: '2026',
                file: 'assets/projets/Fiche_de_procédure_déploiement_symfony_sur_serveur_linux.pdf',
            },
            {
                icon: '📊',
                badge: 'bts',
                badgeLabel: 'BTS SIO',
                title: 'Fiche de procédure mise en place d\'un projet .NET 8 + Entity Framework',
                desc: 'Fiche de procédure réalisée afin de mettre en place un projet en .NET 8 + Entity Framework avec Rider.',
                date: '2026',
                file: 'assets/projets/Fiche_procédure_EF.pdf',
            },
            {
                icon: '📊',
                badge: 'stage',
                badgeLabel: 'Stage',
                title: 'Fiche de procédure Migration Symfony',
                desc: 'Fiche de procédure réalisée en stage de 1è année afin de réaliser la migration d\'une application Symfony en 5.4 vers Symfony 7',
                date: '2025',
                file: 'assets/projets/Fiche_procédure_migration_symfony.pdf',
            },
            {
                icon: '📊',
                badge: 'stage',
                badgeLabel: 'Stage',
                title: 'Fiche de procédure Symfony 7',
                desc: 'Fiche de procédure réalisée en stage de 1è année afin d\'apprendre Symfony avant de me lancer dans le projet de stage',
                date: '2025',
                file: 'assets/projets/Fiche_procédure_symfony7.pdf',
            },
            {
                icon: '📊',
                badge: 'stage',
                badgeLabel: 'Stage',
                title: 'Fiche de procédure PHP/POO',
                desc: 'Fiche de procédure réalisée en stage de 1è année pour avoir les bases nécessaires pour le projet du stage.',
                date: '2025',
                file: 'assets/projets/Fiche_procédure_php_poo.pdf',
            },
            {
                icon: '📊',
                badge: 'stage',
                badgeLabel: 'Stage',
                title: 'Fiche de procédure WSL',
                desc: 'Fiche de procédure réalisée en stage de 1è année pour installer WSL sous debian.',
                date: '2025',
                file: 'assets/projets/Fiche_procédure_wsl.pdf',
            },
            {
                icon: '📊',
                badge: 'stage',
                badgeLabel: 'Stage',
                title: 'Fiche de procédure Git/GitHub',
                desc: 'Fiche de procédure réalisé en stage de 1è année pour connaître le fonctionnement de Git et GitHub.',
                date: '2025',
                file: 'assets/projets/Fiche _procédure_Git_GitHub.pdf',
            },

        ];
    }

    getVeilleAxes(): VeilleAxe[] {
        return [
            {
                id: 'frameworks',
                icon: '🧩',
                title: 'Développement des frameworks front-end',
                intro: 'Suivi de l\'évolution du marché des frameworks JavaScript modernes : React, Vue, Svelte, Astro, Solid.js et leurs écosystèmes.',
                entries: [
                    {
                        date: 'Février 2025',
                        content: 'Le marché reste dominé par React, qui continue d\'être le framework le plus utilisé grâce à sa communauté, sa documentation et son écosystème riche. Des frameworks plus récents comme Svelte et Solid.js gagnent en popularité, notamment grâce à de meilleures performances. Next.js (React) et Nuxt (Vue) confirment leur rôle essentiel.',
                        source: 'Journal du Net',
                    },
                    {
                        date: 'Mars 2025',
                        content: 'L\'enquête CoderPad montre que les entreprises recherchent principalement des compétences React (33 %), mais aussi Vue.js (15,6 %) et Next.js (15 %). Svelte (3 %) reste marginal, mais attire déjà certaines startups.',
                        source: 'Le Monde Informatique',
                    },
                    {
                        date: 'Avril 2025',
                        content: 'Un rapport confirme que React est utilisé par 70 % des développeurs, Next.js par plus de la moitié, et Vue/Nuxt restent solides. L\'émergence d\'Astro et Svelte traduit une volonté de réduire le JavaScript côté client.',
                        source: 'Developpez.com',
                    },
                    {
                        date: 'Juin 2025',
                        content: 'Les React Server Components gagnent du terrain et deviennent une norme dans certaines startups, même si leur complexité technique freine une adoption massive.',
                        source: 'JDN',
                    },
                    {
                        date: 'Juillet 2025',
                        content: 'Svelte, Solid.js et Qwik se démarquent par leur rapidité et leur optimisation SEO, des atouts recherchés dans les projets orientés performance.',
                        source: 'ZDNet France',
                    },
                    {
                        date: 'Août 2025',
                        content: 'En France, React reste majoritaire (47,7 %), suivi par Vue.js (22,3 %), Next.js (11,2 %) et Svelte (1,1 %). Cette répartition illustre la préférence des entreprises pour des solutions éprouvées.',
                        source: 'LeMagIT',
                    },
                    {
                        date: 'Septembre 2025',
                        content: 'Montée en puissance d\'Astro pour les sites statiques et hybrides. Les développeurs apprécient son approche "islands architecture" qui réduit fortement le JavaScript côté client.',
                        source: 'Reddit (r/webdev), Frontend Focus',
                    },
                    {
                        date: 'Octobre 2025',
                        content: 'Vercel met en avant les avancées de Next.js avec une meilleure gestion du streaming et des Server Components. Certains développeurs critiquent cependant la complexité croissante de l\'écosystème React.',
                        source: 'Blog Vercel, Reddit',
                    },
                    {
                        date: 'Novembre 2025',
                        content: 'Svelte gagne en adoption dans les projets personnels et startups, notamment grâce à SvelteKit. Sur Reddit, beaucoup le décrivent comme "plus simple et plus intuitif que React".',
                        source: 'Reddit, Hacker News',
                    },
                    {
                        date: 'Décembre 2025',
                        content: 'Les tendances montrent un intérêt croissant pour les frameworks "full-stack" JavaScript comme Nuxt et Next.js, qui simplifient le développement (backend + frontend).',
                        source: 'State of JS discussions',
                    },
                    {
                        date: 'Janvier 2026',
                        content: 'Qwik attire l\'attention pour son approche "resumability", permettant un chargement quasi instantané. Les retours restent partagés : performant mais encore peu mature.',
                        source: 'Reddit',
                    },
                    {
                        date: 'Février 2026',
                        content: 'Les frameworks légers continuent de progresser. Solid.js est souvent cité dans les benchmarks comme l\'un des plus rapides. Cependant, React reste dominant dans les offres d\'emploi.',
                        source: 'Reddit, GitHub benchmarks',
                    },
                    {
                        date: 'Mars 2026',
                        content: 'L\'essor des outils intégrant directement l\'IA dans le développement front-end (génération de composants, design assisté) influence les frameworks. React et Vue adaptent leurs écosystèmes avec des plugins IA.',
                        source: 'Newsletters dev, GitHub trends',
                    },
                    {
                        date: 'Avril 2026',
                        content: 'Les développeurs discutent de plus en plus de la "fatigue JavaScript" : retour à des solutions plus simples ou hybrides (HTML-first avec Astro). Les frameworks modernes cherchent à simplifier leur DX.',
                        source: 'Reddit, Frontend Focus',
                    },
                    {
                        date: 'Mai 2026',
                        content: 'React reste leader, mais l\'écosystème se fragmente avec des choix plus spécialisés. Astro, Svelte et Qwik s\'installent durablement comme alternatives crédibles dans certains cas d\'usage.',
                        source: 'Synthèse newsletters, Reddit',
                    },
                ],
            },
            {
                id: 'ia-emploi',
                icon: '🤖',
                title: 'Évolutions du marché du travail dues à l\'IA',
                intro: 'Suivi de l\'impact de l\'intelligence artificielle sur les métiers du numérique, les compétences attendues et les transformations du marché de l\'emploi.',
                entries: [
                    {
                        date: 'Avril 2025',
                        content: 'Le baromètre Microsoft révèle que 2025 est une année clé pour l\'IA : 71 % des dirigeants veulent introduire des agents IA et 67 % envisagent de recruter pour ces compétences.',
                        source: 'Le Monde Informatique',
                    },
                    {
                        date: 'Juin 2025',
                        content: 'Le baromètre PwC note +273 % d\'offres d\'emploi liées à l\'IA entre 2019 et 2024, avec des salaires 56 % plus élevés en moyenne. La productivité des salariés a été multipliée par trois dans les secteurs où l\'IA est le plus implantée.',
                        source: 'La Tribune, Euronews Next',
                    },
                    {
                        date: 'Juillet 2025',
                        content: 'Les salaires flambent dans l\'IA (+56 %). 40 % des demandeurs d\'emploi utilisent déjà l\'IA pour optimiser CV et lettres. France Travail vise 300 000 personnes formées à l\'IA générative d\'ici fin 2025.',
                        source: 'La Tribune',
                    },
                    {
                        date: 'Août 2025',
                        content: 'L\'IA ne détruit pas massivement les emplois, mais transforme les compétences attendues vers plus de créativité et de gestion des outils d\'automatisation.',
                        source: 'Rebondir.fr',
                    },
                    {
                        date: 'Septembre 2025',
                        content: 'De nombreux témoignages indiquent que les développeurs doivent désormais maîtriser des outils comme ChatGPT ou GitHub Copilot pour rester compétitifs.',
                        source: 'Reddit (r/jobs, r/cscareerquestions)',
                    },
                    {
                        date: 'Octobre 2025',
                        content: 'Les entreprises commencent à intégrer officiellement l\'IA dans leurs fiches de poste. La maîtrise des outils d\'automatisation devient une compétence attendue, même pour les profils juniors.',
                        source: 'LinkedIn Jobs',
                    },
                    {
                        date: 'Novembre 2025',
                        content: 'Une inquiétude croissante émerge : certains développeurs craignent une réduction des postes juniors au profit de profils plus expérimentés assistés par l\'IA.',
                        source: 'Hacker News',
                    },
                    {
                        date: 'Décembre 2025',
                        content: 'Les entreprises adoptent des modèles hybrides "humain + IA". L\'IA est vue comme un copilote augmentant la productivité plutôt qu\'un remplaçant direct.',
                        source: 'Newsletters tech',
                    },
                    {
                        date: 'Janvier 2026',
                        content: 'Explosion des formations en ligne sur l\'IA (prompt engineering, automatisation). Les plateformes comme Coursera et Udemy constatent une forte hausse des inscriptions.',
                        source: 'Rapports plateformes e-learning',
                    },
                    {
                        date: 'Février 2026',
                        content: 'Les recruteurs valorisent de plus en plus les profils capables d\'intégrer l\'IA dans leurs workflows (automatisation de tests, génération de code, analyse de données).',
                        source: 'LinkedIn',
                    },
                    {
                        date: 'Mars 2026',
                        content: 'Apparition de nouveaux rôles comme "AI-assisted developer" ou "prompt engineer", même si ces titres restent encore flous dans les offres d\'emploi.',
                        source: 'Reddit',
                    },
                    {
                        date: 'Avril 2026',
                        content: 'Certains secteurs ralentissent leurs recrutements juniors mais augmentent les budgets pour former les employés à l\'IA. L\'adaptabilité devient une compétence clé.',
                        source: 'Analyses marché emploi tech',
                    },
                    {
                        date: 'Mai 2026',
                        content: 'Le marché se stabilise : l\'IA est désormais intégrée dans la majorité des métiers du numérique. Les profils les plus recherchés combinent développement, compréhension métier et usage efficace de l\'IA.',
                        source: 'Synthèse LinkedIn, Reddit',
                    },
                ],
            },
        ];
    }

    getSources(): Source[] {
        return [
            {name: 'Journal du Net', type: 'Actualités tech'},
            {name: 'Le Monde Informatique', type: 'Actualités IT'},
            {name: 'Hacker News', type: 'Communauté dev'},
            {name: 'Reddit (r/webdev)', type: 'Communauté dev'},
            {name: 'Frontend Focus', type: 'Newsletter'},
            {name: 'LinkedIn', type: 'Emploi & réseau'},
            {name: 'ZDNet France', type: 'Actualités tech'},
            {name: 'La Tribune', type: 'Économie & tech'},
        ];
    }
}

