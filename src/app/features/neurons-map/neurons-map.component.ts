import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Caminhos verificados:
import { neuronsMapData } from '../mind-map/data/neurons-map.data';
import { MindMapNode } from '../mind-map/data/mind-map.data';
import { MindMapNodeComponent } from '../mind-map/mind-map-node/mind-map-node.component';
import { InfoModalComponent } from '../../shared/info-modal/info-modal.component';

@Component({
  selector: 'app-neurons-map',
  standalone: true,
  // Imports de componentes verificados:
  imports: [CommonModule, MindMapNodeComponent, InfoModalComponent],
  templateUrl: './neurons-map.component.html',
  styleUrls: ['./neurons-map.component.css']
})
export class NeuronsMapComponent {
  public rootNode: MindMapNode = neuronsMapData;
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