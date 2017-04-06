import { Component, OnInit, NgZone } from '@angular/core';
import { Address, User } from '../address';
import { MapService } from '../map.service';
import { Observable } from 'rxjs/Observable';
import { AddressService } from '../address.service';

import 'rxjs/add/operator/do';

@Component({
  selector: 'app-new-map',
  templateUrl: './new-map.component.html',
  styleUrls: ['./new-map.component.css']
})
export class NewMapComponent implements OnInit {
  // address = '145 Manor Way, Mitcham, Surrey'
  // var address = "1045 mission street san francisco";
  lat: number;
  lng: number;

user:User
  // address: Address;
  // address: Observable<Address>;
  // address: Observable<any>;
  // address: Address = {
  //   street: '145 Manor Way',
  //   town: 'mitcham',
  //   county: 'surrey',
  //   postcode: 'cr4 1ej',
  // };
  // address: Address;
  //   address: Address[] = [{
  //   street: '145 Manor Way',
  //   town: 'mitcham',
  //   county: 'surrey',
  //   postcode: 'cr4 1ej',
  // },
  // {
  //   street: '1045 mission street',
  //   town: 'san francisco',
  // }];


  constructor(private _map: MapService, private _zone: NgZone, private api: AddressService) { }

  ngOnInit() {
    // this.findAddress()
    this.getPlaces();
  }

  getPlaces() {

    this.api.getAllAddress()
      .do(console.log)
      .subscribe(
      user => this.user = user,
      () => console.log(this.user)
      )
     this.findAddress();
  }

  findAddress() {
    this._map.getLatLan(this.user.address)
      .subscribe(
      result => {
        this._zone.run(() => {
          this.user.address.latitude = result.lat();
          console.log('new lat: ', this.user.address.latitude);
          this.user.address.longitude = result.lng();
          console.log('new lng: ', this.user.address.longitude);
        });
      },
      error => console.log(error),
      () => console.log('Geocoding Done')
      );

  }
}
