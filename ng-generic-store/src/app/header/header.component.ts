import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    
    userInfo = new User("Guest", "/assets/img/generic_avatar.svg");

    @Output() onRegister:EventEmitter<string> = new EventEmitter<string>();
    onLoginClick():void{
        this.onLogin.emit("login");
        // console.log("login was clicked");
    }

    @Output() onLogin:EventEmitter<string> = new EventEmitter<string>();
    onRegisterClick():void{
        this.onRegister.emit("register");
        // console.log("Register was clicked");
    }
}
