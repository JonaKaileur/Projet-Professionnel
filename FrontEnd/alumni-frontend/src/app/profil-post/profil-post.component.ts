import { Component, OnInit } from '@angular/core';
import { Poste } from '../models/poste-model';
import { PosteService } from '../services/poste.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil-post.component.html',
  styleUrl: './profil-post.component.scss'
})
export class ProfilPostComponent implements OnInit {
  post!: Poste | undefined;
  posteId!: string;

  constructor(
    private route: ActivatedRoute,
    private posteService: PosteService
  ) {}

  ngOnInit(): void {
    this.posteId = this.route.snapshot.paramMap.get('id') || '';
    this.post = this.posteService.getPosteById(this.posteId);
  }
}
