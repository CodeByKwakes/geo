import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Address, User } from './address';

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
  // user: User = {
  //   name: 'Kwakes',
  //   address: {
  //     street: '145 Manor Way',
  //     town: 'mitcham',
  //     county: 'surrey',
  //     postcode: 'cr4 1ej',
  //   }
  // }

  user: User[] = [
    {
      name: 'Kwakes',
      address: {
        street: '145 Manor Way',
        town: 'mitcham',
        county: 'surrey',
        postcode: 'cr4 1ej',
      }
    },
    {
      name: 'Joe',
      address: {
        street: '1045 mission street',
        town: 'san francisco'
      }
    }
  ]

  constructor() { }

  getAllAddress(): Observable<User[]> {
    return Observable.of(this.user)
  }
}
