import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
  @Input() rating: number;
  starWidth: number = 75;
  width: number;
  // Define the event as EventEmitter with payload <string>. similar to delegate
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.width = (this.rating * this.starWidth) / 5;
  }

  OnClick(): void {
    // rais the event to the container
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}