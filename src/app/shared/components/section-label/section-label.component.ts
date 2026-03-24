import { Component, Input } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-section-label',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <div class="section-label" appScrollReveal="slide-left">
      <span class="line"></span>
      {{ text }}
    </div>
    <h2 class="section-title" appScrollReveal='fade' [revealDelay]="100">{{ title }}</h2>
  `,
  styles: [`
    .section-label {
      font-family: var(--font-body);
      font-size: 10px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .line {
      display: inline-block;
      width: 32px;
      height: 1px;
      background: var(--accent);
    }
    .section-title {
      font-family: var(--font-display);
      font-size: clamp(32px, 5vw, 52px);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -1.5px;
      color: var(--text);
      margin-bottom: 48px;
    }
  `],
})
export class SectionLabelComponent {
  @Input() text = '';
  @Input() title = '';
}
