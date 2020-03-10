import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/core/model/offer';
import { DemandOfferService } from 'src/app/servicios/demandOffer/demand-offer.service';

@Component({
  selector: 'app-buscador-oferta',
  templateUrl: './buscador-oferta.page.html',
  styleUrls: ['./buscador-oferta.page.scss'],
})
export class BuscadorOfertaPage implements OnInit {

  private ofertas: Offer[] = [];

  constructor(private ofertaServ: DemandOfferService) {
    
  }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.ObtenerOfertas();
  }

  ObtenerOfertas() {
    this.ofertas=this.ofertaServ.ofertasEncontradas;
    console.log(this.ofertas);
  }

}
