import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { User, Login, Register } from '../shared/models/account-models/index';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private accountService:AccountService,
              private fb: FromBuilder){}

  ngOnInit() {
  }

  changeUser(){
    this.accountService.userEvent.emit(new User(this.loginForm.value.name, ""));
  }

  createForm(){
    this.loginForm = this.fb.group({
        userName: ["", ],
        userPassword: ["", ],
    })

  }

  ngOnChanges(){
    const fromModel = this.loginForm
  }



}
