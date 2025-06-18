import { Component } from '@angular/core';
import { ListEtudiantsComponent } from "../list-etudiants/list-etudiants.component";

@Component({
  selector: 'app-trombinoscope',
  standalone: true,
  imports: [ListEtudiantsComponent],
  templateUrl: './trombinoscope.component.html',
  styleUrl: './trombinoscope.component.scss'
})
export class TrombinoscopeComponent {


}
  