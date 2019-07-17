import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
	selector: 'app-loginform',
	templateUrl: './loginform.component.html',
	styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

	loginForm:FormGroup;

	constructor(fb: FormBuilder) {
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

}
