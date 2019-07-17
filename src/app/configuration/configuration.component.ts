import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Article} from '../article';

@Component({
	selector: 'app-configuration',
	templateUrl: './configuration.component.html',
	styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

	articleForm:FormGroup;

	articleTable: Array<Article> = [
		{
			title: "un titre",
			article: "un premier article"
		}
	];

	constructor(fb: FormBuilder) {
		this.articleForm=fb.group({
			title:fb.control("",Validators.required),
			article:fb.control("",Validators.required)
		});
	}
	submit(){
		/* affichage des valeurs de mon form dans la console */
		console.log(this.articleForm.value);
		/* ajout des vqleurs de mon formulaire dans un tableau => articleTable */
		this.articleTable.push({ title: this.articleForm.value.title, article: this.articleForm.value.article});
	}


	ngOnInit() {
	}

}
