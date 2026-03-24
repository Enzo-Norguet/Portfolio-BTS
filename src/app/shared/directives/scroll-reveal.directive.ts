import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() appScrollReveal: 'fade' | 'slide-left' | 'slide-right' | 'slide-up' = 'slide-up';
  @Input() revealDelay = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const el = this.el.nativeElement as HTMLElement;
    el.style.opacity = '0';
    el.style.transition = `opacity 0.6s ease ${this.revealDelay}ms, transform 0.6s ease ${this.revealDelay}ms`;

    switch (this.appScrollReveal) {
      case 'slide-left':  el.style.transform = 'translateX(-30px)'; break;
      case 'slide-right': el.style.transform = 'translateX(30px)';  break;
      case 'fade':        el.style.transform = 'none';               break;
      default:            el.style.transform = 'translateY(30px)';   break;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate(0)';
          this.observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
