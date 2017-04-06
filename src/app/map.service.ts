import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

declare var google: any;

@Injectable()
export class MapService {

  constructor() { }

  getLatLan(address: string) {
    console.log('Getting Address - ', address);
    let geocoder = new google.maps.Geocoder();
    return Observable.create(observer => {
      geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          observer.next(results[0].geometry.location);
          observer.complete();
        } else {
          console.log('Error - ', results, ' & Status - ', status);
          observer.next({});
          observer.complete();
        }
      });
    })
  }

}
