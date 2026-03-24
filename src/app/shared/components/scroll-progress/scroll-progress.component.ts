import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `<div class="scroll-progress" [style.width.%]="progress()"></div>`,
  styles: [`
    .scroll-progress {
      position: fixed;
      top: 0; left: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
      z-index: 200;
      transition: width 0.1s linear;
      box-shadow: 0 0 8px rgba(99,179,237,0.5);
    }
  `],
})
export class ScrollProgressComponent {
  progress = signal(0);

  @HostListener('window:scroll')
  onScroll(): void {
    const max = document.body.scrollHeight - window.innerHeight;
    this.progress.set(max > 0 ? (window.scrollY / max) * 100 : 0);
  }
}
