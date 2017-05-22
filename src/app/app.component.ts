import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <h1 [ngStyle]="titleStyles" >good jb</h1>
    <img bind-src="angularLogo">
    <img src="{{angularLogo}}">
    <img [src]="angularLogo" >
    <button [disabled] = "buttonStatus"> My Button</button>

    <button (click)="myEvent($event)"> Event Button</button>
    <p>{{someProperty}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private dataService: DataService) {

}

someProperty: string = '';

ngOnInit() {
  console.log(this.dataService.cars);
  this.someProperty = this.dataService.myData();
}

  angularLogo = 'https://angular.io/resources/images/logos/angular/angular.png';
  buttonStatus = false;

  myEvent(event) {
    console.log(event);
  }
  titleClass = 'red-title';
  titleClasses = {
    'red-title': true,
    'large-title': true
  }
  titleStyle = false;
  titleStyles = {
    'color': 'red',
    'font-size': '50px'
  }
}