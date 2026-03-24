import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeroComponent } from './features/hero/hero.component';
import { ParcoursComponent } from './features/parcours/parcours.component';
import { ProjetsComponent } from './features/projets/projets.component';
import { CompetencesComponent } from './features/competences/competences.component';
import { DocumentsComponent } from './features/documents/documents.component';
import { VeilleComponent } from './features/veille/veille.component';
import { ScrollProgressComponent } from './shared/components/scroll-progress/scroll-progress.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ParcoursComponent,
    ProjetsComponent,
    CompetencesComponent,
    DocumentsComponent,
    VeilleComponent,
    ScrollProgressComponent,
  ],
  template: `
    <app-scroll-progress />
    <app-navbar />
    <main>
      <app-hero />
      <div class="section-divider"></div>
      <app-parcours />
      <div class="section-divider"></div>
      <app-projets />
      <div class="section-divider"></div>
      <app-competences />
      <div class="section-divider"></div>
      <app-documents />
      <div class="section-divider"></div>
      <app-veille />
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
