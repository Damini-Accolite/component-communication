import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/vendor';
import { VendorServiceService } from 'src/app/vendor-service.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  sendblock(vendor:Vendor){
    this.service.blockedList.push(vendor);
  }
    constructor(private service: VendorServiceService) {}
    Active: Vendor[] = this.service.getList();
    Blocked:Vendor[]=this.service.blockedList;

  ngOnInit(): void {
  }

}
