import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { apiKeys } from '../global-config/apiKeys';
import { User, Register, Login } from '../models/account-models/index';



@Injectable()
export class AccountService {
  userEvent:EventEmitter<User> = new EventEmitter<User>();


}




