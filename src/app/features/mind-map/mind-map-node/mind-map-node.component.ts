// Arquivo: src/app/features/mind-map/mind-map-node/mind-map-node.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MindMapNode } from '../data/mind-map.data';

@Component({
  selector: 'app-mind-map-node',
  standalone: true,
  imports: [CommonModule, MindMapNodeComponent],
  templateUrl: './mind-map-node.component.html',
  // ATENÇÃO: Garanta que esta linha aponta para seu arquivo .css
  styleUrls: ['./mind-map-node.component.css'],
})
export class MindMapNodeComponent {
  @Input() node!: MindMapNode;
  @Input() level!: number;
  @Input() isNodeExpanded!: boolean;
  @Input() childrenExpandedStatus!: Set<string>;

  @Output() toggleExpand = new EventEmitter<string>();
  @Output() showDetails = new EventEmitter<MindMapNode>();

  onNodeClick(): void {
    if (this.node.children && this.node.children.length > 0) {
      this.toggleExpand.emit(this.node.id);
    }
  }

  onChildToggle(nodeId: string): void {
    this.toggleExpand.emit(nodeId);
  }

  onShowDetailsClick(event: MouseEvent): void {
    event.stopPropagation();
    this.showDetails.emit(this.node);
  }

  onChildShowDetails(node: MindMapNode): void {
    this.showDetails.emit(node);
  }

  getCardClass(): string {
    switch (this.level) {
      case 0:
        return 'bg-dark text-white';
      case 1:
        return 'bg-primary text-white';
      case 2:
        return 'bg-light text-dark border';
      case 3:
        return 'bg-success text-white';
      default:
        return 'bg-secondary text-white';
    }
  }
}
