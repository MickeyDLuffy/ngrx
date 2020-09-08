import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mikcey: string;

  @Output()
  cardClicked: EventEmitter<any>
  constructor() { }

  ngOnInit(): void {

  }

  emititng() {
    this.cardClicked.emit('clicking');
  }
}
