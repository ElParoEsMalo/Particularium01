import { Component, OnInit } from '@angular/core';
import { Demand } from 'src/app/core/model/demand';
import { DemandOfferService } from 'src/app/servicios/demandOffer/demand-offer.service';
import { LoginServiceService } from 'src/app/servicios/login/login-service.service';

@Component({
  selector: 'app-mostrar-demandas',
  templateUrl: './mostrar-demandas.page.html',
  styleUrls: ['./mostrar-demandas.page.scss'],
})
export class MostrarDemandasPage implements OnInit {

  private demandas: Demand[] = [];

  constructor(private demandaServ: DemandOfferService, private logOut: LoginServiceService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.ObtenerDemandas();
  }

  async ObtenerDemandas() {
    await this.demandaServ.ObtenerDemandasPropias();
    await this.demandaServ.getTodasOfertas();
    this.demandas = this.demandaServ.demandasPropias;
    console.log(this.demandas);
  }

  async mostrarDemandas(demanda){
    console.log('entrando',demanda);
    this.demandaServ.getOfertasEncontradas(demanda);
  }
  delete(id){
    this.demandaServ.DeleteDemanda(id);
  }
  async logout(){
   await this.logOut.logout();
  }

}
