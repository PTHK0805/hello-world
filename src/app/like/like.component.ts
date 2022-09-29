import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  inputs: ['item']
})
export class LikeComponent implements OnInit {

  @Input('likesCount') likesCount: number = 0;
  @Input('isActive') isActive: boolean = true;

  onClick() {
    this.isActive = !this.isActive;
    this.likesCount += (this.isActive) ? +1 : -1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
