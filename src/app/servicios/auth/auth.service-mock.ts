
import { Authable } from './../../interfaces/authable';
import { User } from 'src/app/core/model/user';
import { Student } from 'src/app/core/model/student';


export class AuthServiceMock{

    private activeUser : User;
    private users : User[];
    private estudiante = new Student();

    constructor(){
        this.estudiante.email = "josef@gmail.com";
        this.estudiante.password = "almendralejo";
        this.users.push(this.estudiante);
    }
    
    signUp(email: string, password: string, cpassword: string) {
        var encontrado: boolean = false;
        var registrado: boolean = false;
        this.users.forEach(user => {
            if(user.email === email){
                encontrado = true;
            }
        });
        if(encontrado && (password === cpassword)){
            registrado = true;
        }
        return registrado;
    }

    login(email: string, password: string)  {
        var sesionActiva : boolean = false;
        this.users.forEach(user =>{
            if(user.email === email && user.password === password){
                this.activeUser = user;
                sesionActiva = true;
            }
        })
        return sesionActiva;
    }


    logout() {
       this.activeUser = new User();
    }


}