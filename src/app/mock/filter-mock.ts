import { Filtrable } from '../interfaces/filtrable';
import { Offer } from '../core/model/offer';
import { Schedule } from '../core/model/schedule';
import { Mobility } from '../core/model/mobility';
import { Comunity } from '../core/model/comunity';

export class FilterMock implements Filtrable {

    private offers: Offer[] = new Array();

    constructor() {
        this.offers.push(new Offer());
    }

    filtrar(todasOfertas: import("../core/model/offer").Offer[], demandaBuscada: import("../core/model/demand").Demand): Offer[] {
        var ofertasFiltradas: Offer[] = new Array();
        todasOfertas.forEach(oferta => {
            if (oferta.subject === demandaBuscada.subject ||
                oferta.level === demandaBuscada.level ||
                oferta.schedule === demandaBuscada.schedule ||
                oferta.comunity === demandaBuscada.comunity
                || oferta.mobility === demandaBuscada.mobility) {
                ofertasFiltradas.push(oferta);
            }
        });
        return ofertasFiltradas;
    }

}