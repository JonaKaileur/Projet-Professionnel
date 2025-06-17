import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { Poste } from '../models/poste-model';
import { PosteService } from '../services/poste.service';
Poste
@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.scss'
})
export class ListPostsComponent implements OnInit{
  posts!: Poste[]; // <-- tableau de Postes
  
  constructor(private posteService: PosteService) {}

  ngOnInit(): void {
    this.posteService.getPostes().subscribe(data => {
      this.posts = data;
      console.log(data);
    });
  }
}