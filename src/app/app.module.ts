import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GeoComponent } from './geo/geo.component';
import { AddressComponent } from './address/address.component';
import { MapService } from './map.service';
import { NewMapComponent } from './new-map/new-map.component';

@NgModule({
  declarations: [
    AppComponent,
    GeoComponent,
    AddressComponent,
    NewMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
