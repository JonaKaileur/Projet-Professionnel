import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { ListEtudiantsComponent } from '../list-etudiants/list-etudiants.component';


@Component({
  selector: 'app-header-banner',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.scss'
})
export class HeaderBannerComponent {

}
