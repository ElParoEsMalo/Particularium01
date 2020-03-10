import { UserInt } from './../../interfaces/UserInt';
import { Teacher } from './../../core/model/teacher';
import { Student } from './../../core/model/student';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data/data.service';

@Injectable({
	providedIn: 'root'
})
export class SingUpServiceService {
	private userReg: UserInt = {};

	constructor(
		private afAuth: AuthService,
		private afStore: DataService,
		public alert: AlertController,
		private routesv: Router
	) { }

	async register() {
		this.afAuth.setUser(this.userReg);
		return await this.afAuth
			.register()
			.then(() => {
				this.showAlert('Welcome', 'Sign Up successfully!!');
				this.routesv.navigateByUrl('/tipo-usuario'); //Siguiente registro
			})
			.catch((err) => {
				console.log(err); //Alerta
			});
	}

	async addStudent(student: Student) {
		this.afAuth.setUser(this.userReg);
		student.email = this.userReg.email;
		student.password = this.userReg.password;
		this.afAuth.setUser(this.userReg);
		console.log(student)
		return await this.afStore
			.addUserProfile(this.afAuth.getCurrentUserUid(), student)
			.then(() => {
				this.routesv.navigateByUrl('/menu-demanda'); //Siguiente registro
			})
			.catch((err) => {
				console.log(err); //Alerta
			});
	}

	async addTeacher(teacher: Teacher) {
		this.afAuth.setUser(this.userReg);
		teacher.email = this.userReg.email;
		console.log('EmailUser:', this.userReg);
		teacher.password = this.userReg.password;
		console.log(teacher);
		this.afAuth.setUser(this.userReg);
		return await this.afStore
			.addUserProfile(this.afAuth.getCurrentUserUid(), teacher)
			.then(() => {
				this.routesv.navigateByUrl('/menu'); //Siguiente registro
			})
			.catch((err) => {
				console.log(err); //Alerta
			});
	}

	async addStudentId() {
		this.afAuth.setUser(this.userReg);
		console.log(this.userReg);
		return await this.afStore
			.addStudentId(this.afAuth.getCurrentUserUid())
			.then(() => {
				this.routesv.navigateByUrl('/profileStudent'); //Siguiente registro
			})
			.catch((err) => {
				console.log(err); //Alerta
			});
	}
	async addTeacherId() {
		return await this.afStore
			.addTeacherId(this.afAuth.getCurrentUserUid())
			.then(() => {
				this.routesv.navigateByUrl('/profileTeacher'); //Siguiente registro
			})
			.catch((err) => {
				console.log(err); //Alerta
			});
	}

	async updateStudent(student: Student) {
		await this.afStore.updateStudentProfile(this.afAuth.getCurrentUserUid(), student);
	}
	async updateTeacher(teacher: Teacher) {
		await this.afStore.updateTeacherProfile(this.afAuth.getCurrentUserUid(), teacher);
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
	async showAlert(header: string, message: string) {
		const alert = await this.alert.create({
			header,
			message,
			buttons: ['OK']
		});
		await alert.present();
	}



}
