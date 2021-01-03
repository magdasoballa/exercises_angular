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

  getDetails(id: number) {
    const link = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.get<Post>(link)
  }
}
