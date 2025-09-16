// Arquivo: src/app/shared/info-modal/info-modal.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MindMapNode } from '../../features/mind-map/data/mind-map.data';

@Component({
  selector: 'app-info-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css'],
})
export class InfoModalComponent {
  @Input() node: MindMapNode | null = null;
  @Output() closeModal = new EventEmitter<void>();

  onClose(): void {
    this.closeModal.emit();
  }
}
