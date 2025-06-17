import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PosteService } from '../services/poste.service';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss'
})
export class AddPostComponent {
  constructor(private posteService: PosteService, private router: Router){}

  /*
  addPost(Description: string, ImageUrl: string) {
    this.posteService.addPost(Description, ImageUrl).then(()=>{});  // Call the service to add a post
    this.router.navigate(['/home']);  // Navigate to the next route after adding the post

  }
    */
}
