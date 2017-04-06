import { Component, OnInit, NgZone } from '@angular/core';
import { Address } from '../address';
import { MapService } from '../map.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new-map',
  templateUrl: './new-map.component.html',
  styleUrls: ['./new-map.component.css']
})
export class NewMapComponent implements OnInit {
  address = '145 Manor Way, Mitcham, Surrey'
  lat: number;
  lng: number;
  constructor(private _map: MapService, private _zone: NgZone) { }

  ngOnInit() {
    this.findAddress()
  }


  findAddress() {
    this._map.getLatLan(this.address)
      .subscribe(
      result => {
        this._zone.run(() => {
          this.lat = result.lat();
          console.log('new lat: ', this.lat)
          this.lng = result.lng()
          console.log('new lng: ', this.lng)
        })
      },
      error => console.log(error),
      () => console.log('Geocoding Done')
      )

  }
}
