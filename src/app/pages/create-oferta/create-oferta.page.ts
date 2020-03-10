import { Offer } from 'src/app/core/model/offer';
import { DemandOfferService } from './../../servicios/demandOffer/demand-offer.service';
import { Comunity } from './../../core/model/comunity';
import { Component, OnInit } from '@angular/core';
import { Mobility } from 'src/app/core/model/mobility';
import { Schedule } from 'src/app/core/model/schedule';

@Component({
	selector: 'app-create-oferta',
	templateUrl: './create-oferta.page.html',
	styleUrls: [ './create-oferta.page.scss' ]
})
export class CreateOfertaPage implements OnInit {
	private arrayComunity: string[] = [];
	private arrayMobility: string[] = [];
	private arraySchedule: string[] = [];
	private oferta = new Offer();

	constructor(private ofertaServ: DemandOfferService) {
		for (let index = 0; index < Object.keys(Comunity).length / 2; index++) {
			this.arrayComunity.push(Comunity[index].toString());
		}
		for (let index = 0; index < Object.keys(Mobility).length / 2; index++) {
			this.arrayMobility.push(Mobility[index].toString());
		}
		for (let index = 0; index < Object.keys(Schedule).length / 2; index++) {
			this.arraySchedule.push(Schedule[index].toString());
		}
	}

	ngOnInit() {}

	public get arrayCom() {
		return this.arrayComunity;
	}
	public get arrayMob() {
		return this.arrayMobility;
	}
	public get arraySche() {
		return this.arraySchedule;
	}

	save() {
		console.log(this.oferta);
		this.ofertaServ.generateOfferWithId(this.oferta);
	}
}
