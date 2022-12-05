import { Injectable } from '@angular/core';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  VendorList : Vendor[] = [
    { name : 'Damini Kumari', age : 23, city : 'Muzaffarpur'},
    {name : 'Ankit Raj', age : 23, city : 'Muzaffarpur'},
    {name : 'Ritiksha Singh', age : 23, city : 'Gorakhpur'},
    {name : 'Twinkle Das', age : 22, city : 'Jaipur'}
  ]

  getList(){
    return this.VendorList;
  }

  blockedList:Vendor[] = [];

  constructor() { }
}
