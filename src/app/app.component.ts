import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coding Labs';

  constructor(private titleService: Title) {
    console.log(this.title);
  }

  ngOnInit(){
    this.titleService.setTitle(this.title);
  }
}
