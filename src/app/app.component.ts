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
  viewMode = 'map';
  secondCourses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
  ]

  doWeHaveCourses() {
    return (this.courses.length > 0) ? true : false;
  }
}
