import {Component, OnInit, ViewChild} from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'ngrx';
  @ViewChild('card')
  card: HomeComponent;


  onClicked($event: any) {
    console.log($event, 'event');
    console.log(this.card, 'card');
  }
}
