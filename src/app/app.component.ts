import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageModule } from 'primeng/image';
import {  SidebarComponent  } from "./components/sidebar/sidebar.component";
import {  Barre } from "./components/barre/barre.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent ,Barre],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dashbord';
}
