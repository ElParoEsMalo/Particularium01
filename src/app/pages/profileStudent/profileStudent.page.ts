import { LoginServiceService } from 'src/app/servicios/login/login-service.service';
import { Student } from './../../core/model/student';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'
import { SingUpServiceService } from 'src/app/servicios/singUp/sing-up-service.service';
import { Map, tileLayer, marker, icon } from 'leaflet';
import 'esri-leaflet';
import { geosearch } from 'esri-leaflet-geocoder';

@Component({
  selector: 'app-profileStudent',
  templateUrl: './profileStudent.page.html',
  styleUrls: ['./profileStudent.page.scss'],
})
export class ProfileStudentPage implements OnInit {

  private student: Student = new Student();

  userIcon = icon({
    iconUrl: '../../../assets/icon/marcadorUsuario.png',
    iconSize: [52, 52], // size of the icon
    iconAnchor: [26, 52], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76]
  });
  geomap: Map ;
  marker: any;
  latLong = [];
  basura = [];
  icons: icon[] = new Array();
  marcadores = [[38.6762376, -6.4183559], [38.6730116, -6.4183819], [38.6740926, -6.4183829], [38.6750836, -6.4183839]];


  constructor(private signUp: SingUpServiceService, private logOut: LoginServiceService) {
  }

  ngOnInit() {
  }

  save() {
    this.signUp.addStudent(this.student);
  }

  logout() {
    this.logOut.logout();
  }
  
  ionViewDidEnter() {
    this.geomap = new Map('myMapStudent');
    let searchControl = geosearch().addTo(this.geomap);
    this.showMap();
  }
  showMap() {

    this.basura.push(this.geomap);
    this.geomap.setView([38.6760376, -6.4183859], 15);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.geomap);
    this.pintarIcono()
  }

  pintarIcono() {
    this.geomap.on('click', function (e) {
      console.log(this.student.location);
      if (this.student.location != undefined) {
        this.geomap.remove();
        this.geomap = new Map("myMapStudent");
        this.showMap();
      }
      this.student.location = new firebase.firestore.GeoPoint(e.latlng.lat, e.latlng.lng);
      alert(e.latlng);
      marker(e.latlng, { icon: this.userIcon }, 15).addTo(this.geomap)
        .bindPopup('Hey, I\'m Here');
    }, this);
  }

  showMarker(latLong) {
    console.log(marker([0, 0]).getIcon());
    marker(latLong, { icon: this.userIcon }, 15).addTo(this.geomap);
    this.geomap.setView(latLong);
  }
  getMarker(e) {
    console.log(e.latLng);
  }
}
