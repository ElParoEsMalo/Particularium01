import { User } from './user';
import { Offer } from './offer';

export class Teacher extends User {
    private _phone: string;

    constructor() {
        super();
    }

    /**
     * Getter phone
     * @return {string}
     */
	public get phone(): string {
		return this._phone;
	}

    /**
     * Setter phone
     * @param {string} value
     */
	public set phone(value: string) {
		this._phone = value;
	}


}
