import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(){
    const posts = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Post[]>(posts);
  }
}
