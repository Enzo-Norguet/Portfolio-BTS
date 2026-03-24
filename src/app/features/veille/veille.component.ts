import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-veille',
  standalone: true,
  imports: [SectionLabelComponent, ScrollRevealDirective],
  templateUrl: './veille.component.html',
  styleUrls: ['./veille.component.scss'],
})
export class VeilleComponent {
  private svc = inject(PortfolioService);
  veilleItems = this.svc.getVeille();
  sources     = this.svc.getSources();
}
