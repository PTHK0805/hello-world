import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthor() {
    return ['author1', 'author2', 'author3'];
  }
}
