import { BadInputError } from '../validators/bad-input';
import { NotFoundError } from './../validators/not-found-error';
import { AppError } from './../validators/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  //private postUrl = this.url + '/' + post.id;
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url).pipe(catchError((error: Response) => {
      console.log(error);
      if (error.status === 404)
        return throwError(() => new NotFoundError(error))
      return throwError(() => new AppError(error));
    }));
  }

  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(catchError((error: Response) => {
      if (error.status === 400)
        return throwError(() => new BadInputError());
      return throwError(() => new AppError());
    }));
  }

  updatePost(post: any, body: any) {
    return this.http.patch(this.url + '/' + post.id, body);
  }

  deletePost(id: any) {
    return this.http.delete(this.url + '/' + id)
      .pipe(catchError((error: Response) => {
        if (error.status === 204)
          return throwError(() => new NotFoundError());

        return throwError(() => new AppError(error));
      }))
  }
}
