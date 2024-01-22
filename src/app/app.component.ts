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
    console.log('%c Coding Labs! ', 'background: #222; color: #bada55');
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
