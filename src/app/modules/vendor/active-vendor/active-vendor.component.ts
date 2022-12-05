import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vendor } from 'src/app/vendor';


@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  @Input() Active1?: Vendor[];
  @Output() vendor = new EventEmitter();
  Onclick(vendor:Vendor){
    this.vendor.emit(vendor);
    alert("button is clicked");
    }

  constructor() { }

  ngOnInit(): void {
  }

}
