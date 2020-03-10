import { DemandOfferService } from 'src/app/servicios/demandOffer/demand-offer.service';
import { SingUpServiceService } from 'src/app/servicios/singUp/sing-up-service.service';
import { UserInt } from './../../interfaces/UserInt';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data/data.service';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})

export class LoginServiceService {
	private userReg: UserInt = {};
	private result: boolean = false;
	constructor(private afAuth: AuthService, private afStore: DataService,
		private routesv: Router, private servSingUp: SingUpServiceService, private servDemandOffer: DemandOfferService) {
	}

	async logout() {
		this.afAuth.setUser(this.userReg);
		return await this.afAuth
			.logOut()
			.then(() => {
				this.routesv.navigateByUrl('/home');
				console.log('sesion cerrada')
			})
			.catch((err) => {
				console.log(err); //Alerta
			});
	}

	async login() {
		this.afAuth.setUser(this.userReg);
		if (await this.afAuth.login()) {
			this.isMember();
		}
	}

	isMember() {

		this.$userReg.idUser = this.afAuth.getCurrentUserUid();
		console.log(this.$userReg);
		this.afAuth.setUser(this.$userReg);
		this.afStore.isMember(this.afAuth.getCurrentUserUid()).then((data) => {
			if (data) {
				this.servSingUp.$userReg = this.$userReg;
				console.log('isMember');
				this.afStore.isUser(this.afAuth.getCurrentUserUid()).then((data) => {
					if (data) {
						console.log('isUser');
						this.afStore.isStudent(this.afAuth.getCurrentUserUid()).then((data) => {
							if (data) {
								console.log('isStudent');
								this.routesv.navigateByUrl('/menu-demanda');
							} else {
								console.log('isTeacher');
								this.routesv.navigateByUrl('/menu');
							}
						});
					} else {
						console.log('Not isUser');

						this.afStore.isStudent(this.afAuth.getCurrentUserUid()).then((data) => {
							if (data) {
								console.log('isStudent');
								this.routesv.navigateByUrl('/profileStudent');
							} else {
								console.log('isTeacher');
								this.routesv.navigateByUrl('/profileTeacher');
							}
						});
					}
				});
			} else {
				console.log('Not isMenber');
				this.routesv.navigateByUrl('/tipo-usuario');
			}

		});
	}

	async eliminarStudent() {
		this.afStore.deleteStudent(this.afAuth.getCurrentUserUid());
		await this.servDemandOffer.ObtenerDemandasPropias();
		this.servDemandOffer.demandasPropias.forEach(element => {
			this.afStore.deleteDemanda(element.id);
		});
		
		this.afStore.deleteUser(this.afAuth.getCurrentUserUid());
		this.afAuth.deleteUser();
		this.routesv.navigateByUrl('/home');
	}
	async eliminarTeacher() {
		this.afStore.deleteTeacher(this.afAuth.getCurrentUserUid());
		await this.servDemandOffer.ObtenerOfertasProfesor();
		this.servDemandOffer.ofertasPropias.forEach(element => {
			this.afStore.deleteOferta(element.id);
		});
		this.afStore.deleteUser(this.afAuth.getCurrentUserUid());
		this.afAuth.deleteUser();
		this.routesv.navigateByUrl('/home');
	}



	/**
   * Getter $userReg
   * @return {User }
   */
	public get $userReg(): UserInt {
		return this.userReg;
	}

	/**
   * Setter $userReg
   * @param {User } value
   */
	public set $userReg(value: UserInt) {
		this.userReg = value;
	}
}
