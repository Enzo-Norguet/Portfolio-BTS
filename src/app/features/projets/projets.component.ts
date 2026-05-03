import {Component, inject, signal} from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { NgClass } from '@angular/common';
import {Projet} from "../../core/models/portfolio.models";
import {ProjetModalComponent} from "../../shared/components/projet-modal/projet-modal.component";

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [SectionLabelComponent, ScrollRevealDirective, NgClass, ProjetModalComponent],
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
})
export class ProjetsComponent {
  private svc = inject(PortfolioService);
  projets = this.svc.getProjets();

  selectedProjet = signal<Projet | null>(null);
  modalOpen      = signal(false);

  openModal(projet: Projet): void {
    this.selectedProjet.set(projet);
    this.modalOpen.set(true);
  }

  closeModal(): void {
    this.modalOpen.set(false);
    setTimeout(() => this.selectedProjet.set(null), 200);
  }
}