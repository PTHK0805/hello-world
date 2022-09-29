import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  title = 'hello-world';
//  post = {
//    title: 'Title',
//    isFavorite: true,
//  }
//
//  tweet = {
//    likesCount: 10,
//    isLike: false
//  }
//
//  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
//    console.log('Favorite changed: ', eventArgs);
//  }

  courses = ['HTML', 'CSS', 'Javascript', 'Angular'];

  doWeHaveCourses() {
    return (this.courses.length > 0) ? true : false;
  }
}
