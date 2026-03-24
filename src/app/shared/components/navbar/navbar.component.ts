import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';

interface NavLink { label: string; href: string; }

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scrolled = signal(false);
  activeSection = signal('hero');

  links: NavLink[] = [
    { label: 'Accueil',      href: '#hero' },
    { label: 'Parcours',     href: '#parcours' },
    { label: 'Projets',      href: '#projets' },
    { label: 'Compétences',  href: '#competences' },
    { label: 'Documents',    href: '#documents' },
    { label: 'Veille',       href: '#veille' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);

    const sections = ['hero','parcours','projets','competences','documents','veille'];
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        this.activeSection.set(id);
        break;
      }
    }
  }

  scrollTo(href: string): void {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV(): void {
    const a = document.createElement('a');
    a.href = 'assets/CV_2026_Norguet_Enzo.pdf';
    a.download = 'CV_Enzo_Norguet_2026.pdf';
    a.click();
  }
}
