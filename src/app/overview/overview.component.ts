import { Component, Input, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() messageReceiveFromChild: string | undefined;

  public myObservable: any

  constructor() { }

  ngOnInit(): void {
    this.myObservable = of('Some text').pipe(delay(3000))
  }

}
