import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  //private postUrl = this.url + '/' + post.id;
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post:any) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post: any, body: any) {
    return this.http.patch(this.url + '/' + post.id, body)
  }

  deletePost(id:any) {
    return this.http.delete(this.url + '/' + id);
  }
}
