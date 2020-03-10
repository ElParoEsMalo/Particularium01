import { Comunity } from './../core/model/comunity';
import { Mobility } from './../core/model/mobility';
import { Schedule } from './../core/model/schedule';
import { Offer } from './../core/model/offer';
import { Demand } from './../core/model/demand';
import { Createable } from './../interfaces/createable';
export class CreateMock implements Createable {

    private demands: Demand[] = new Array();
    private offers: Offer[] = new Array();
    private myDemand: Demand;
    private myOffer: Offer;

    constructor() {
        this.demands.push(new Demand());
        this.offers.push(new Offer());
        this.myDemand = new Demand();
        this.myOffer = new Offer();
    }



    crearOferta(oferta: import("../core/model/offer").Offer): boolean {
        var added = false;
        var length = this.offers.length;
        this.offers.push(oferta);
        if (this.offers.length === length + 1) {
            added = true;
        }
        return added;
    }

    crearDemanda(demanda: import("../core/model/demand").Demand): boolean {
        var added = false;
        var length = this.demands.length;
        this.demands.push(demanda);
        if (this.demands.length === length + 1) {
            added = true;
        }
        return added;
    }


}