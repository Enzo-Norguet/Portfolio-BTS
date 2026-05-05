import { Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { VeilleAxe } from '../../core/models/portfolio.models';

type Tab = 'sujets' | 'outils' | 'apports';

interface OutilCategory {
  icon: string;
  title: string;
  desc: string;
  items: string[];
}

interface Apport {
  icon: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-veille',
  standalone: true,
  imports: [SectionLabelComponent, ScrollRevealDirective],
  templateUrl: './veille.component.html',
  styleUrls: ['./veille.component.scss'],
})
export class VeilleComponent {
  private svc = inject(PortfolioService);
  axes: VeilleAxe[] = this.svc.getVeilleAxes();

  activeTab    = signal<Tab>('sujets');
  expandedAxe  = signal<string | null>(null);
  expandedEntry = signal<string | null>(null);

  setTab(tab: Tab): void { this.activeTab.set(tab); }

  toggleAxeExpanded(id: string): void {
    this.expandedAxe.update(v => v === id ? null : id);
    this.expandedEntry.set(null);
  }

  toggleEntry(key: string): void {
    this.expandedEntry.update(v => v === key ? null : key);
  }

  outilsCategories: OutilCategory[] = [
    {
      icon: '📰',
      title: 'Presse & newsletters',
      desc: 'Sources d\'information spécialisées suivies régulièrement.',
      items: [
        'Journal du Net — actualités tech françaises',
        'Le Monde Informatique — IT & entreprise',
        'ZDNet France — tendances numériques',
        'Frontend Focus — newsletter hebdo front-end',
        'La Tribune — économie & numérique',
      ],
    },
    {
      icon: '💬',
      title: 'Communautés & forums',
      desc: 'Forums et réseaux sociaux techniques pour suivre les retours terrain.',
      items: [
        'Reddit — r/webdev, r/javascript, r/jobs',
        'Hacker News — discussions tech & startups',
        'Dev.to — articles de développeurs',
        'LinkedIn — tendances emploi & recrutement',
      ],
    },
    {
      icon: '📊',
      title: 'Rapports & études',
      desc: 'Baromètres et enquêtes annuelles sur le marché du numérique.',
      items: [
        'State of JS — enquête annuelle frameworks',
        'CoderPad — tendances recrutement dev',
        'Baromètre Microsoft Work Trend Index',
        'Rapports PwC — marché de l\'IA',
        'LeMagIT — statistiques frameworks France',
      ],
    },
    {
      icon: '🔗',
      title: 'Blogs officiels',
      desc: 'Sources primaires des éditeurs et plateformes tech.',
      items: [
        'Blog Vercel — Next.js & déploiement',
        'Developpez.com — communauté FR',
        'GitHub Trends — projets open source',
        'Euronews Tech — impact sociétal du numérique',
      ],
    },
  ];

  apports: Apport[] = [
    {
      icon: '🧭',
      title: 'Orientation technologique',
      body: 'Comprendre pourquoi React domine le marché tout en identifiant les alternatives émergentes (Svelte, Astro, Solid.js) m\'a permis de mieux choisir mes technologies d\'apprentissage et de me positionner par rapport aux attentes du marché.',
    },
    {
      icon: '🤖',
      title: 'Anticipation de l\'impact de l\'IA',
      body: 'Suivre l\'évolution du marché de l\'emploi face à l\'IA m\'a préparé à intégrer ces outils dans ma pratique dès maintenant : utilisation de GitHub Copilot, compréhension du prompt engineering, et adaptation de mon profil aux nouvelles attentes des recruteurs.',
    },
    {
      icon: '📈',
      title: 'Vision du marché de l\'emploi',
      body: 'Les données chiffrées (+273 % d\'offres IA, salaires +56 %) et les tendances observées m\'ont aidé à construire un profil orienté vers les compétences les plus recherchées, notamment la combinaison développement + maîtrise des outils IA.',
    },
    {
      icon: '🔍',
      title: 'Esprit critique & analyse',
      body: 'La confrontation de sources variées (presse officielle, forums, études) m\'a appris à recouper l\'information, distinguer les tendances réelles des effets d\'annonce, et développer un regard analytique sur l\'évolution du secteur.',
    },
    {
      icon: '💡',
      title: 'Curiosité technique',
      body: 'Découvrir des technologies comme Qwik, Solid.js ou l\'approche "islands architecture" d\'Astro a nourri ma curiosité et m\'a donné envie d\'expérimenter au-delà de ma stack habituelle Angular/.NET.',
    },
    {
      icon: '🗂️',
      title: 'Méthodologie de veille',
      body: 'Ce suivi mensuel m\'a permis de structurer une vraie démarche de veille : identifier des sources fiables, organiser l\'information chronologiquement et en extraire des tendances exploitables pour ma carrière.',
    },
  ];
}