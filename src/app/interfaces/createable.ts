import { Demand } from './../core/model/demand';
import { Offer } from './../core/model/offer';
export interface Createable {
	crearOferta(oferta: Offer, globalId: string): boolean;

	crearDemanda(demanda: Demand, globalId: string): boolean;

	//FALTA CLASE/SERVICIO "GESTION que implemente esta interface y cree nuevas publicaciones
	// ofertas y demandas.
}
