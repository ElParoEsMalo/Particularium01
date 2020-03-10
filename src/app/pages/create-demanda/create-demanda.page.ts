import { DemandOfferService } from './../../servicios/demandOffer/demand-offer.service';
import { Component, OnInit } from '@angular/core';
import { Comunity } from 'src/app/core/model/comunity';
import { Mobility } from 'src/app/core/model/mobility';
import { Schedule } from 'src/app/core/model/schedule';
import { Demand } from 'src/app/core/model/demand';

@Component({
	selector: 'app-create-demanda',
	templateUrl: './create-demanda.page.html',
	styleUrls: ['./create-demanda.page.scss']
})
export class CreateDemandaPage implements OnInit {
	private arrayComunity: string[] = [];
	private arrayMobility: string[] = [];
	private arraySchedule: string[] = [];
	private arraySubject: string[] = [];
	private arrayLevel : string[] = [];
	private demanda = new Demand();

	constructor(private demandServ: DemandOfferService) {
	}

	ngOnInit() { }

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
		console.log(this.demanda);
		this.demandServ.generateDemandWithId(this.demanda);
	}
	ionViewWillEnter(){
		this.ObtenerOfertas();
	  }
	
	  ObtenerOfertas() {
		this.demandServ.GetSubject().then((data:string[])=>{
			for (let index = 1; index < data.length; index++) {
				var contador =0;
				for(let i = 0; i<this.arraySubject.length; i++){
					if(data[index]!=this.arraySubject[i]){
						contador++
					}
				}
				if(contador==this.arraySubject.length) {
					this.arraySubject.push(data[index]);
				}
				
			  }
		});
		console.info('Asignatura',this.arraySubject)
		this.demandServ.GetLevel().then((data:string[])=>{
			for (let index = 1; index < data.length; index++) {
				var contador =0;
				for(let i = 0; i<this.arrayLevel.length; i++){
					if(data[index]!=this.arrayLevel[i]){
						contador++
					}
				}
				if(contador==this.arrayLevel.length) {
					this.arrayLevel.push(data[index]);
				}
				
			  }
		});
		for (let index = 0; index < Object.keys(Comunity).length / 2; index++) {
			this.arrayComunity.push(Comunity[index].toString());
		}
		for (let index = 0; index < Object.keys(Mobility).length / 2; index++) {
			this.arrayMobility.push(Mobility[index].toString());
		}
		for (let index = 0; index < Object.keys(Schedule).length / 2; index++) {
			this.arraySchedule.push(Schedule[index].toString());
		}
		console.info('Nivel',this.arrayLevel)

	  }
}
