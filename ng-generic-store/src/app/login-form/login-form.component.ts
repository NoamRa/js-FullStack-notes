import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { AccountService } from '../shared/services/account.service';
import { User, Login } from '../shared/models/account-models/index';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  // loginUser: Login;

  constructor(private accountService:AccountService,
              private formBuilder: FormBuilder) {
  }

  createForm():void {
    this.loginForm = this.formBuilder.group({
        userNameCtrl: ['', Login.userNameValidators ],
        userPasswordCtrl: ['', Login.userPasswordValidators ],
    })

  }

  ngOnInit() {
    this.createForm();
  }

  changeUser(){
    this.accountService.userEvent.emit(new User(this.loginForm.value.name, ""));
  }

}
