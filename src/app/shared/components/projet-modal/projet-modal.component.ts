import {
    Component, Input, Output, EventEmitter,
    HostListener, signal, OnChanges, SimpleChanges
} from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { Projet, ProjetImage } from '../../../core/models/portfolio.models';

@Component({
    selector: 'app-projet-modal',
    standalone: true,
    imports: [NgClass, NgStyle],
    templateUrl: './projet-modal.component.html',
    styleUrls: ['./projet-modal.component.scss'],
})
export class ProjetModalComponent implements OnChanges {
    @Input() projet: Projet | null = null;
    @Input() isOpen = false;
    @Output() closed = new EventEmitter<void>();

    activeImageIndex = signal(0);
    imageLoading = signal(true);

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen']?.currentValue === true) {
            this.activeImageIndex.set(0);
            this.imageLoading.set(true);
            document.body.style.overflow = 'hidden';
        } else if (changes['isOpen']?.currentValue === false) {
            document.body.style.overflow = '';
        }
    }

    close(): void {
        this.closed.emit();
    }

    prevImage(): void {
        const len = this.projet?.images?.length ?? 0;
        if (len === 0) return;
        this.activeImageIndex.update(i => (i - 1 + len) % len);
        this.imageLoading.set(true);
    }

    nextImage(): void {
        const len = this.projet?.images?.length ?? 0;
        if (len === 0) return;
        this.activeImageIndex.update(i => (i + 1) % len);
        this.imageLoading.set(true);
    }

    selectImage(index: number): void {
        this.activeImageIndex.set(index);
        this.imageLoading.set(true);
    }

    onImageLoad(): void {
        this.imageLoading.set(false);
    }

    get hasImages(): boolean {
        return (this.projet?.images?.length ?? 0) > 0;
    }

    get currentImage(): ProjetImage | null {
        return this.projet?.images?.[this.activeImageIndex()] ?? null;
    }

    @HostListener('document:keydown.escape')
    onEscape(): void {
        if (this.isOpen) this.close();
    }

    onBackdropClick(event: MouseEvent): void {
        if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
            this.close();
        }
    }
}