import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',],  // Corrección aquí
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {}
