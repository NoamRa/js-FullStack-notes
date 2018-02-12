import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { User } from '../shared/models/account-models/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    
    userInfo = new User("Guest", "/assets/img/generic_avatar.svg");

    @Output() onRegister:EventEmitter<string> = new EventEmitter<string>();
    onRegisterClick():void{
        this.onRegister.emit("register");
        console.log("register was clicked");
    }

    @Output() onLogin:EventEmitter<string> = new EventEmitter<string>();
    onLoginClick():void{
        this.onLogin.emit("login");
        console.log("login was clicked");
    }



    constructor(private accountService:AccountService){}

    ngOnInit(){

    }
}
