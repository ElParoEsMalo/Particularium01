import { element } from 'protractor';
import { User } from 'src/app/core/model/user';
import { Offer } from './../../core/model/offer';
import { Filtro } from './../../core/control/filtro';
import { Demand } from './../../core/model/demand';
import { Createable } from './../../interfaces/createable';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { Router } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { UserInt } from 'src/app/interfaces/UserInt';

@Injectable({
  providedIn: 'root'
})
export class DemandOfferService implements Createable {


  private _demandasPropias: Demand[];
  private _ofertasPropias: Offer[];
  private _ofertasEncontradas: Offer[];
  private _todasOfertas: Offer[] = [];
  private _todasDemanda: Demand[] = [];

  constructor(private afStore: DataService, private routesv: Router, private afAuth: AuthService, ) {
    this.getTodasOfertas();
  }

  async generateOfferWithId(oferta: Offer) {
    await this.afStore.getGlobalId().then((data) => {
      this.crearOferta(oferta, data);
      this.afStore.updateIdGlobal();
    })
  }
  async generateDemandWithId(demand: Demand) {
    await this.afStore.getGlobalId().then((data) => {
      this.crearDemanda(demand, data);
      this.afStore.updateIdGlobal();
    })
  }
  crearOferta(oferta: import("../../core/model/offer").Offer, globalId: string): boolean {

    /*if (this.todasOfertas.length === null) {
      oferta.id = '1';
    } else {
      oferta.id = (this.todasOfertas.length + 1).toString();
    }*/

    oferta.id = globalId;

    oferta.idUser = this.afAuth.getCurrentUserUid();
    console.log(oferta);

    console.log(oferta);

    this.afStore.addOffer(globalId, oferta);

    this.routesv.navigateByUrl('/menu');

    return true;

    throw new Error("Method not implemented.");
  }

  crearDemanda(demanda: import("../../core/model/demand").Demand, globalId: string): boolean {

    demanda.id = globalId

    demanda.idUser = this.afAuth.getCurrentUserUid();
    console.log(demanda);

    this.afStore.addDemand(globalId, demanda);

    this.routesv.navigateByUrl('/menu-demanda');

    return true;

    throw new Error("Method not implemented.");
  }

  async getTodasDemanda() {
    return this.afStore.getAllDemandsDos();
  }

  async getTodasOfertas() {
    return this.afStore.getAllOffersDos();

  }

  async getOfertasEncontradas(demanda) {
    this.todasOfertas = [];
    console.log('dentro de servicio', demanda)
    await this.getTodasOfertas().then((data: Offer[]) => {
      for (let index = 0; index < data.length; index++) {
        this.todasOfertas.push(data[index]);
      }
    });
    this.ofertasEncontradas = new Filtro().filtrar(this.todasOfertas, demanda);

    this.routesv.navigateByUrl('/buscador-oferta');
  }

  async ObtenerDemandasPropias() {
    var demandas = []
    var demandasPropias = []
    await this.getTodasDemanda().then((data: Offer[]) => {
      for (let index = 0; index < data.length; index++) {
        console.log('idUser:', this.afAuth.getCurrentUserUid());
        console.log(data[index]);
        console.log('idUserDemanda:', data[index]._idUser);
        demandasPropias.push(data[index]);
        if (data[index]._idUser === this.afAuth.getCurrentUserUid()) {
          demandas.push(data[index]);
        }

      }
      this.todasDemanda = demandasPropias;
      console.log(demandasPropias);
      this.demandasPropias = demandas;
      console.log(demandas);
    });
  }
  async ObtenerOfertasProfesor() {
    var ofertas = []
    var ofertasProfesor = []
    await this.getTodasOfertas().then((data: Offer[]) => {
      for (let index = 0; index < data.length; index++) {
        console.log('idUser:', this.afAuth.getCurrentUserUid());
        console.log('idUserOferta:', data[index]._idUser);
        ofertasProfesor.push(data[index]);
        if (data[index]._idUser === this.afAuth.getCurrentUserUid()) {
          ofertas.push(data[index]);
        }

      }
      this.todasOfertas = ofertasProfesor;
      console.log(ofertasProfesor)
      this.ofertasPropias = ofertas;
      console.log(ofertas);
    });
  }

  DeleteOferta(id: string) {
    this.afStore.deleteOferta(id);
    this.routesv.navigateByUrl('/menu-demanda');
  }
  DeleteDemanda(id: string) {
    this.afStore.deleteDemanda(id);
    this.routesv.navigateByUrl('/menu');
  }

  async GetSubject() {
    await this.getTodasOfertas().then((data: Offer[]) => {
      for (let index = 0; index < data.length; index++) {
        this.todasOfertas.push(data[index]);
      }
    });
    var subject = [];
    this.todasOfertas.forEach(element => {
      subject.push(element._subject);
    })
    return subject;
  }
  async GetLevel() {
    await this.getTodasOfertas().then((data: Offer[]) => {
      for (let index = 0; index < data.length; index++) {
        this.todasOfertas.push(data[index]);
      }
    });
    var subject = [];
    this.todasOfertas.forEach(element => {
      subject.push(element._level);
    })
    return subject;
  }

  /**
   * Getter demandasPropias
   * @return {Demand[]}
   */
  public get demandasPropias(): Demand[] {
    return this._demandasPropias;
  }

  /**
   * Setter demandasPropias
   * @param {Demand[]} value
   */
  public set demandasPropias(value: Demand[]) {
    this._demandasPropias = value;
  }

  /**
   * Getter ofertasPropias
   * @return {Offer[]}
   */
  public get ofertasPropias(): Offer[] {
    return this._ofertasPropias;
  }

  /**
   * Setter ofertasPropias
   * @param {Offer[]} value
   */
  public set ofertasPropias(value: Offer[]) {
    this._ofertasPropias = value;
  }

  /**
   * Getter todasOfertas
   * @return {Offer[]}
   */
  public get todasOfertas(): Offer[] {
    return this._todasOfertas;
  }

  /**
   * Setter todasOfertas
   * @param {Offer[]} value
   */
  public set todasOfertas(value: Offer[]) {
    this._todasOfertas = value;
  }

  /**
   * Getter todasDemanda
   * @return {Demand[]}
   */
  public get todasDemanda(): Demand[] {
    return this._todasDemanda;
  }

  /**
   * Setter todasDemanda
   * @param {Demand[]} value
   */
  public set todasDemanda(value: Demand[]) {
    this._todasDemanda = value;
  }


  /**
   * Getter ofertasEncontradas
   * @return {Offer[]}
   */
  public get ofertasEncontradas(): Offer[] {
    return this._ofertasEncontradas;
  }

  /**
   * Setter ofertasEncontradas
   * @param {Offer[]} value
   */
  public set ofertasEncontradas(value: Offer[]) {
    this._ofertasEncontradas = value;
  }

}
