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
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CourseService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
