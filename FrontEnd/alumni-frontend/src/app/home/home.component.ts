import { Component } from '@angular/core';
import { HeaderBannerComponent } from '../header-banner/header-banner.component';
import { RouterOutlet } from '@angular/router';
import { ListEtudiantsComponent } from "../list-etudiants/list-etudiants.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ListEtudiantsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
