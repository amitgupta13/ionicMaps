import { Component, OnInit, ViewChild } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";

declare var google;

@Component({
  selector: "app-first",
  templateUrl: "./first.page.html",
  styleUrls: ["./first.page.scss"]
})
export class FirstPage implements OnInit {
  @ViewChild("map", { static: true }) mapElement;
  map: any;
  lat = 0;
  long = 0;
  constructor(private geo: Geolocation) {}

  async ngOnInit() {
    const location = await this.geo.getCurrentPosition();
    this.lat = location.coords.latitude;
    this.long = location.coords.longitude;
  }

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    let latLong = new google.maps.LatLng(this.lat, this.long);
    let mapOptions = {
      center: latLong,
      zoom: 15
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
