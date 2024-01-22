import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../common/interface/book';
import { Userdetails } from '../common/interface/userdetails';
import { OverviewComponent } from '../overview/overview.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  /**
   * Variable
   */
  public parentMessage: string | undefined;
  public getChildMessage: string | undefined;

  public books: Book[] = [
    { id: 1, name: "Book 1", price: 500, image: "../../assets/images/blueBag.jpg" },
    { id: 2, name: "Book 2", price: 200, image: "../../assets/images/jeans.jpg" },
    { id: 3, name: "Book 3", price: 300, image: "../../assets/images/nike-min.jpg" },
    { id: 4, name: "Book 4", price: 400, image: "../../assets/images/scarves.jpg" },
    { id: 5, name: "Book 5", price: 400, image: "../../assets/images/bag.jpg" },
    { id: 6, name: "Book 6", price: 400, image: "../../assets/images/shirt.jpg" },
  ];

  public userdetails: Userdetails[] = [
    {
      "id": 1,
      first_name: "Hastie",
      last_name: "Buglar",
      email: "hbuglar0@dell.com",
      gender: "Male",
      ip_address: "48.83.106.54"
    }, {
      "id": 2,
      first_name: "Lawrence",
      last_name: "Yakov",
      email: "lyakov1@bbc.co.uk",
      gender: "Genderqueer",
      ip_address: "100.199.52.162"
    }, {
      "id": 3,
      first_name: "Carolyn",
      last_name: "Hunnicutt",
      email: "chunnicutt2@aol.com",
      gender: "Female",
      ip_address: "140.211.44.35"
    }, {
      "id": 4,
      first_name: "Lavina",
      last_name: "Bazell",
      email: "lbazell3@ycombinator.com",
      gender: "Female",
      ip_address: "66.133.166.110"
    }, {
      "id": 5,
      first_name: "Ambrosi",
      last_name: "Trimmill",
      email: "atrimmill4@goo.gl",
      gender: "Male",
      ip_address: "31.60.37.77"
    }, {
      "id": 6,
      first_name: "Albert",
      last_name: "Galvin",
      email: "agalvin5@youtu.be",
      gender: "Male",
      ip_address: "117.250.49.225"
    }, {
      "id": 7,
      first_name: "Wood",
      last_name: "Mimmack",
      email: "wmimmack6@bluehost.com",
      gender: "Male",
      ip_address: "152.58.15.232"
    }, {
      "id": 8,
      first_name: "Garvey",
      last_name: "Ambrogetti",
      email: "gambrogetti7@privacy.gov.au",
      gender: "Male",
      ip_address: "202.113.200.20"
    }, {
      "id": 9,
      first_name: "Gian",
      last_name: "Coxhell",
      email: "gcoxhell8@nature.com",
      gender: "Male",
      ip_address: "145.10.100.209"
    }, {
      "id": 10,
      first_name: "Lianne",
      last_name: "Dessant",
      email: "ldessant9@yolasite.com",
      gender: "Female",
      ip_address: "182.62.197.134"
    }
  ]

  @ViewChild(OverviewComponent) overViewChildComponent: any | undefined;

  public myObservableMessage: string | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    this.myObservableMessage = this.overViewChildComponent.myObservable;
  }

  ngOnInit(): void {
    this.parentMessage = "Child component I'm your Parent component";
  }

  receiveMessage($event: any) {
    console.log('Message from Child : ', $event);
    this.getChildMessage = $event;
  }


}
