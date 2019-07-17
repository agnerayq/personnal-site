import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

	constructor(private router: Router) { }

	setSecureToken(secure_token: string) {
		localStorage.setItem("LoggedIn",secure_token)
	}


	getSecureToken(){
		return localStorage.getItem("LoggedIn")
	}

	isLoggednIn(){
		return this.getSecureToken() !==null;
	}

	logout(){
		localStorage.removeItem("LoggedIn");
		this.router.navigate(["login"]);
	}

}
