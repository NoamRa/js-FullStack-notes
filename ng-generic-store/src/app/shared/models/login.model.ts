import { User } from './user.model';

export class Login extends User {
    constructor(public userName:string="nameOfUser", 
                public password:string="......") {
        super();
    }
}