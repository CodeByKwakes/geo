import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Address } from './address';

@Injectable()
export class AddressService {
  // address: Address[] = [{
  //   street: '145 Manor Way',
  //   town: 'mitcham',
  //   county: 'surrey',
  //   postcode: 'cr4 1ej',
  // },
  // {
  //   street: '1045 mission street',
  //   town: 'san francisco',
  // }];

  address: Address = {
    street: '145 Manor Way',
    town: 'mitcham',
    county: 'surrey',
    postcode: 'cr4 1ej',
  };

  constructor() { }

  getAllAddress(): Observable<Address> {
    return Observable.of(this.address)
  }
}
