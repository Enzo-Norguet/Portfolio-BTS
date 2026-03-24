import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  scrollToProjects(): void {
    document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV(): void {
    const a = document.createElement('a');
    a.href = 'assets/CV_2026_Norguet_Enzo.pdf';
    a.download = 'CV_Enzo_Norguet_2026.pdf';
    a.click();
  }
}
