import { Demand } from './../model/demand';
import { Offer } from './../model/offer';
import { Filtrable } from './../../interfaces/filtrable';


export class Filtro implements Filtrable {

    private _ofertasEncontradas: Offer[];
    private _todasOfertas: Offer[];
    private _demanda: any;

    filtrar(todasOfertas: import('../model/offer').Offer[], demandaBuscada: import('../model/demand').Demand): import('../model/offer').Offer[] {

        console.log('Filtro');
        console.log(demandaBuscada);
        console.log(todasOfertas);
        this.todasOfertas = todasOfertas;
        this.demanda = demandaBuscada;
        this.ofertasEncontradas = [];
        this.comprobarMateria();
        console.log('Encontradas', this.ofertasEncontradas);
        console.log('Buscada', this.demanda);
        return this.ofertasEncontradas;
        throw new Error('Method not implemented.');

    }


    private comprobarMateria() {
        this.todasOfertas.forEach(element => {
            if (this.demanda._subject === undefined) {
                console.log('materia indefinida');
                this.comprobarNivel(element);
            } else if (this.demanda._subject === element._subject) {
                console.log('materia igual');
                this.comprobarNivel(element);
            }

        });
    }
    private comprobarNivel(demanda) {
        if (this.demanda._level === undefined) {
            console.log('nivel indefinida');
            this.comprobarModelo(demanda);
        } else if (this.demanda._level === demanda._level) {
            console.log('nivel igual');
            this.comprobarModelo(demanda);
        }
    }
    private comprobarModelo(demanda) {
        if (this.demanda._comunity === undefined) {
            console.log('cumunity indefinida');
            this.comprobarModalidad(demanda);
        } else if (this.demanda._comunity === demanda._comunity) {
            console.log('comunity igual');
            this.comprobarModalidad(demanda);
        }
    }
    private comprobarModalidad(demanda) {

        if (this.demanda._mobility === undefined) {
            console.log('mobility indefinida');
            this.ofertasEncontradas.push(demanda);
        } else if (this.demanda._mobility === demanda._mobility) {
            console.log('mobility igual');
            this.ofertasEncontradas.push(demanda);
        }
    }



    /**
     * Getter ofertasEncontradas
     * @return {Offer[]}
     */
    public get ofertasEncontradas(): Offer[] {
        return this._ofertasEncontradas;
    }

    /**
     * Getter todasOfertas
     * @return {Offer[]}
     */
    public get todasOfertas(): Offer[] {
        return this._todasOfertas;
    }

    /**
     * Getter demanda
     * @return {Demand}
     */
    public get demanda(): Demand {
        return this._demanda;
    }

    /**
     * Setter ofertasEncontradas
     * @param {Offer[]} value
     */
    public set ofertasEncontradas(value: Offer[]) {
        this._ofertasEncontradas = value;
    }

    /**
     * Setter todasOfertas
     * @param {Offer[]} value
     */
    public set todasOfertas(value: Offer[]) {
        this._todasOfertas = value;
    }

    /**
     * Setter demanda
     * @param {Demand} value
     */
    public set demanda(value: Demand) {
        this._demanda = value;
    }

}