import { BadInputError } from '../../validators/bad-input';
import { NotFoundError } from './../../validators/not-found-error';
import { AppError } from './../../validators/app-error';
import { PostService } from './../../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any;

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts()
      //.subscribe(response => {
      //  this.posts = response;
      //}, error => {
      //  alert('An unexpected error occurred');
      //  console.log(error);
      //})
      .subscribe({
        next: (response) => {
          this.posts = response;
        },
        error: (err: AppError) => {
          if (err instanceof NotFoundError) {
            alert('Request URL does not Found');
          }
          
          else throw err;
        },
      })

  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.postService.createPost(post)
      //this.http.post(this.url, JSON.stringify(post)) /*  <or>  */
      //this.http.post(this.url, post)
      .subscribe({
        next: response => {
          post.id = response; /* <or> */
          //post = response;
          console.log('Respone : ', response)
          console.log('Post : ', post);
          this.posts.splice(0, 0, post);
        },
        error: (err: AppError) => {
          if (err instanceof BadInputError) {
            alert('Bad Input');
            //this.form.setErrors(err.json());
          }
          else throw err;
        }
      })
  }

  updatePost(post: any, input: HTMLInputElement) {
    //this.http.patch(this.url + '/' + post.id, { title: input.value })
    this.postService.updatePost(post, { title: input.value })
      .subscribe({
        next: response => {
          console.log('Update Post : ', response);
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1, response);
        }
      });
  }

  deletePost(post: any) {
    //this.http.delete(this.url + '/' + post.id)
    this.postService.deletePost(300)
      .subscribe({
        next: response => {
          let index = this.posts.indexOf(post);
          let deletedPost = this.posts.splice(index, 1);
          console.log('Delete Post : ', deletedPost[0]);
        },
        error: (err: AppError) => {
          if (err instanceof NotFoundError) {
            alert('This post has already been deleted.');
            console.log(err);
          }
          else throw err;

        }
      })
  }

}
