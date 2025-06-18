import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PosteService } from '../services/poste.service';
import { Poste } from '../models/poste-model';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss'
})
export class AddPostComponent {
  
  constructor(private posteService: PosteService, private router: Router){}

  post  : Poste = new Poste() ;
  

  addPost(Titre: string,Description : string, ImageUrl : string){
    
    this.post.name_user = "jojo11";
    this.post.description = Description;
    this.post.imageurl = ImageUrl;
    this.post.titre = Titre;
    this.posteService.creePost(this.post).subscribe({next : () => {console.log("Post ajoutée!!!")}});

  }
  
  /*
  addPost(Description: string, ImageUrl: string) {
    this.posteService.addPost(Description, ImageUrl).then(()=>{});  // Call the service to add a post
    this.router.navigate(['/home']);  // Navigate to the next route after adding the post

  }
    */
}
