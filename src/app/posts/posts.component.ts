import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './shared/model';
import { PostsService } from './shared/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts$ : Observable<Post[]> = this.postsService.getPosts()

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts()
  }

  
}
