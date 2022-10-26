import { DataService } from './consuming-http-services/services/data.service';
import { AppErrorHandler } from './consuming-http-services/validators/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthorsService } from './authors/authors.service';

import { CourseService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormExerciseComponent } from './exercises/form-exercise/form-exercise.component';
import { SignUpFormComponent } from './reactive-form/signup-form/signup-form.component';
import { NewCourseFormComponent } from './reactive-form/new-course-form/new-course-form.component';
import { PostComponent } from './consuming-http-services/components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubFollowersComponent } from './exercises/github-followers/github-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ContactFormComponent,
    FormExerciseComponent,
    SignUpFormComponent,
    NewCourseFormComponent,
    PostComponent,
    GithubFollowersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    AuthorsService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
