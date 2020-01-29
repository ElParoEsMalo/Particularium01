import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/UserInt';
import { LoginServiceService } from 'src/app/servicios/login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private userReg: User = {};
  constructor(private logServ: LoginServiceService) { 
    this.logServ.$userReg = this.userReg;
  }

  ngOnInit() {
  }
  login() {
    if(this.userReg.cpassword==this.userReg.password){
      this.logServ.login()
    }else{
      alert("La contraseña no coincide")
    }
    
  }
}
