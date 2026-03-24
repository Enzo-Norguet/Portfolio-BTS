import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year = new Date().getFullYear();

  downloadCV(): void {
    const a = document.createElement('a');
    a.href = 'assets/CV_2026_Norguet_Enzo.pdf';
    a.download = 'CV_Enzo_Norguet_2026.pdf';
    a.click();
  }
}
