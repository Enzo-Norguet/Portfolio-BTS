import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [SectionLabelComponent, ScrollRevealDirective, NgClass],
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
})
export class ProjetsComponent {
  private svc = inject(PortfolioService);
  projets = this.svc.getProjets();
}
