import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { Address } from '../address';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
declare var google;

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {
  // address = '145 Manor Way, Mitcham, Surrey';

  address: Address = {
    street: '145 Manor Way',
    town: 'mitcham',
    county: 'surrey',
    postcode: 'cr4 1ej',
  };


  latitude: number;
  longitude: number;

  geocoder = new google.maps.Geocoder();
  result = '';
  constructor() { }

  ngOnInit() {
    this.geocodeAddress(this.address);
    this.setCurrentPosition();
  }

  geocodeAddress(data) {
    data = {
      address: `${this.address.street}, ${this.address.town}, ${this.address.county}`,
    }



    this.geocoder.geocode(data, (results, status) => {

      if (status === 'OK') {
        data.latitude = results[0].geometry.location.lat();
        data.longitude = results[0].geometry.location.lng();
        console.log('lat: ' + data.latitude + ', long: ' + data.longitude);
      } else {
        alert('Geocode failed: ' + status);
      }
    });
    console.log('data: ', data);
    return data;
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }

}
