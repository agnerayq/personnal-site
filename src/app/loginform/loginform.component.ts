import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';


@Component({
	selector: 'app-loginform',
	templateUrl: './loginform.component.html',
	styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

	loginForm:FormGroup;

	constructor(fb: FormBuilder, private myRoute:Router, private auth:AuthService) {
		this.loginForm=fb.group({
			login:fb.control("",Validators.required),
			password:fb.control("",Validators.required)
		});


	}
	submit(){
		console.log(this.loginForm.value);
	}


	ngOnInit() {

	}

	login(){
		if(this.loginForm.valid){
			this.auth.sendToken(this.loginForm.value.password)
			this.myRoute.navigate(["home"]);
		}
	}

}
