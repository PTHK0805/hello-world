import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { 
    http.get(this.url)
      .subscribe(response => {
        this.posts = response;
      })
    }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.http.post(this.url, JSON.stringify(post)) /*  <or>  */
    //this.http.post(this.url, post)
      .subscribe(response => {
        post.id = response; /* <or> */
        //post = response;
        console.log('Respone : ',response)
        console.log('Post : ',post);
        this.posts.splice(0,0 , post);
      })
  }

  updatePost(post: any, input: HTMLInputElement) {
    this.http.patch(this.url + '/' + post.id, { title: input.value })
      .subscribe(response => {  
        console.log('Update Post : ',response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1, response);
      });
  }

  deletePost(post: any) {
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
       let deletedPost = this.posts.splice(index, 1);
        console.log('Delete Post : ',deletedPost[0]);
      })
  }

  ngOnInit(): void {
  }

}