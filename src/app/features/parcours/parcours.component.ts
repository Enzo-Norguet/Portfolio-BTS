import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [SectionLabelComponent, ScrollRevealDirective, NgClass],
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss'],
})
export class ParcoursComponent {
  private svc = inject(PortfolioService);
  experiences = this.svc.getExperiences();
  formations  = this.svc.getFormations();
}
