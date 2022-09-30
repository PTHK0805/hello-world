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
  courseNumber = 0;
  courseId = 0;
  secondCourses = [
    { id: ++this.courseId, name: `course${++this.courseNumber}` },
    { id: ++this.courseId, name: `course${++this.courseNumber}` },
    { id: ++this.courseId, name: `course${++this.courseNumber}` },
  ]

  onAdd() {
    this.secondCourses.push({ id: ++this.courseId, name: `course${++this.courseNumber}` });
  }

  onRemove(course: any) {
    let index = this.secondCourses.indexOf(course);
    this.secondCourses.splice(index, 1);
  }
  doWeHaveCourses() {
    return (this.courses.length > 0) ? true : false;
  }
}
