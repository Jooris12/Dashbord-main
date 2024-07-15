import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { RouterOutlet } from '@angular/router';
import { History } from "./components/hystorique/hystorique.component";
import { ImageModule } from 'primeng/image';
import {  SidebarComponent  } from "./components/sidebar/sidebar.component";
import {  Barre } from "./components/barre/barre.component";
import {  Switch } from "./components/switchbouton/switchbouton.component";
import {  Goal } from "./components/goal/goal.component";
import {  ProgressBar } from "./components/progressbar/progressbar.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, Barre, Switch,History ,Goal,ProgressBar],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dashbord';
}
