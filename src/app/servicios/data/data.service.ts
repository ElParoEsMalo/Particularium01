import { UserInt } from './../../interfaces/UserInt';
import { User } from 'src/app/core/model/user';
import { isNullOrUndefined } from 'util';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Student } from './../../core/model/student';
import { Teacher } from './../../core/model/teacher';
import { map } from 'rxjs/operators';
import { Demand } from 'src/app/core/model/demand';
import { Offer } from 'src/app/core/model/offer';
import { IGlobalId } from 'src/app/interfaces/IGlobalId';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private students: AngularFirestoreCollection<UserInt>;
	private teachers: AngularFirestoreCollection<UserInt>;
	private demands: AngularFirestoreCollection<Demand>;
	private offers: AngularFirestoreCollection<Offer>;
	private users: AngularFirestoreCollection<User>;
	private globalId: AngularFirestoreCollection<IGlobalId>;
	private userLogData: UserInt;
	private resultTeacher: boolean = false;
	private resultStudent: boolean = false;
	private resultUser: boolean = false;

	constructor(private afStoreSv: AngularFirestore) {
		this.students = this.afStoreSv.collection<UserInt>('students');
		this.teachers = this.afStoreSv.collection<UserInt>('teachers');
		this.demands = this.afStoreSv.collection<Demand>('demands');
		this.offers = this.afStoreSv.collection<Offer>('offer');
		this.users = this.afStoreSv.collection<User>('user');
		this.globalId = this.afStoreSv.collection<IGlobalId>('globalId');
		this.userLogData = {};
	}
	async updateIdGlobal() {
		await this.getGlobalId().then((data: string) => {
			let globalId: IGlobalId = {};
			let idPlus = parseInt(data) + 1;
			globalId.id = idPlus.toString();
			console.log(globalId.id);
			this.afStoreSv.collection('globalId').doc<IGlobalId>('id').set(Object.assign({}, globalId));
		});
	}

	async getGlobalId(): Promise<string> {
		return await new Promise((resolve) => {
			this.globalId.doc<IGlobalId>('id').valueChanges().subscribe((data) => {
				let result = data.id;
				console.log(result);
				resolve(result);
			});
		});
	}

	async isMember(idUser: string) {
		this.resultTeacher = false;
		await this.getTeacher(idUser).then((data) => {
			console.log(data);
			this.resultTeacher = data;
		});
		await this.getStudent(idUser).then((data) => {
			console.log(data);
			this.resultStudent = data;
		});
		console.log('isTeacher', this.resultTeacher, 'isStudent', this.resultStudent);
		if (this.resultTeacher || this.resultStudent) {
			return true;
		} else {
			return false;
		}
	}

	async isStudent(idUser: string) {
		await this.getStudent(idUser).then((data) => {
			console.log(data);
			this.resultStudent = data;
		});

		console.log('isStudent', this.resultStudent);
		if (this.resultStudent) {
			return true;
		} else {
			return false;
		}
	}
	async isTeacher(idUser: string) {
		this.resultTeacher = false;
		await this.getTeacher(idUser).then((data) => {
			console.log(data);
			this.resultTeacher = data;
		});

		console.log('isTeacher', this.resultTeacher);
		if (this.resultTeacher) {
			return true;
		} else {
			return false;
		}
	}

	async isUser(idUser: string) {
		this.resultUser = false;
		await this.getUsers(idUser).then((data) => {
			console.log(data);
			this.resultUser = data;
		});
		console.log('isUsers', this.resultUser);
		if (this.resultUser) {
			return true;
		} else {
			return false;
		}
	}

	async getTeacher(idUser: string): Promise<boolean> {
		return await new Promise((resolve, reject) => {
			this.teachers.doc<User>(idUser).valueChanges().subscribe((data) => {
				if (!isNullOrUndefined(data)) {
					console.log('data student', data.email);
					resolve(true);
				} else {
					resolve(false);
				}
			}, reject);
		});
	}
	async getUsers(idUser: string): Promise<boolean> {
		return await new Promise((resolve, reject) => {
			this.users.doc<User>(idUser).valueChanges().subscribe((data) => {
				if (!isNullOrUndefined(data)) {
					console.log('data user', data.email);
					resolve(true);
				} else {
					resolve(false);
				}
			}, reject);
		});
	}

	async getStudent(idUser: string): Promise<boolean> {
		return await new Promise((resolve, reject) => {
			this.students.doc<User>(idUser).valueChanges().subscribe((data) => {
				if (!isNullOrUndefined(data)) {
					console.log('data student', data.email);
					resolve(true);
				} else {
					resolve(false);
				}
			}, reject);
		});
	}

	addUserProfile(idUser: string, user: Teacher | Student) {
		console.log('UsuarioData', user);
		console.log('IdUsuarioData', idUser);
		return this.afStoreSv.collection('user').doc(idUser).set(Object.assign({}, user));
	}

	async updateTeacherProfile(idUser: string, teacher: Teacher) {
		return this.afStoreSv.collection('user').doc(idUser).update(teacher).then(function () {
			console.log('Document successfully updated!');
		});
	}

	async updateStudentProfile(idUser: string, student: Student) {
		return this.afStoreSv.collection('user').doc(idUser).update(student).then(function () {
			console.log('Document successfully updated!');
		});
	}

	addTeacherId(idUser: string) {
		this.userLogData.idUser = idUser;
		return this.afStoreSv.collection('teachers').doc(idUser).set(this.userLogData);
	}

	addStudentId(idUser: string) {
		this.userLogData.idUser = idUser;
		return this.afStoreSv.collection('students').doc(idUser).set(this.userLogData);
	}

	async getProfile(idUser: string) {
		return await new Promise((resolve, reject) => {
			this.users.doc<any>(idUser).valueChanges().subscribe((data) => {
				if (!isNullOrUndefined(data)) {
					console.log('data user', data);
					resolve(data);
				}
			}, reject);
		});
	}

	addDemand(id: string, demand: Demand) {
		return this.afStoreSv.collection('demands').doc(id).set(Object.assign({}, demand));
	}

	addOffer(id: string, offer: Offer) {
		return this.afStoreSv.collection('offer').doc(id).set(Object.assign({}, offer));
	}

	getDemand(id: string) {
		let result: Demand = new Demand();
		this.getAllDemands().subscribe((data) => {
			data.forEach((demand) => {
				if (demand.id === id) {
					result == demand;
				}
			});
		});
		return result;
	}

	getOffer(id: string) {
		let result: Offer = new Offer();
		this.getAllOffers().subscribe((data) => {
			data.forEach((offer) => {
				if (offer.id === id) {
					result == offer;
				}
			});
		});
		return result;
	}

	getAllDemands() {
		return this.demands.snapshotChanges().pipe(
			map((actions) => {
				return actions.map((a) => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.id;
					return { id, ...data };
				});
			})
		);
	}

	getAllOffers() {
		return this.offers.snapshotChanges().pipe(
			map((actions) => {
				return actions.map((a) => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.id;
					return { id, ...data };
				});
			})
		);
	}

	async getAllOffersDos() {
		var todasOfertas;
		return await new Promise((resolve, reject) => {
			this.getAllOffers().subscribe((data: Offer[]) => {
				todasOfertas = data;
				resolve(todasOfertas);
			});
		});
	}
	async getAllDemandsDos() {
		var todasDemands;
		return await new Promise((resolve, reject) => {
			this.getAllDemands().subscribe((data: Demand[]) => {
				todasDemands = data;
				resolve(todasDemands);
			});
		});
	}

	updateDemand(demand: Demand) {
		return this.demands.doc().update(demand);
	}

	deleteUser(idUser: string) {
		this.afStoreSv.collection('user').doc(idUser).delete();
	}
	deleteOferta(id: string) {
		this.afStoreSv.collection('offer').doc(id).delete();
	}
	deleteDemanda(id: string) {
		this.afStoreSv.collection('demands').doc(id).delete();
	}
	deleteTeacher(id: string) {
		this.afStoreSv.collection('teachers').doc(id).delete();
	}
	deleteStudent(id: string) {
		this.afStoreSv.collection('students').doc(id).delete();
	}
}
