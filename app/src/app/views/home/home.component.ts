import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public clickedEvent: Event;

  childEventClicked(event: Event) {
    this.clickedEvent = event;
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
