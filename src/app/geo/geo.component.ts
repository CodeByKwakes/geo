import { Component, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { Address } from '../address';
declare var google;

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {
  // address = '145 Manor Way, Mitcham, Surrey';
  fieldName;
  fieldStreet;
  fieldZip;
  fieldCity;
  address: Address = {

    street: '145 Manor Way',
    town: 'mitcham',
    county: 'surrey',
    postcode: 'cr4 1ej'
  };


  latitude: number;
  longitude: number;
  geocoder = new google.maps.Geocoder();
  result = '';
  constructor() {}

  ngOnInit() {
    console.log(this.address);
    this.geocodeAddress('this.address', this.geocoder);
  }

  geocodeAddress(data, geocoder) {
    data = {
      address: `${this.address.street}, ${this.address.town}, ${this.address.county}`
    }
    this.geocoder.geocode(data, (results, status) => {

      if (status === 'OK') {
        let latitude = results[0].geometry.location.lat();
        let longitude = results[0].geometry.location.lng();
        console.log('lat: ' + latitude + ', long: ' + longitude);
      } else {
        alert('Geocode failed: ' + status);
      }
    });
    console.log('data: ', data);
    return data;
  }

}
