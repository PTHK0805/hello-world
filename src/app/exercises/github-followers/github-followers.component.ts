
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from 'src/app/exercises/github-followers/github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any;
 
  constructor(private service: GithubFollowersService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(followers => {
      this.followers = followers
      console.log(followers);
    })
    
   
  }

}
