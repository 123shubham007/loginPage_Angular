import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../../Data';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent {
  nameSignIn!: string;
  emailSignIn!: string;
  passwordSignIn!: string;
  emailLogIn !:  string;
  passwordLogIn !: string;
  data: Data[];
  localItem: string;

  status: boolean = true;
  clickEvent(){
    this.status = !this.status;       
  }

  constructor(private router: Router){
    this.localItem = localStorage.getItem("data")!;
    if(this.localItem == null){
      this.data = []
    }
    else{
      this.data = JSON.parse(this.localItem);
    }
  }
  onSubmitSignUp(){
    const info = {
      name:this.nameSignIn,
      email:this.emailSignIn,
      password:this.passwordSignIn
    }
    this.data.push(info);
    localStorage.setItem("data", JSON.stringify(this.data));
    this.router.navigate(['home'])
  }

  login(){}

  onSubmitSignIn(){
    for(let i=0; i<this.data.length; i++){
      if(this.emailLogIn == this.data[i].email && this.passwordLogIn == this.data[i].password){
        this.router.navigate(['home']);
      }
    }
    this.emailLogIn = "";
    this.passwordLogIn = "";
  }
}
