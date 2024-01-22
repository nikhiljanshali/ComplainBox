import { Component, Input, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public myObservableText = "This is my Observable Text";

  @Input() childMessage: string | undefined;
  @Input() messageReceiveFromChild: string | undefined;

  public myObservable: any

  constructor() { }

  ngOnInit(): void {
    this.myObservable = of(this.myObservableText).pipe(delay(3000))
  }

}
