import {Component, OnInit, ViewChild} from '@angular/core';
import {TestComponent} from './test/test.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  name = 'Afetsi';

  @ViewChild('test')
  test: TestComponent;
  constructor() { }

  ngOnInit(): void {
    console.log(this.test, 'Test =>');
  }

}
