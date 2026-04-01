import { Component, inject, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [SectionLabelComponent, ScrollRevealDirective, NgClass, NgStyle],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent implements AfterViewInit {
  private svc = inject(PortfolioService);

  skillGroups = this.svc.getSkillGroups();
  techStack   = this.svc.getTechStack();
  primaryTech = this.svc.getPrimaryTech();

  @ViewChildren('barFill') barFills!: QueryList<ElementRef<HTMLElement>>;

  isPrimary(tech: string): boolean {
    return this.primaryTech.includes(tech);
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transform = 'scaleX(1)';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    this.barFills.forEach(ref => observer.observe(ref.nativeElement));
  }
}
