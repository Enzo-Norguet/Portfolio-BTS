import { Component, inject, signal, computed } from '@angular/core';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionLabelComponent } from '../../shared/components/section-label/section-label.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { NgClass } from '@angular/common';
import { Document } from '../../core/models/portfolio.models';

type FilterCat = 'all' | 'bts' | 'stage' | 'perso';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [SectionLabelComponent, ScrollRevealDirective, NgClass],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent {
  private svc = inject(PortfolioService);

  allDocs   = this.svc.getDocuments();
  activeFilter = signal<FilterCat>('all');

  filters: { key: FilterCat; label: string }[] = [
    { key: 'all',   label: 'Tous' },
    { key: 'bts',   label: 'BTS SIO' },
    { key: 'stage', label: 'Stages' },
  ];

  filteredDocs = computed<Document[]>(() => {
    const cat = this.activeFilter();
    return cat === 'all' ? this.allDocs : this.allDocs.filter(d => d.badge === cat);
  });

  setFilter(cat: FilterCat): void {
    this.activeFilter.set(cat);
  }

  downloadDoc(doc: Document): void {
    if (doc.file) {
      const a = document.createElement('a');
      a.href = doc.file;
      a.download = doc.file.split('/').pop() ?? 'document';
      a.click();
    }
  }

  viewDoc(doc: Document): void {
    if (doc.file) {
      window.open(doc.file, '_blank');
    }
  }
}
