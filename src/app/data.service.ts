import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'ford', 'chevrolet', 'buick'
  ];

  myData() {
    return "this is the data";
  }
}
