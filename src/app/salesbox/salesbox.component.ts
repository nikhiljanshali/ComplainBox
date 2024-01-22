import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../common/interface/book';
import { Userdetails } from '../common/interface/userdetails';

@Component({
  selector: 'app-salesbox',
  templateUrl: './salesbox.component.html',
  styleUrls: ['./salesbox.component.css']
})
export class SalesboxComponent implements OnInit {

  @Input() bookList: Book[] | undefined;
  @Input() userList: Userdetails[] | undefined;


  @Output() sendMeToParent = new EventEmitter<string>();

  @Input() getChildMessage: string | undefined;

  constructor() { }


  ngOnInit(): void {
    // console.log('books: ' + this.bookList);
  }

  sendToParent($event: any): void {
    console.log('Test', $event.name);

    this.sendMeToParent.emit($event.name);
  }

}
