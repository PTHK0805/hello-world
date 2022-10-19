import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

}
