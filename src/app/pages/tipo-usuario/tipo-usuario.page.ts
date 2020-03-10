import { LoginServiceService } from 'src/app/servicios/login/login-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { SingUpServiceService } from 'src/app/servicios/singUp/sing-up-service.service';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.page.html',
  styleUrls: ['./tipo-usuario.page.scss'],
})
export class TipoUsuarioPage implements OnInit {

  constructor(private sigServ: SingUpServiceService, private logOut: LoginServiceService) { }

  ngOnInit() {
  }

  addStudent(){
    console.log(this.sigServ.$userReg)
    this.sigServ.addStudentId();
  }
  addTeacher(){
    this.sigServ.addTeacherId();
  }
  logout(){
    this.logOut.logout();
  }

}
