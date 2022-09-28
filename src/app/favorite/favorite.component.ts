import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  //styles: [
  //  `
  //  
  //  `
  //]
})
  
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: any;
  @Output('change') change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() { 
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite});
  }
  
}

export interface FavoriteChangedEventArgs{
  newValue: boolean
}
