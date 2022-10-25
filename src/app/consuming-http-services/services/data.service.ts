import { BadInputError } from '../validators/bad-input';
import { NotFoundError } from './../validators/not-found-error';
import { AppError } from './../validators/app-error';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //private postUrl = this.url + '/' + post.id;
  constructor(@Inject(String) private url: string, private http: HttpClient) { }  /* <or> */
  //constructor(@Inject('url') private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(catchError(this.handleError));
  }

  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  update(resource: any, body: any) {
    return this.http.patch(this.url + '/' + resource.id, body)
      .pipe(catchError(this.handleError));
  }

  delete(id: any) {
    return this.http.delete(this.url + '/' + id)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(() => new BadInputError(error));
    
    if (error.status === 404)
      return throwError(() => new NotFoundError(error));

    return throwError(() => new AppError(error));
  }
}
