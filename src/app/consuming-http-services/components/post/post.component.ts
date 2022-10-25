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
    this.postService.getAll()
      //.subscribe(response => {
      //  this.posts = response;
      //}, error => {
      //  alert('An unexpected error occurred');
      //  console.log(error);
      //})
      .subscribe({
        next: posts => this.posts = posts,

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
    this.posts.splice(0, 0, post);

    input.value = '';

    this.postService.create(post)
      //this.http.post(this.url, JSON.stringify(post)) /*  <or>  */
      //this.http.post(this.url, post)
      .subscribe({
        next: newPost => {
          post.id = newPost; /* <or> */
          //post = response;
          
          console.log('Respone : ', newPost)
          console.log('Post : ', post);
          
        },
        error: (err: AppError) => {
          this.posts.splice(0, 1);
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
    this.postService.update(post, { title: input.value })
      .subscribe({
        next: updatedPost => {
          console.log('Update Post : ', updatedPost);
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1, updatedPost);
        }
      });
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    //this.http.delete(this.url + '/' + post.id)
    this.postService.delete(300)
      .subscribe({
        next: () => {
          console.log('Delete Post : ', post);
        },
        error: (err: AppError) => {
          this.posts.splice(index, 0, post);
          if (err instanceof NotFoundError) {
            alert('This post has already been deleted.');
            console.log(err);
          }
          else throw err;

        }
      })
  }

}
