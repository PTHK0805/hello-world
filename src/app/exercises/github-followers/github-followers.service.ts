import { HttpClient } from '@angular/common/http';
import { DataService } from './../../consuming-http-services/services/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService{

  constructor(http: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', http)
   }
}
