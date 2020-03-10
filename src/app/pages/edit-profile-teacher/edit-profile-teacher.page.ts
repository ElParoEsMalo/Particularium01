import * as firebase from 'firebase/app'
import { Teacher } from './../../core/model/teacher';
import { Component, OnInit } from '@angular/core';
import { SingUpServiceService } from 'src/app/servicios/singUp/sing-up-service.service';
import { Map, tileLayer, marker, icon } from 'leaflet';
import 'esri-leaflet';
import { geosearch } from 'esri-leaflet-geocoder';//"esri-leaflet-geocoder"
import { LoginServiceService } from 'src/app/servicios/login/login-service.service';

@Component({
  selector: 'app-edit-profile-teacher',
  templateUrl: './edit-profile-teacher.page.html',
  styleUrls: ['./edit-profile-teacher.page.scss'],
})
export class EditProfileTeacherPage implements OnInit {
  private teacher: Teacher = new Teacher();


  profesorIcon = icon({
    iconUrl: '../../../assets/icon/marcadorProfesor.png',
    iconSize: [52, 52], // size of the icon
    iconAnchor: [26, 52], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76]
  });
  geomap: Map;
  marker: any;
  latLong = [];
  basura = [];
  icons: icon[] = new Array();
  marcadores = [[38.6762376, -6.4183559], [38.6730116, -6.4183819], [38.6740926, -6.4183829], [38.6750836, -6.4183839]];


  constructor(private signUp: SingUpServiceService, private logServ: LoginServiceService) { }

  ngOnInit() {
  }
    //Mapa

    ionViewDidEnter() {
      this.geomap = new Map("myMap");
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
        console.log(this.teacher.location);
        if (this.teacher.location != undefined) {
          this.geomap.remove();
          this.geomap = new Map("myMap");
          this.showMap();
        }
        this.teacher.location = new firebase.firestore.GeoPoint(e.latlng.lat, e.latlng.lng);
        alert(e.latlng);
        marker(e.latlng, { icon: this.profesorIcon }, 15).addTo(this.geomap)
          .bindPopup('Hey, I\'m Here');
      }, this);
    }
  
    showMarker(latLong) {
      console.log(marker([0, 0]).getIcon());
      marker(latLong, { icon: this.profesorIcon }, 15).addTo(this.geomap);
      this.geomap.setView(latLong);
    }
    getMarker(e) {
      console.log(e.latLng);
    }
  update() {
    this.signUp.addStudent(this.teacher);
  }
  async delete() {
    await this.logServ.eliminarStudent();
  }

}
