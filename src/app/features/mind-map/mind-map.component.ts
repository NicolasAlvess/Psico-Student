// Arquivo: src/app/features/mind-map/mind-map.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mindMapData, MindMapNode } from './data/mind-map.data';
import { MindMapNodeComponent } from './mind-map-node/mind-map-node.component';
import { InfoModalComponent } from '../../shared/info-modal/info-modal.component';

@Component({
  selector: 'app-mind-map',
  standalone: true,
  imports: [CommonModule, MindMapNodeComponent, InfoModalComponent],
  templateUrl: './mind-map.component.html',
  styleUrls: ['./mind-map.component.css'],
})
export class MindMapComponent {
  public rootNode: MindMapNode = mindMapData;
  public expandedNodes = new Set<string>([this.rootNode.id]);
  public selectedNode: MindMapNode | null = null;

  public toggleNode(nodeId: string): void {
    if (this.expandedNodes.has(nodeId)) {
      this.expandedNodes.delete(nodeId);
    } else {
      this.expandedNodes.add(nodeId);
    }
  }

  public openInfoModal(node: MindMapNode): void {
    this.selectedNode = node;
  }

  public closeInfoModal(): void {
    this.selectedNode = null;
  }
}
