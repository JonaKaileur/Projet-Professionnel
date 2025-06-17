import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListPostsComponent } from "../list-posts/list-posts.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,ListPostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
