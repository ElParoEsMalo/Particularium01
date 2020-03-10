import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/core/model/offer';
import { DemandOfferService } from 'src/app/servicios/demandOffer/demand-offer.service';
import { LoginServiceService } from 'src/app/servicios/login/login-service.service';

@Component({
  selector: 'app-mostrar-ofertas',
  templateUrl: './mostrar-ofertas.page.html',
  styleUrls: ['./mostrar-ofertas.page.scss'],
})
export class MostrarOfertasPage implements OnInit {

  private ofertas: Offer[] = [];

  constructor(private ofertaServ: DemandOfferService, private logOut: LoginServiceService) {
    
  }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.ObtenerOfertas();
  }

  async ObtenerOfertas() {
    await this.ofertaServ.ObtenerOfertasProfesor();
    this.ofertas=this.ofertaServ.ofertasPropias;
    console.log(this.ofertas)
  }
  delete(id){
    this.ofertaServ.DeleteOferta(id);
  }
  async logout(){
    await this.logOut.logout();
  }
}
