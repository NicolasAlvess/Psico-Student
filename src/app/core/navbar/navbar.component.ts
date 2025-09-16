import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 1. IMPORTE O ROUTERMODULE

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // 2. ADICIONE-O AQUI
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {}
