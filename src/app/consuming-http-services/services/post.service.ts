import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{

  //private postUrl = this.url + '/' + post.id;
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
   }
}
